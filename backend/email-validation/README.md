# Email Validation Microservice

This microservice validates email addresses by checking their format, domain MX, SPF, and DMARC records, and attempting to verify the email address via SMTP.

## Features

- Validate the format of an email address.
- Check the MX, SPF, and DMARC records of the email's domain.
- Verify the email address by connecting to its domain's SMTP server.

## Prerequisites

- Go 1.15+ installed on your machine.
- Internet connection to perform DNS and SMTP lookups.

## Getting Started


### Run the Microservice
```
go run main.go
```
This will start the server on http://localhost:8080.

### Usage

Endpoint
POST /validate-email
Request Body
Send a JSON object containing the email address you want to validate.
```json
{
  "email": "test@example.com"
}
```
Response
The response will be a JSON object with the validation results.

```
json
{
  "email": "test@example.com",
  "is_valid_email": true,
  "has_mx": true,
  "has_spf": true,
  "spf_record": "v=spf1 include:_spf.example.com ~all",
  "has_dmarc": true,
  "dmarc_record": "v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com"
}

```
Example Using curl
```sh
curl -X POST http://localhost:8080/validate-email -d '{"email": "test@example.com"}' -H "Content-Type: application/json"
```
Send the request and see the response.

## Code Overview

EmailValidationRequest: Struct to encapsulate the email validation request data.
EmailValidationResponse: Struct to encapsulate the email validation response data.
validateEmailHandler: HTTP handler to process email validation requests.
checkDomainMXRecords: Function to check the MX records of a domain.
checkDomainRecords: Function to check the SPF and DMARC records of a domain.
validateEmailFormat: Function to validate the format of an email address.
verifyEmailAddress: Function to verify an email address by connecting to its domain's SMTP server.

## Error Handling

If the email format is invalid, the server responds with 400 Bad Request.
If the request method is not POST, the server responds with 405 Method Not Allowed.
If there's an error reading the request body, the server responds with 400 Bad Request.

