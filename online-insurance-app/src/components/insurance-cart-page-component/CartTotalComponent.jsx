import React from "react";

function CartTotalComponent({ allCartItems, setallCartItems }) {
  return (
    <div className="container">
      <h2 className="text-3xl">Cart Total: ${1000}</h2>
      <button
        className="select-none m-5 rounded-lg bg-red-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"
        onClick={() => {
          setallCartItems([]);
        }}
      >
        CLEAR CART
      </button>
      <button className="select-none m-5 rounded-lg bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40">
        CHECKOUT
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default CartTotalComponent;
