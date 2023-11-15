import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import LoginPage from "./LoginPage/LoginPage";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import AdminPage from "./AdminPage";
import PoliciesPage from "./AllPoliciesPage/PoliciesPage";

function Routers(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact={true} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
