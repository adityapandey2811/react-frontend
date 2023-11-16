import React, { useState, useEffect } from "react";

const DiscountComponent = ({ cartItems, cartTotal, setCartTotal }) => {
  const [discounts, setDiscounts] = useState([]);
  const [appliedDiscount, setAppliedDiscount] = useState(null);

  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        // url dalo
        const response = await fetch("/api/discounts");

        if (response.ok) {
          const data = await response.json();
          setDiscounts(data);
        } else {
          console.error("Failed to fetch available discounts");
        }
      } catch (error) {
        console.error("Error fetching available discounts", error);
      }
    };

    fetchDiscounts();
  }, []);

  const applyDiscount = (discount) => {
    setAppliedDiscount(discount);
    setCartTotal(cartTotal - discount.amount);
  };

  return (
    <div className="discount-container">
      <h2>Available Discounts</h2>
      {discounts.length > 0 ? (
        <ul>
          {discounts.map((discount) => (
            <li key={discount.id}>
              {discount.name} - ${discount.amount}{" "}
              <button onClick={() => applyDiscount(discount)}>Apply</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No discounts available</p>
      )}

      {appliedDiscount && (
        <div>
          <h3>Applied Discount</h3>
          <p>{appliedDiscount.name} - ${appliedDiscount.amount}</p>
        </div>
      )}
    </div>
  );
};

export default DiscountComponent;
