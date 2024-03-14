import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(email, password);
  }

  return (
    <div className="container4">
    <form className="loginBox" onSubmit={handleSubmit}  >
     <div className="main_form">
      <label htmlFor="email" >Email</label>
      <input 
        type="email"
        id="email"
        placeholder="E-mail"
        value={email}
        autocomplete="off"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="Password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="hover" type="submit">Login</button>
      <Link to="/register">
      <button>Register</button>
    </Link>
    </div>
    </form>
    </div>
  );
  }

export default Login;
