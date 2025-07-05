import React, { useState } from "react";
import axios from "../axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", form);
      setMessage("✅ Login successful!");

      // Save user/token in localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      setTimeout(() => navigate("/"), 1000); // Redirect to home
    } catch (err) {
      const error = err.response?.data;
      if (error?.verify) {
        setMessage("Please verify your email. OTP sent.");
        localStorage.setItem("pendingEmail", form.email);
        setTimeout(() => navigate("/verify-otp"), 1500);
      } else {
        setMessage(error?.message || "Login failed");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Welcome Back!</h1>
        <p>Log in to continue your music journey</p>
      </div>
      <div className="login-right">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <button className="login-btn">Login</button>
          <p style={{ color: "red", marginTop: "10px" }}>{message}</p>
        </form>
        <p>
          <Link to="/register">Don't have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
