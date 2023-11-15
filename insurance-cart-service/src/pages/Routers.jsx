import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import PoliciesPage from "./PoliciesPage";
import CartPage from "./CartPage";

function Routers(props) {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="policies" element={<PoliciesPage />} />
          <Route path="cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
