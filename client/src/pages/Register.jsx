// client/src/pages/Register.jsx
import React, { useState } from 'react';
import axios from '../axios';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', form);
      console.log('✅ Register success:', res.data);
      setMessage('Registered successfully!');
       // ✅ Save email for OTP verification
    localStorage.setItem("pendingEmail", form.email);
      setTimeout(() => navigate('/verify-otp'), 1000);
    } catch (err) {
      console.error('❌ Register error:', err.response?.data || err.message);
      setMessage(err.response?.data?.error || 'Registration failed');
    }
  };

  

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Join Us!</h1>
        <p>Register to get started</p>
      </div>
      <div className="login-right">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">Register</button>
          {message && <p style={{ marginTop: '10px', color: 'green' }}>{message}</p>}
        </form>
        <p><Link to="/login">Already have an account?</Link></p>
      </div>
    </div>
  );
};

export default Register;
