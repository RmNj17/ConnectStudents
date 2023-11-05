import React from 'react';
import './login.css';
import mainlogo from './../../assets/Mainlogo.png';

const Login = () => {
  const paragraphs = [
    'Connecting Minds, Empowering Education',
    'Empowering Education through Digital Dialogue',
    'Revolutionizing Education with Interactive Discussions',
  ];

  return (
    <div className="container">
      <div className="form-container">
        <p className="title">Welcome back</p>
        <form className="form">
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
          <p className="page-link">
            <span className="page-link-label">Forgot Password?</span>
          </p>
          <button className="form-btn">Log in</button>
        </form>
        <p className="sign-up-label">
          Don't have an account?<span className="sign-up-link">Sign up</span>
        </p>
        <div className="buttons-container">
          <div className="apple-login-button">
            <span>As Student</span>
          </div>
          <div className="google-login-button">
            <span>As Teacher</span>
          </div>
        </div>
      </div>
      <div className="logo-container">
        <img src={mainlogo} alt="Logo" />
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Login;
