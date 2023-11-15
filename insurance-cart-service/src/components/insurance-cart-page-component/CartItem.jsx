import React from "react";

function CartItem({ singleCartItemData, allCartItems, setCartItemData, setallCartItems }) {

  return (
    <div className="w-full h-28 m-4 flex flex-row justify-evenly items-center text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div className="w-1/4 h-full flex justify-center items-center">
        <img
          src="https://icons8.com/icon/122504/building" // Replace this with the actual path to your local image
          alt="Icon"
          className="w-6 h-6" // Adjust the width and height based on your design
        />
      </div>
      <div className="w-1/4 h-full flex flex-col justify-center items-center">
        <h1 className="text-xl">{singleCartItemData.policyName}</h1>
        <h3>{singleCartItemData.insuranceType}</h3>
      </div>
      <div className="w-1/4 h-full flex flex-col justify-center items-center">
        <h2 className="text-xl">${singleCartItemData.premium}</h2>
      </div>
      <div className="w-1/4 h-full flex justify-center items-center flex-col">
        <button
          id="remove-item-from-cart"
          className="select-none rounded-lg bg-red-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"
          onClick={() => {
            const newCartItem = allCartItems.filter(item => item.policyId !== singleCartItemData.policyId);
            setallCartItems(newCartItem);
          }}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
}

export default CartItem;
