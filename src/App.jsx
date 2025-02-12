import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Dashboard from "./pages/rahbariyat/Dashboard";
import Login from "./pages/Login";
import User1 from "./pages/User1";
import Tasks from "./pages/Tasks";
import AddUser from "./pages/rahbariyat/AddUser";
import Settings from "./pages/Settings";
import Davomat from "./pages/rahbariyat/Davomat";

function App() {
  const token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);
  const navigate = useNavigate();
  
  
  

  const handleLogin = (token) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
    navigate("/"); // Redirect to the dashboard after login
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div>
      <Routes>
        {/* Dashboard */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <MainLayout handleLogout={handleLogout}>
                <Dashboard onLogout={handleLogout} />
              </MainLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Davomat */}
        <Route
          path="/davomat"
          element={
            isAuthenticated ? (
              <MainLayout handleLogout={handleLogout}>
                <Davomat onLogout={handleLogout} />
              </MainLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Add User */}
        <Route
          path="/addUser"
          element={
            isAuthenticated ? (
              <MainLayout handleLogout={handleLogout}>
                <AddUser onLogout={handleLogout} />
              </MainLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Tasks */}
        <Route
          path="/tasks"
          element={
            isAuthenticated ? (
              <MainLayout handleLogout={handleLogout}>
                <Tasks onLogout={handleLogout} />
              </MainLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        
        {/* User info */}
        <Route
          path="/user/:id"
          element={
            isAuthenticated ? (
              <MainLayout handleLogout={handleLogout}>
                <User1 />
              </MainLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        
        {/* Login */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <Login setIsAuthenticated={handleLogin} />
            )
          }
        />

        <Route
          path="/settings"
          element={
            isAuthenticated ? (
              <MainLayout handleLogout={handleLogout}>
                <Settings />
              </MainLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
