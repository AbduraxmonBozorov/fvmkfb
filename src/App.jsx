import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Dashboard from "./pages/rahbariyat/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User1 from "./pages/User1";
import { useSelector } from "react-redux";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = useSelector(state => state.token);
  console.log(token);

  useEffect(() => {
    if (token=="none") {
      setIsAuthenticated(false);
    }else{
      setIsAuthenticated(true)
    }
  }, [token]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }else{
      setIsAuthenticated(false)
    }
  }, []);


  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <MainLayout>
                <Dashboard />
              </MainLayout>
            ) : (
              <Navigate to="/login"  />
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
              <Navigate to="/login"  />
            )
          }
        />

        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/"  />
            ) : (
              <Register />
            )
          }
        />

        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/"  />
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
