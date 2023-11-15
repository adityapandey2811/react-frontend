// src/LoginPage.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "./redux/actions/authActions";
import "./LoginPage.css";

const LoginPage = ({ login, error }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div className="screen-1">
      <div className="header">Login</div>
      <div className="email">
        <label for="email">Email Address</label>
        <div className="sec-2">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="text" value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
        </div>
      </div>
      <div className="password">
        <label for="password">Password</label>
        <div className="sec-2">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type={showPassword ? 'text' : 'password'} value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <ion-icon className="show-hide" name="eye-outline" onClick={() => setShowPassword(!showPassword)}></ion-icon>
        </div>
      </div>
      <button className="login" type="button" onClick={handleLogin}>Login </button>
      <div className="footer">
        <div>Signup</div>
        <div>Forgot Password?</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps, { login })(LoginPage);
