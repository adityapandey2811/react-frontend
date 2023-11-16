import axios, { all } from "axios";
import React from "react";

function CartTotalComponent({ allCartItems, setallCartItems, allCatalogData }) {
  const bearerToken = localStorage.getItem("token");
  const deleteCartHandler = async () => {
    const response = await axios.delete(
      `http://localhost:8077/insurancecart/clearCart/${localStorage.getItem(
        "userId"
      )}`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    if (response.status == 200) {
      setallCartItems([]);
      console.log("All Policy deleted");
    }
  };
  const checkoutHandler = async () => {
    const response = await axios.post(
      "http://localhost:8077/insurancecart/createOrder",
      { userId: localStorage.getItem("userId"), isPaymentDone: true },
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    if (response.status == 200) {
      alert("Policies Purchased Successfully");
      setallCartItems([]);
    }
  };
  const cartDetailArray = [];
  for (let i = 0; i < allCartItems.length; i++) {
    for (let j = 0; j < allCatalogData.length; j++) {
      if (allCatalogData[j].policyId === allCartItems[i].policyId) {
        cartDetailArray.push(allCatalogData[j]);
      }
    }
  }
  return (
    <div className="container">
      <h2 className="text-3xl">
        Cart Total: $
        {cartDetailArray.reduce((total, policy) => {
          const policyTotal = policy.premium;
          return total + policyTotal;
        }, 0)}
      </h2>
      <button
        className="select-none m-5 rounded-lg bg-red-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"
        onClick={deleteCartHandler}
      >
        CLEAR CART
      </button>
      <button
        className="select-none m-5 rounded-lg bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"
        onClick={checkoutHandler}
      >
        CHECKOUT
      </button>
    </div>
  );
}

export default CartTotalComponent;
