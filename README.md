# PurpleTime Backend

Backend server for PurpleTime web application.

## Features
- User authentication
- Payment processing (Razorpay)
- Usage tracking
- API endpoints

## Setup
1. Install dependencies: `npm install`
2. Start server: `npm start`
3. Development: `npm run dev`

## API Endpoints
- GET / - Server status
- GET /health - Health check
- GET /api - API information
- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- GET /api/user/profile - User profile
- POST /api/payment/create-order - Create payment order

## Environment Variables
- PORT - Server port (default: 3000)
- JWT_SECRET - JWT secret key
- RAZORPAY_KEY_ID - Razorpay key ID
- RAZORPAY_KEY_SECRET - Razorpay key secret

## Development
```bash
# Start development server
npm run dev

# Test endpoints
curl http://localhost:3000/health
```
