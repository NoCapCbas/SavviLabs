package main

import (
	"encoding/json"
	// "fmt"
	"log"
	"net"
	"net/http"
	"net/smtp"
	"regexp"
	"strings"
)

// EmailValidationRequest struct to encapsulate the email validation request data
type EmailValidationRequest struct {
	Email string `json:"email"`
}

// EmailValidationResponse struct to encapsulate the email validation response data
type EmailValidationResponse struct {
	Email            string `json:"email"`
	IsValidEmail     bool   `json:"is_valid_email"`
	HasMX            bool   `json:"has_mx"`
	HasSPF           bool   `json:"has_spf"`
	SPFRecord        string `json:"spf_record,omitempty"`
	HasDMARC         bool   `json:"has_dmarc"`
	DMARCRecord      string `json:"dmarc_record,omitempty"`
}

func main() {
	http.HandleFunc("/validate-email", validateEmailHandler)
	log.Println("Starting server on :8081")
	log.Fatal(http.ListenAndServe(":8081", nil))
}

// validateEmailHandler handles the email validation requests
func validateEmailHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req EmailValidationRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}

	email := req.Email
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
		Email:        email,
		IsValidEmail: isValidEmail,
		HasMX:        hasMX,
	}

	hasSPF, spfRecord, hasDMARC, dmarcRecord := checkDomainRecords(domain)
	response.HasSPF = hasSPF
	response.SPFRecord = spfRecord
	response.HasDMARC = hasDMARC
	response.DMARCRecord = dmarcRecord

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
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
		client, err := smtp.Dial(mx.Host + ":25")
		if err != nil {
			log.Printf("Error: %v\n", err)
			continue
		}
		defer client.Close()

		if err = client.Hello("example.com"); err != nil {
			log.Printf("Error: %v\n", err)
			continue
		}

		if err = client.Mail("verify@example.com"); err != nil {
			log.Printf("Error: %v\n", err)
			continue
		}

		if err = client.Rcpt(email); err == nil {
			return true
		}
		log.Printf("Error: %v\n", err)
	}
	return false
}

