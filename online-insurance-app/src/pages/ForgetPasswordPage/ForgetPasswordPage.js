// src/ForgotPasswordPage.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../../redux/actions/authActionsReset';
import "./ForgetPasswordPage.css"

const ForgotPasswordPage = ({ forgotPassword, error }) => {
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleForgotPassword = () => {
    forgotPassword({
      username,
      nickname,
      newPassword,
    });
  };

  return (
    <div className="screen-1">
      <div className="header">Forgot Password</div>
      <div className="username">
        <label htmlFor="username">Username</label>
        <div className="sec-2">
          <ion-icon name="person-outline"></ion-icon>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="nickname">
        <label htmlFor="nickname">Nickname</label>
        <div className="sec-2">
          <ion-icon name="person-outline"></ion-icon>
          <input
            type="text"
            value={nickname}
            placeholder="Nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
      </div>
      <div className="new-password">
        <label htmlFor="newPassword">New Password</label>
        <div className="sec-2">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            type="password"
            value={newPassword}
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
      </div>
      <button className="forgot-password" type="button" onClick={handleForgotPassword}>
        Reset Password
      </button>
      <div className="footer forgot-password-container">
        <div className="signup">Login</div>
        <div className="signup">Sign Up</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

const mapDispatchToProps = {
  forgotPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);