# Quick Start Guide

## ⚡ Setup & Run (2 minutes)

### Step 1: Install Dependencies
```bash
npm install
cd backend && npm install && cd ..
```

### Step 2: Start Frontend
```bash
npm run dev
```
Visit: `http://localhost:5173`

### Step 3: Start Backend (Optional, for advanced features)
```bash
cd backend
npm run dev
```

## 🔐 Login

**Demo Credentials:**
- Email: `demo@example.com`
- Password: `password123`

Or create a new account with sign up.

## ✨ Features Now Available

### 1. **Authentication System**
   - ✅ Login/Sign Up
   - ✅ localStorage persistence
   - ✅ Protected routes
   - ✅ Auto-logout
   - ✅ Logout button

### 2. **Gemini API Integrated**
   - ✅ Direct client-side API calls
   - ✅ Code generation
   - ✅ Code explanation
   - ✅ AI chat assistant
   - ✅ Free tier (no credit card needed)

### 3. **User Session**
   - ✅ User info in navbar
   - ✅ Persistent login
   - ✅ Session timeout safe

## 📁 What Changed

**New Files Created:**
- `src/context/AuthContext.jsx` - Authentication context
- `src/pages/Login.jsx` - Login page
- `src/components/ProtectedRoute.jsx` - Route protection
- `src/components/LogoutButton.jsx` - Logout button
- `src/components/AIChat.jsx` - AI chat interface
- `src/utils/aiService.js` - Gemini API service
- `src/utils/authUtils.js` - Auth utilities
- `backend/.env` - Environment configuration

**Updated Files:**
- `src/App.jsx` - Added auth routing
- `src/components/Navbar.jsx` - Added logout button
- `backend/index.js` - Added auth endpoints
- `backend/package.json` - Added dependencies

## 🎯 Key Endpoints

### Frontend Routes
- `/login` - Login/Sign up page
- `/` - Home page (protected)
- `*` - 404 page

### Backend API (Optional)
- `POST /auth/register` - Create account
- `POST /auth/login` - Login
- `POST /generate` - Generate code with Gemini

## 🔑 API Key

The Gemini API key is already configured:
```
API Key: AIzaSyApcMBiy0xKG0yGV_D0yhih6Tv5WNMsfo
Model: gemini-1.5-flash
```

## 📝 Next Steps

1. Try logging in with demo credentials
2. Explore the AI chat feature
3. Create your own account
4. Integrate with backend if needed
5. Deploy to production

## 🆘 Quick Help

**Forgot password?** → Sign up with new email  
**Can't login?** → Clear localStorage: `localStorage.clear()`  
**API errors?** → Check internet connection  
**Backend not responding?** → Start it with `cd backend && npm run dev`

---

**Everything is ready! Start coding! 🚀**
