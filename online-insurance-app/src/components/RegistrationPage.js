import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../redux/actions/authActionsRegister";
import "./RegistrationPage.css";

const RegistrationPage = ({ register, error }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [userType, setUserType] = useState("");
  const [gender, setGender] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    register({
      username,
      firstName,
      lastName,
      phoneNo,
      userType,
      gender,
      nickName,
      password,
    });
  };

  return (
    <div className="screen-1">
      <div className="header">Register</div>
      {/* Additional input fields for registration */}
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
      <div className="firstName">
        <label htmlFor="firstName">First Name</label>
        <div className="sec-2">
          <ion-icon name="person-outline"></ion-icon>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>
      <div className="lastName">
        <label htmlFor="lastName">Last Name</label>
        <div className="sec-2">
          <ion-icon name="person-outline"></ion-icon>
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="phoneNo">
        <label htmlFor="phoneNo">Phone Number</label>
        <div className="sec-2">
          <ion-icon name="call-outline"></ion-icon>
          <input
            type="text"
            value={phoneNo}
            placeholder="Phone Number"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
      </div>
      <div className="userType">
        <label htmlFor="userType">User Type</label>
        <div className="sec-2">
          <ion-icon name="person-outline"></ion-icon>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="" disabled>
              Select User Type
            </option>
            <option value="USER">User</option>
          </select>
        </div>
      </div>
      <div className="gender">
        <label htmlFor="gender">Gender</label>
        <div className="sec-2">
          <ion-icon name="person-outline"></ion-icon>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="" disabled>
              Select Gender
            </option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
      </div>
      <div className="nickName">
        <label htmlFor="nickName">Nick Name</label>
        <div className="sec-2">
          <ion-icon name="person-outline"></ion-icon>
          <input
            type="text"
            value={nickName}
            placeholder="Nick Name"
            onChange={(e) => setNickName(e.target.value)}
          />
        </div>
      </div>
      <div className="username">
        <label htmlFor="username">Password</label>
        <div className="sec-2">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ion-icon
            className="show-hide"
            name="eye-outline"
            onClick={() => setShowPassword(!showPassword)}
          ></ion-icon>
        </div>
      </div>
      <button
        className="register-container register"
        type="button"
        onClick={handleRegister}
      >
        Register{" "}
      </button>
      <div className="footer register-container">
        <div className="signup">Login</div>
        <div className="forgot-password">Forgot Password?</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  error: state.auth.error,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
