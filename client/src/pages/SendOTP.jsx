import React, { useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";

import "./login.css";

const SendOTP = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/send-otp`, { email });
      setMsg("✅ OTP sent to your email");
    } catch (err) {
      setMsg("❌ " + (err.response?.data?.message || "Failed"));
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Reset Password</h1>
        <p>Enter email to get OTP</p>
      </div>
      <div className="login-right">
        <h2>Send OTP</h2>
        <form onSubmit={handleSendOTP}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <button className="login-btn">Send OTP</button>
          <p style={{ color: 'green' }}>{msg}</p>
        </form>
        <p><Link to="/">Back to Login</Link></p>
      </div>
    </div>
  );
};

export default SendOTP;
