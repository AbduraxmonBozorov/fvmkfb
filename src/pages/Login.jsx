import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({setMessage}) => {
  const [formData, setFormData] = useState({ email: "", phone: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();    
    try {
      const response = await axios.post("/user/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.status == 200) {
        await  localStorage.setItem("token", response.data.token);
        setMessage(response.data.message)
        navigate("/");

        
      }
    } catch (err) {
      setError(err.response.data);
      setMessage( err.response.data.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold">Hisobingizga kiring</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default Login;
