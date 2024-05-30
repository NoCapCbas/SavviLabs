package main

import (
	"encoding/json"
	"log"
	"net/http"
	"sync"
)

// User struct to represent user data
type User struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Company   string `json:"company"`
	Phone     string `json:"phone"`
	Email     string `json:"email"`
	Budget    string `json:"budget"`
	TimeFrame string `json:"timeFrame"`
	URLs      string `json:"urls"`
	Comments  string `json:"comments"`
}

var (
	users []User
	mu    sync.Mutex
)

// CORS middleware to handle CORS in the server
func cors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// Handle preflight requests
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func createUserHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		log.Println("Error decoding user:", err)
		return
	}

	mu.Lock()
	users = append(users, user)
	mu.Unlock()

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(user)
	log.Println("User created:", user)
}

func getUsersHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	mu.Lock()
	defer mu.Unlock()

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
	log.Println("Users retrieved:", users)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/users", createUserHandler)
	mux.HandleFunc("/api/users/all", getUsersHandler)

	// Wrap the mux with the CORS middleware
	handler := cors(mux)

	log.Println("Server started at :8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}

