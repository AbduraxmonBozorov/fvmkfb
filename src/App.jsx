import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Dashboard from "./pages/rahbariyat/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User1 from "./pages/User1";
import Tasks from "./pages/Tasks";

function App() {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // authToken ni tekshirish
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <MainLayout>
                <Dashboard onLogout={handleLogout} />
              </MainLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/tasks"
          element={
            isAuthenticated ? (
              <MainLayout>
                <Tasks onLogout={handleLogout} />
              </MainLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/user/:id"
          element={
            isAuthenticated ? (
              <MainLayout>
                <User1 />
              </MainLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <Register setIsAuthenticated={handleLogin} />
            )
          }
        />
        {/* 11.12.2024 */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
