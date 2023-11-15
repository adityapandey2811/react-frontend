import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOption } from "../redux/adminSlice";
import PolicyForm from "./PolicyForm";
import DiscountForm from "./DiscountForm";

const AdminPage = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.admin.selectedOption);

  const handleOptionChange = (option) => {
    dispatch(selectOption(option));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-semibold mb-6 md:text-center">Admin Page</h1>
      <div className="md:flex md:justify-between">
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="policy"
              checked={selectedOption === "policy"}
              onChange={() => handleOptionChange("policy")}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">Add Policy</span>
          </label>
        </div>
        <div className="mb-4 ">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="discount"
              checked={selectedOption === "discount"}
              onChange={() => handleOptionChange("discount")}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">Add Discount</span>
          </label>
        </div>
      </div>
      <div>
        {selectedOption === "policy" && <PolicyForm />}
        {selectedOption === "discount" && <DiscountForm />}
        {/* {submissionMessage && <p className="text-green-500 mt-4">{submissionMessage}</p>} */}
      </div>
    </div>
  );
};

export default AdminPage;
