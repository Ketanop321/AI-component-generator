import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const LogoutButton = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.info("Logged out successfully");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="text-sm">
        <p className="text-gray-700 font-semibold">{user.name}</p>
        <p className="text-gray-500 text-xs">{user.email}</p>
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
