import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

function LoginPage({ login, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    if (login(username, password)) {
      navigate("/policies");
    }
  };

  return (
    <div className="bg-blue-100 p-4 sm:p-8 rounded-md max-w-md mx-auto mt-16">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <div className="mb-4">
        <label htmlFor="email" className="text-gray-700">
          Username
        </label>
        <div className="flex items-center">
          <ion-icon name="mail-outline" className="text-gray-700"></ion-icon>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="ml-2 w-full border-b-2 border-gray-300 py-1 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="text-gray-700">
          Password
        </label>
        <div className="flex items-center">
          <ion-icon
            name="lock-closed-outline"
            className="text-gray-700"
          ></ion-icon>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="ml-2 w-full border-b-2 border-gray-300 py-1 focus:outline-none"
          />
          <ion-icon
            className="cursor-pointer ml-2"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            onClick={() => setShowPassword(!showPassword)}
          ></ion-icon>
        </div>
      </div>
      <button
        className="bg-blue-700 text-white py-2 px-4 rounded-full w-full"
        type="button"
        onClick={handleLogin}
      >
        Login
      </button>
      <div className="flex text-sm text-gray-500 mt-4">
        <div className="mr-8">Signup</div>
        <div>Forgot Password?</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps, { login })(LoginPage);
