import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Dashboard from "./pages/rahbariyat/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User1 from "./pages/User1";
import Tasks from "./pages/Tasks";
import AddUser from "./pages/rahbariyat/AddUser";

function App() {
  const token = localStorage.getItem("authToken"); // Consistently use authToken
  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Ensure authToken is checked
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
    navigate("/"); // Redirect to the dashboard after login
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div>
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
