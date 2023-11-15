import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitForm } from "../redux/adminSlice";
import axios from "axios";

const DiscountForm = () => {
  const dispatch = useDispatch();
  const [discountData, setDiscountData] = useState({
    policyId: 0,
    price: 0.0,
  });

  const handleChange = (e) => {
    setDiscountData({ ...discountData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://your-backend-url/api/discounts",
        discountData
      );

      dispatch(submitForm({ type: "discount", data: response.data }));

      setDiscountData({
        policyId: 0,
        price: 0.0,
      });
    } catch (error) {
      console.error("Error submitting discount form:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Discount Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="policyId"
            className="block text-sm font-medium text-gray-600"
          >
            Policy ID
          </label>
          <input
            type="number"
            id="policyId"
            name="policyId"
            value={discountData.policyId}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-600"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={discountData.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DiscountForm;
