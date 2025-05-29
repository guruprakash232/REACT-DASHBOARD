import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../auth/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validUser = {
    email: 'admin@example.com',
    password: 'Admin@123',
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === validUser.email && password === validUser.password) {
      alert("Welcome back to EDUFLEX-DASHBOARD!");
      navigate('/dashboard');
    } else {
      alert("Incorrect email or password.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin} autoComplete="off">
        <h2 className="login-title">Login to Your Account</h2>

        <div className="input-wrapper">
          <label htmlFor="email" className="input-label">Email</label>
          <input
            type="email"
            id="email"
            className="input-field"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password" className="input-label">Password</label>
          <div className="password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="input-field"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <button type="submit" className="login-button">Login</button>

  
        <div className="login-footer">
          <a href="#" className="footer-link">Forgot password?</a>
          <p>
            Don’t have an account? <a href="#" className="footer-link">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
