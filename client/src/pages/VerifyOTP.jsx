import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ GET EMAIL FROM LOCALSTORAGE
  const email = localStorage.getItem("pendingEmail");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/verify-otp", {
        email,
        otp
      });

      setMessage("✅ OTP verified!");
      localStorage.removeItem("pendingEmail"); // Clean up

      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage("❌ OTP verification failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Verify Email</h1>
        <p>Enter the OTP sent to your email</p>
      </div>
      <div className="login-right">
        <h2>Verify OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button className="login-btn">Verify OTP</button>
          <p style={{ color: "red", marginTop: "10px" }}>{message}</p>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
