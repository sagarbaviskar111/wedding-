# Authentication System - Complete Implementation Guide

## 🎉 Features Implemented

### Backend Features ✅
1. **Email/Password Registration** with OTP verification
2. **Email/Password Login**
3. **Google OAuth Integration**
4. **Email OTP Verification**
5. **Phone OTP Verification** (SMS via Twilio)
6. **Forgot Password**
7. **Reset Password** with email link
8. **JWT Authentication**
9. **Protected Routes**

### Frontend Features ✅
1. **Authentication Context** with React Context API
2. **API Service Layer** with Axios
3. **Cookie-based Token Storage**
4. **Toast Notifications** for user feedback
5. **Google OAuth Button** (ready to integrate)

---

## 📋 Backend API Endpoints

### Public Endpoints

#### 1. Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+1234567890" // optional
}

Response:
{
  "success": true,
  "message": "Registration successful. Please verify your email.",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "isEmailVerified": false,
    "isPhoneVerified": false
  }
}
```

#### 2. Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "success": true,
  "token": "jwt_token_here",
  "user": { ... }
}
```

#### 3. Google OAuth
```http
POST /api/auth/google
Content-Type: application/json

{
  "googleId": "google_user_id",
  "email": "john@example.com",
  "name": "John Doe",
  "avatar": "https://avatar-url.com/image.jpg"
}

Response:
{
  "success": true,
  "token": "jwt_token_here",
  "user": { ... }
}
```

#### 4. Forgot Password
```http
POST /api/auth/forgot-password
Content-Type: application/json

{
  "email": "john@example.com"
}

Response:
{
  "success": true,
  "message": "Password reset email sent"
}
```

#### 5. Reset Password
```http
POST /api/auth/reset-password/:token
Content-Type: application/json

{
  "password": "newpassword123"
}

Response:
{
  "success": true,
  "message": "Password reset successful",
  "token": "new_jwt_token"
}
```

### Protected Endpoints (Require Authorization Header)

#### 6. Get Current User
```http
GET /api/auth/me
Authorization: Bearer jwt_token_here

Response:
{
  "success": true,
  "user": { ... }
}
```

#### 7. Send Email OTP
```http
POST /api/auth/send-email-otp
Authorization: Bearer jwt_token_here

Response:
{
  "success": true,
  "message": "OTP sent to your email"
}
```

#### 8. Verify Email OTP
```http
POST /api/auth/verify-email-otp
Authorization: Bearer jwt_token_here
Content-Type: application/json

{
  "otp": "123456"
}

Response:
{
  "success": true,
  "message": "Email verified successfully",
  "user": { ... }
}
```

#### 9. Send Phone OTP
```http
POST /api/auth/send-phone-otp
Authorization: Bearer jwt_token_here
Content-Type: application/json

{
  "phone": "+1234567890"
}

Response:
{
  "success": true,
  "message": "OTP sent to your phone"
}
```

#### 10. Verify Phone OTP
```http
POST /api/auth/verify-phone-otp
Authorization: Bearer jwt_token_here
Content-Type: application/json

{
  "otp": "123456"
}

Response:
{
  "success": true,
  "message": "Phone verified successfully",
  "user": { ... }
}
```

---

## 🔧 Configuration Required

### Backend (.env file)

```env
# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Twilio Configuration (Optional - for SMS OTP)
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_PHONE_NUMBER=your-twilio-phone-number

# Frontend URL (for password reset links)
FRONTEND_URL=http://localhost:3001
```

