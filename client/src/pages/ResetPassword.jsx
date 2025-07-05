import React, { useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";

import "./login.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/reset-password`, { email, newPassword });
      setMsg("✅ Password reset successful");
    } catch (err) {
      setMsg("❌ " + (err.response?.data?.message || "Failed"));
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Set New Password</h1>
        <p>Enter your email & new password</p>
      </div>
      <div className="login-right">
        <h2>Reset Password</h2>
        <form onSubmit={handleReset}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>New Password</label>
            <input type="password" value={newPassword} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button className="login-btn">Reset Password</button>
          <p style={{ color: 'green' }}>{msg}</p>
        </form>
        <p><Link to="/">Back to Login</Link></p>
      </div>
    </div>
  );
};

export default ResetPassword;
