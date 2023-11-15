import React from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function PolicyCard({ userId, policyId, title, description, 
  imageUrl, premium, companyName, insuranceType, cartItems, setCartItems }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="m-4 flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
      </div>
      <div className="policy-meta-data p-6 text-left">
        <h3><label htmlFor="monthly-premium">Monthly Premium:</label> ${premium}</h3>
        <h3><label htmlFor="offered-by">Offered By:</label> {companyName}</h3>
        <h3><label htmlFor="offered-by">Insurance Type:</label> {insuranceType}</h3>
      </div>
      <div className="p-6 pt-0 flex items-center justify-around">
        <button
          className="show-details-button select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"
          type="button"
          data-ripple-light="true"
        >
          Show Details
        </button>
        <button
          className="add-to-cart-button select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 flex justify-center items-center"
          type="button"
          data-ripple-light="true"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={(e) => {
            if (cartItems.some(item => item.policyId === policyId)) {
              setCartItems(cartItems.filter(item => item.policyId !== policyId));
            } else {
              setCartItems([...cartItems, { userId, policyId }])
            }
          }}
        >
          {isHovered ? (
            <span className="icon-content opacity-0">
              <FaShoppingCart />
            </span>
          ) : (
            <span className="text-content">{
              cartItems.some(item => item.policyId === policyId) ? 
              "Remove From Cart" : "Add to Cart"}</span>
          )}
        </button>
      </div>
    </div>
  );
}
