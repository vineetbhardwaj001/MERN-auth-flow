import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">AUTH PORJECT</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <Link to="/login" className="btn-start">Get Started</Link>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-left">
          <h1>Welcome My AuthProject</h1>
          <h2>Send feedback</h2>
        <p>
  ✅ Hi Everyone! 👋 <br />
  This is a fully working project with the following key features: <br /><br />

  🔐 <strong>Authentication Flow</strong> <br />
  ✅ User Signup <br />
  📧 OTP Email Verification <br />
  🔑 Secure Login with JWT <br />
  🔍 MongoDB Check for Existing User <br />
  🚫 If user is not verified, they are redirected to the OTP page and sent a new OTP. <br />
</p>

          <div className="home-buttons">
            <Link to="/login" className="btn">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </div>
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>

        <div className="hero-right tech-stack">
          <h3>Frontend Tech</h3>
          <ul>
            <li>✅ React.js</li>
            <li>✅ React Router</li>
            <li>✅ Axios</li>
            <li>✅ CSS3 (custom responsive)</li>
          </ul>

          <h3>Backend Tech</h3>
          <ul>
            <li>✅ Node.js + Express</li>
            <li>✅ MongoDB + Mongoose</li>
            <li>✅ JWT Authentication</li>
            <li>✅ Nodemailer (OTP & Mail)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
