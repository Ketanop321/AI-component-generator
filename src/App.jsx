import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import NoPages from "./pages/NoPages";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  // Initialize demo user on first load
  useEffect(() => {
    const users = localStorage.getItem("users");
    if (!users) {
      const demoUsers = [
        {
          id: "1",
          email: "demo@example.com",
          name: "Demo User",
          password: btoa("password123"), // "password123" hashed
          createdAt: new Date().toISOString(),
        },
      ];
      localStorage.setItem("users", JSON.stringify(demoUsers));
      console.log("Demo user initialized. Use demo@example.com / password123");
    }
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NoPages />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
