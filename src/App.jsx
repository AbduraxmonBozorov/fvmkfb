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
import { ToastContainer, toast } from "react-toastify";

function App() {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    message.length ? toast(message) : "";
  }, [message]);

  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("auth");
    setMessage("Siz tizimdan muvoffaqiyatli chiqdiz!");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div>
      <ToastContainer />
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
                <AddUser onLogout={handleLogout} setMessage={setMessage} />
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
                <User1 setMessage={setMessage} />
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
              <Login setMessage={setMessage} />
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
