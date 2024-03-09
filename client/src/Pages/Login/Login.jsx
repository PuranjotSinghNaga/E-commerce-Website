import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(email, password);
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="E-mail"
        value={email}
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

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
