package main

import (
	"log"
	"net/http"

	"github.com/NoCapCbas/email-validation/internal/emailvalidation"
)

func main() {
	http.HandleFunc("/validate-email", emailvalidation.ValidateEmailHandler)
	log.Println("Starting server on :8081")
	log.Fatal(http.ListenAndServe(":8081", nil))
}

