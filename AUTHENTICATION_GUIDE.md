# AI Code Generator - Authentication & Gemini API Setup

## Overview
This project now includes a complete authentication system with localStorage-based login and the free Google Gemini API integrated for AI-powered code generation.

## Features

### ✅ Authentication System
- **Login/Sign Up Page**: Beautiful, responsive authentication interface
- **localStorage Storage**: User data and auth tokens stored securely in browser
- **Protected Routes**: Home page is protected and requires authentication
- **Auto-login**: Users stay logged in even after refreshing the page
- **Logout Functionality**: Secure logout from navbar

### ✅ Gemini API Integration
- **Free API Key**: Using Google's free Gemini API (no credit card required)
- **Client-side AI**: Direct API calls from frontend (no backend required for chat)
- **Multi-feature AI**:
  - Code generation
  - Code explanation
  - Code improvement
  - General chat assistance

## Getting Started

### 1. Setup Frontend
```bash
cd d:\ai-com-gen
npm install
npm run dev
```

### 2. Setup Backend (Optional - for advanced features)
```bash
cd d:\ai-com-gen\backend
npm install
npm run dev
```

The backend listens on `http://localhost:5000`

## Authentication Flow

### Demo User
For quick testing, the app comes with a pre-seeded demo user:
- **Email**: `demo@example.com`
- **Password**: `password123`

### Register New Account
1. Click "Sign Up" on the login page
2. Enter name, email, and password (min 6 characters)
3. Confirm password
4. Click "Create Account"
5. You'll be automatically logged in

### Login
1. Enter your email
2. Enter your password
3. Click "Sign In"
4. You'll be redirected to the home page

### Logout
Click the "Logout" button in the top-right corner of the navbar

## File Structure

```
src/
├── context/
│   └── AuthContext.jsx          # Auth provider & context
├── pages/
│   ├── Login.jsx               # Login/Sign up page
│   ├── Home.jsx                # Protected home page
│   └── NoPages.jsx             # 404 page
├── components/
│   ├── ProtectedRoute.jsx       # Route protection wrapper
│   ├── LogoutButton.jsx         # Logout button component
│   ├── AIChat.jsx              # AI chat interface
│   └── Navbar.jsx              # Navigation with logout
├── utils/
│   ├── authUtils.js            # Auth helper functions
│   ├── aiService.js            # Gemini API service
│   └── (other utilities)
└── App.jsx                      # Main app with auth routing
```

## Key Components

### AuthContext.jsx
Provides authentication state globally to all components:
```jsx
const { user, login, logout, isAuthenticated, getAuthToken } = useContext(AuthContext);
```

### ProtectedRoute.jsx
Wraps routes that require authentication:
```jsx
<ProtectedRoute>
  <Home />
</ProtectedRoute>
```

### aiService.js
Functions for Gemini API:
```javascript
generateContent(prompt)          // General content generation
streamContent(prompt, onChunk)   // Stream responses
generateCode(description)         // Generate code
improveCode(code, instruction)   // Improve existing code
explainCode(code)                // Explain code functionality
```

## API Endpoints (Backend)

### Authentication
```
POST   /auth/register      - Create new user account
POST   /auth/login         - Login with email & password
GET    /auth/verify        - Verify authentication token
```

### AI Generation
```
POST   /generate           - Generate code (requires auth token)
       Body: { framework, prompt }
```

## Security Notes

⚠️ **For Demo Purposes**:
- Passwords are stored client-side (localStorage)
- No encryption for auth tokens
- Users stored in localStorage

🔐 **For Production**:
- Implement backend authentication with JWT tokens
- Hash passwords using bcrypt or similar
- Use secure HTTP only cookies
- Implement refresh token rotation
- Add rate limiting
- Use HTTPS only

## Gemini API Details

### Model Used
- **Model**: `gemini-1.5-flash` (latest free model)
- **API Key**: Already configured in `src/utils/aiService.js`
- **Pricing**: Free with generous rate limits

### Rate Limits
- 60 calls per minute (free tier)
- 30,000 calls per day (free tier)

### Capabilities
- Code generation & explanation
- Text generation
- Problem solving
- Chat conversations
- And much more!

## Troubleshooting

### "User not found" on login
→ Check that you're using the correct email from registration, or use demo account

### "Passwords do not match" on sign up
→ Verify both password fields contain identical values

### API call failed
→ Check internet connection and Gemini API key in `src/utils/aiService.js`

### Can't access home page
→ You're not logged in; go to `/login` first

### Backend not running
```bash
cd backend
npm install
npm run dev
```

## Customization

### Change Demo User
Edit `src/App.jsx`:
```javascript
const demoUsers = [
  {
    email: "your@email.com",
    password: btoa("your-password"),
    name: "Your Name",
  }
];
```

### Change API Model
Edit `src/utils/aiService.js`:
```javascript
const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-pro"  // or another model
});
```

### Modify Login Page Styling
Edit `src/pages/Login.jsx` - it's built with Tailwind CSS

## Next Steps

1. ✅ Authentication working
2. ✅ Gemini API integrated
3. 📝 Create user dashboard
4. 🗄️ Add database backend
5. 🔒 Implement production-grade authentication
6. 📊 Add usage analytics
7. 💾 Implement user history/saved items

## Support

For issues or questions:
1. Check the browser console for errors
2. Verify .env files have correct API keys
3. Ensure all dependencies are installed
4. Clear localStorage if experiencing auth issues: `localStorage.clear()`

---

Happy coding! 🚀
