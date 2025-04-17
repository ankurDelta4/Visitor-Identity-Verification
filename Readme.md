# 🔒 Visitor Identity Verification System

## Overview

This system provides secure identity verification for visitors using HMAC token generation. It offers a reliable way to authenticate visitors through unique identifiers, email addresses, or phone numbers.

---

## ✨ Features

- **Secure Authentication** - Uses HMAC-SHA256 for robust token generation
- **Flexible Identification** - Supports multiple identification methods
- **Error Handling** - Comprehensive error management throughout the process
- **API Endpoint** - Simple RESTful interface for easy integration

---

## 🛠️ Technical Architecture

```

---

## 🚀 Getting Started

### Prerequisites

- Node.js environment
- Express.js framework
- Crypto module

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set environment variable: `HMAC_SECRET_KEY` 
4. Start the server: `npm start`

---

## 📡 API Usage

### Identity Verification Endpoint

**Endpoint:** `/identity`

**Method:** `POST`

**Request Body:**
```json
{
  "visitorUniqueId": "visitor-123",
  "visitorEmail": "visitor@example.com",
  "visitorPhone": "1234567890"
}
```

**Successful Response:**
```json
{
  "hmacToken": "5f4dcc3b5aa765d61d8327deb882cf99..."
}
```

**Error Response:**
```json
{
  "message": "An error occurred during identity verification."
}
```

---

## 🔐 Security Considerations

- The secret key should be stored securely in environment variables
- Token generation prioritizes unique ID over email and phone
- All input data is validated before processing

---

## 📝 Code Documentation

### Controllers

The `IndetificationController` handles the verification process:
- Extracts visitor data from request
- Accesses the secret key
- Delegates token generation to the helper
- Returns appropriate responses

### Helpers

The `generateHmacToken` function:
- Validates input parameters
- Creates HMAC using SHA256 algorithm
- Returns hexadecimal token string
- Handles errors gracefully

---

## 🔄 Process Flow

1. Client sends identification data
2. Router directs to controller
3. Controller extracts data and secret key
4. Helper generates HMAC token
5. Token is returned to client
6. Any errors are caught and handled

---

## 👨‍💻 Maintenance

For questions or support, please contact the system administrator.

© 2025 Visitor Verification System
