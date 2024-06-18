package emailvalidation

import (
	"encoding/json"
	"log"
	"net"
	"net/http"
	"net/smtp"
	"regexp"
	"strings"
  "time"
)

// EmailValidationResponse struct to encapsulate the email validation response data
type EmailValidationResponse struct {
	Email       string `json:"email"`
	IsValidEmail bool   `json:"is_valid_email"`
	HasMX       bool   `json:"has_mx"`
	HasSPF      bool   `json:"has_spf"`
	SPFRecord    string `json:"spf_record,omitempty"`
	HasDMARC    bool   `json:"has_dmarc"`
	DMARCRecord  string `json:"dmarc_record,omitempty"`
}

// ValidateEmailHandler handles the email validation requests
func ValidateEmailHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req struct {
		Email string `json:"email"`
	}
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		log.Println("Error decoding request:", err)
		return
	}

	email := req.Email
	if email == "" {
		http.Error(w, "Email parameter is required", http.StatusBadRequest)
		return
	}

	if !validateEmailFormat(email) {
		http.Error(w, "Invalid email format", http.StatusBadRequest)
		return
	}

	domain := strings.Split(email, "@")[1]
	hasMX, mxRecords := checkDomainMXRecords(domain)
	isValidEmail := false
	if hasMX {
		isValidEmail = verifyEmailAddress(email, mxRecords)
	}

	response := EmailValidationResponse{
		Email:       email,
		IsValidEmail: isValidEmail,
		HasMX:       hasMX,
	}

	hasSPF, spfRecord, hasDMARC, dmarcRecord := checkDomainRecords(domain)
	response.HasSPF = hasSPF
	response.SPFRecord = spfRecord
	response.HasDMARC = hasDMARC
	response.DMARCRecord = dmarcRecord

	w.Header().Set("Content-Type", "application/json")
	err = json.NewEncoder(w).Encode(response)
	if err != nil {
		log.Println("Error encoding response:", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}
}

// checkDomainMXRecords checks the MX records for a domain
func checkDomainMXRecords(domain string) (bool, []*net.MX) {
	mxRecords, err := net.LookupMX(domain)
	if err != nil {
		log.Printf("Error: %v\n", err)
		return false, nil
	}
	return len(mxRecords) > 0, mxRecords
}

// checkDomainRecords checks the SPF and DMARC records for a domain
func checkDomainRecords(domain string) (bool, string, bool, string) {
	var hasSPF, hasDMARC bool
	var spfRecord, dmarcRecord string

	txtRecords, err := net.LookupTXT(domain)
	if err != nil {
		log.Printf("Error: %v\n", err)
	}

	for _, record := range txtRecords {
		if strings.HasPrefix(record, "v=spf1") {
			hasSPF = true
			spfRecord = record
			break
		}
	}

	dmarcRecords, err := net.LookupTXT("_dmarc." + domain)
	if err != nil {
		log.Printf("Error: %v\n", err)
	}

	for _, record := range dmarcRecords {
		if strings.HasPrefix(record, "v=DMARC1") {
			hasDMARC = true
			dmarcRecord = record
			break
		}
	}

	return hasSPF, spfRecord, hasDMARC, dmarcRecord
}

// validateEmailFormat uses regex to validate the format of an email address
func validateEmailFormat(email string) bool {
	re := regexp.MustCompile(`^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`)
	return re.MatchString(email)
}

// verifyEmailAddress attempts to verify an email address by connecting to its domain's SMTP server
func verifyEmailAddress(email string, mxRecords []*net.MX) bool {
	for _, mx := range mxRecords {
    log.Printf("Trying MX record: %s", mx.Host)

    timeout := 10 * time.Second
    conn, err := net.DialTimeout("tcp", mx.Host+":25", timeout)
		if err != nil {
      log.Printf("Error dialing MX record %s: %v\n", mx.Host, err)
			continue
		}
		defer conn.Close()

		client, err := smtp.NewClient(conn, mx.Host)
    if err != nil {
      log.Printf("Error creating SMTP client for MX record %s: %v\n", mx.Host, err)
    }

		if err = client.Hello("example.com"); err != nil {
			log.Printf("Error during HELO/EHLO for MX record %s: %v\n", mx.Host, err)
			continue
		}

		if err = client.Mail("verify@example.com"); err != nil {
      log.Printf("Error during MAIL command for MX record %s: %v\n", mx.Host, err)
			continue
		}

		if err = client.Rcpt(email); err == nil {
      log.Printf("Email is %s is valid according to MX record %s", email, mx.Host)
			return true
		}
		log.Printf("Error during RCPT command for MX record %s: %v\n", mx.Host, err)
	}
  log.Printf("Email %s is invalid", email)
	return false
}

