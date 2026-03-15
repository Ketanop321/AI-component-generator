// Utility functions for authentication

export const generateToken = (userId) => {
  // Simple token generation for client-side usage
  // In production, this should come from your backend
  return `token_${userId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isStrongPassword = (password) => {
  // At least 6 characters (you can make this stricter)
  return password && password.length >= 6;
};

export const hashPassword = (password) => {
  // Simple client-side hashing (for demo purposes)
  // In production, never hash passwords on client side
  return btoa(password);
};

export const verifyPassword = (password, hash) => {
  return btoa(password) === hash;
};

export const sanitizeUserData = (user) => {
  return {
    id: user.id || Date.now().toString(),
    email: user.email,
    name: user.name || user.email.split("@")[0],
    createdAt: user.createdAt || new Date().toISOString(),
  };
};
