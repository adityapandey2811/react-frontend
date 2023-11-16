import axios from "axios";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function PolicyCard({
  userId,
  policyId,
  title,
  description,
  imageUrl,
  premium,
  companyName,
  insuranceType,
  cartItems,
  setCartItems,
}) {
  const bearerToken = useSelector((state) => state.auth.token);
  const [isHovered, setIsHovered] = useState(false);
  const addToCartHandler = async () => {
    try {
      if (cartItems.some((item) => item.policyId === policyId)) {
        const response = await axios.delete(
          "http://localhost:8077/insurancecart/deletePolicyFromCart",
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
            data: { userId, policyId }, 
          }
        );
        console.log(response);
        if (response.data.isPolicyDeleteSuccessfully) {
          setCartItems(cartItems.filter((item) => item.policyId !== policyId));
          console.log("Policy deleted");
        }
      } else {
        const response = await axios.post(
          "http://localhost:8077/insurancecart/addPolicyToCart",
          { userId, policyId },
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          }
        );
        console.log(response);
        if (response.data.isPolicyAddedSuccessfully) {
          setCartItems([...cartItems, { userId, policyId }]);
          console.log("Policy added");
        }
      }
    } catch (error) {
      console.error("Error adding to or deleting from cart", error);
    }
  };

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
        <h3>
          <label htmlFor="monthly-premium">Monthly Premium:</label> ${premium}
        </h3>
        <h3>
          <label htmlFor="offered-by">Offered By:</label> {companyName}
        </h3>
        <h3>
          <label htmlFor="offered-by">Insurance Type:</label> {insuranceType}
        </h3>
      </div>
      <div className="p-6 pt-0 flex items-center justify-around">
        <button
          className="add-to-cart-button select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 flex justify-center items-center"
          type="button"
          data-ripple-light="true"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={addToCartHandler}
        >
          {isHovered ? (
            <span className="icon-content opacity-0">
              <FaShoppingCart />
            </span>
          ) : (
            <span className="text-content">
              {cartItems.some((item) => item.policyId === policyId)
                ? "Remove From Cart"
                : "Add to Cart"}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
