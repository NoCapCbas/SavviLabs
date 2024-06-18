
package tests

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
  "fmt"

	"github.com/NoCapCbas/email-validation/internal/emailvalidation"
)

func TestValidateEmailHandler(t *testing.T) {
	tests := []struct {
		name           string
		email          string
		expectedStatus int
	}{
		{"ValidEmail", "ddiazny919@gmail.com", http.StatusOK},
		{"InvalidEmailFormat", "invalid-email", http.StatusBadRequest},
		{"MissingEmailParameter", "", http.StatusBadRequest},
		{"NonGETMethod", "", http.StatusMethodNotAllowed},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
      fmt.Println(tt.name)
			req := httptest.NewRequest(http.MethodGet, "/validate-email?email="+tt.email, nil)
			rr := httptest.NewRecorder()

			emailvalidation.ValidateEmailHandler(rr, req)

			if status := rr.Code; status != tt.expectedStatus {
				t.Errorf("handler returned wrong status code: got %v want %v", status, tt.expectedStatus)
			}

			if tt.expectedStatus == http.StatusOK {
				var response emailvalidation.EmailValidationResponse
				if err := json.NewDecoder(rr.Body).Decode(&response); err != nil {
					t.Errorf("error decoding response body: %v", err)
				}

				if response.Email != tt.email {
					t.Errorf("handler returned unexpected body: got %v want %v", response.Email, tt.email)
				}
			}
		})
	}
}

func TestNonGETMethod(t *testing.T) {
	req := httptest.NewRequest(http.MethodPost, "/validate-email", nil)
	rr := httptest.NewRecorder()

	emailvalidation.ValidateEmailHandler(rr, req)

	if status := rr.Code; status != http.StatusMethodNotAllowed {
		t.Errorf("handler returned wrong status code: got %v want %v", status, http.StatusMethodNotAllowed)
	}
}

