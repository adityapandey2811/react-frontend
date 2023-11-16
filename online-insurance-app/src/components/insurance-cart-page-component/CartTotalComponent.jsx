import axios from "axios";
import React from "react";

function CartTotalComponent({ allCartItems, setallCartItems }) {
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
  return (
    <div className="container">
      <h2 className="text-3xl">Cart Total: ${1000}</h2>
      <button
        className="select-none m-5 rounded-lg bg-red-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"
        onClick={deleteCartHandler}
      >
        CLEAR CART
      </button>
      <button className="select-none m-5 rounded-lg bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40">
        CHECKOUT
      </button>
    </div>
  );
}

export default CartTotalComponent;
