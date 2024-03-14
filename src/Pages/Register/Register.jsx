import React, { useState } from 'react';
import "./register.scss"
import { Link } from "react-router-dom";


const Register = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password, confirmPassword);
  };

  return (
    <div className="container4">
    <form className="loginBox" onRegister={handleSubmit} >
     <div className="main_form">
     <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type="submit">Register</button>
      <Link to="/login">
      <button>Login</button>
    </Link>
    </div>
    </form>
    </div>
  );
};

export default Register;