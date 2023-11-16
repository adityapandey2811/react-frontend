import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import InsuranceBuildingLogo from "../assets/building-icon.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/loginLogoutRedux";

const NavigationBar = ({ cartItemCount }) => {
  const [nav, setNav] = useState(false);
  const sel = useSelector((state) => state.loginLogout.loggedIn);
  const isLoggedIn = sel;
  const username = localStorage.getItem("userName");
  const dispatch = useDispatch();
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="relative w-full h-16 flex justify-between items-center px-4 bg-blue-900 text-white">
      <div className="flex items-center">
        <img
          src={InsuranceBuildingLogo}
          alt="insurance-building-logo"
          className="w-8 h-8 mr-2"
        />
        <h1 className="text-lg font-semibold">Insurance Company</h1>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden cursor-pointer" onClick={handleClick}>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 items-center">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/policies" className="hover:underline">
            Policies
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
        </li>
        <li className="flex items-center">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            {cartItemCount > 0 && (
              <span className="bg-red-500 text-white px-2 rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className="text-white mr-2">{`Hello, ${username}`}</li>
            <li>
              <button
                onClick={() => dispatch(logout())}
                className="border border-red-500 hover:border-red-700 text-red-500 hover:text-red-700 font-semibold rounded p-2"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/register"
                className="border border-red-500 hover:border-red-700 text-red-500 hover:text-red-700 font-semibold rounded p-2"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded p-2"
              >
                Login
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Mobile Menu */}
      {nav && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-blue-900 flex flex-col items-center">
          <ul className="flex flex-col items-center space-y-4 mt-16">
            <li>
              <Link to="/" className="text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/policies" className="text-xl">
                Policies
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-xl">
                About Us
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/cart" className="text-white">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                {cartItemCount > 0 && (
                  <span className="bg-red-500 text-white px-2 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="text-white">{`Hello, ${username}`}</li>
                <li>
                  <button
                    onClick={() => dispatch(logout())}
                    className="border border-red-500 hover:border-red-700 text-red-500 hover:text-red-700 font-semibold rounded p-2"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/register"
                    className="border border-red-500 hover:border-red-700 text-red-500 hover:text-red-700 font-semibold rounded p-2"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded p-2"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