### Frontend (.env.local file)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
```

---

## 📧 Email Setup (Gmail)

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification

### Step 2: Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and your device
3. Click "Generate"
4. Copy the 16-character password
5. Use this as `EMAIL_PASSWORD` in your .env file

---

## 📱 SMS Setup (Twilio) - Optional

### Step 1: Create Twilio Account
1. Sign up at https://www.twilio.com/try-twilio
2. Get $15 free credit

### Step 2: Get Credentials
1. From Twilio Console, copy:
   - Account SID
   - Auth Token
2. Get a phone number from Twilio

### Step 3: Update .env
```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+1234567890
```

**Note:** If Twilio is not configured, the system will log OTPs to console in development mode.

---

## 🔐 Google OAuth Setup

### Step 1: Create Google Cloud Project
1. Go to https://console.cloud.google.com/
2. Create a new project
3. Enable Google+ API

### Step 2: Create OAuth Credentials
1. Go to "Credentials" in the sidebar
2. Click "Create Credentials" > "OAuth client ID"
3. Choose "Web application"
4. Add authorized JavaScript origins:
   - `http://localhost:3001`
   - Your production URL
5. Add authorized redirect URIs:
   - `http://localhost:3001/login`
   - Your production login URL
6. Copy the Client ID

### Step 3: Update Frontend .env.local
```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
```

---

## 🎨 Frontend Integration

### 1. Wrap App with AuthProvider

Update `src/app/layout.tsx`:

```tsx
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
```

### 2. Use Auth Hook in Components

```tsx
'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function MyComponent() {
  const { user, login, register, logout } = useAuth();

  const handleLogin = async () => {
    try {
      await login('email@example.com', 'password');
      // Redirect or show success
    } catch (error) {
      // Error is already shown via toast
    }
  };

  return (
    <div>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
```

---

## 🎯 Next Steps - Frontend Components to Create

### 1. Login Page (`src/app/login/page.tsx`)
- Email/Password form
- Google OAuth button
- "Forgot Password" link
- "Sign Up" link

### 2. Register Page (`src/app/register/page.tsx`)
- Name, Email, Password, Phone fields
- Google OAuth button
- "Already have an account?" link

### 3. Email Verification Modal
- OTP input (6 digits)
- Resend OTP button
- Auto-trigger after registration

### 4. Phone Verification Modal
- Phone number input
- OTP input
- Resend OTP button

### 5. Forgot Password Page
- Email input
- Submit button

### 6. Reset Password Page
- New password input
- Confirm password input
- Submit button

### 7. Protected Route Component
- Redirect to login if not authenticated
- Show loading state

---

## 🔄 Authentication Flow

### Registration Flow
1. User fills registration form
2. Submit to `/api/auth/register`
3. User receives email with OTP
4. User enters OTP
5. Submit to `/api/auth/verify-email-otp`
6. Email verified ✅
7. Optionally verify phone

### Login Flow
1. User enters email/password
2. Submit to `/api/auth/login`
3. Receive JWT token
4. Store in cookies
5. Redirect to dashboard

### Google OAuth Flow
1. User clicks "Continue with Google"
2. Google OAuth popup
3. Receive Google user data
4. Submit to `/api/auth/google`
5. Receive JWT token
6. Store in cookies
7. Redirect to dashboard

### Forgot Password Flow
1. User enters email
2. Submit to `/api/auth/forgot-password`
3. User receives email with reset link
4. User clicks link (contains token)
5. User enters new password
6. Submit to `/api/auth/reset-password/:token`
7. Password reset ✅
8. Auto-login with new token

---

## 🧪 Testing

### Test Email OTP (Development)
```bash
# Check backend console for OTP
# Example output:
# OTP for john@example.com: 123456
```

### Test Phone OTP (Development)
```bash
# If Twilio not configured, check console:
# Development mode - OTP for +1234567890: 654321
```

---

## 📦 Installed Packages

### Backend
- `nodemailer` - Email sending
- `twilio` - SMS sending
- `passport` - Authentication middleware
- `passport-google-oauth20` - Google OAuth strategy
- `express-session` - Session management

### Frontend
- `axios` - HTTP client
- `@react-oauth/google` - Google OAuth component
- `js-cookie` - Cookie management
- `react-hot-toast` - Toast notifications

---

## 🚀 Ready to Use!

The backend authentication system is **fully implemented** and ready to use. 

**Next:** Create the frontend UI components for login, register, and verification flows.

Would you like me to create the frontend authentication pages now?
