import React, { useState } from "react";
import PolicyCard from "./PolicyCard";

export default function Policies({ catalogData, cartItems, setCartItems }) {
  const userId = 1;

  const [activeFilter, setActiveFilter] = useState("ALL");

  const filterOptions = [
    "ALL",
    "LIFE INSURANCE",
    "MEDICAL INSURANCE",
    "VEHICLE INSURANCE",
    "FIRE INSURANCE",
    "PROPERTY INSURANCE",
  ];

  const filteredPolicies =
    activeFilter === "ALL"
      ? catalogData
      : catalogData.filter((policy) => policy.insuranceType === activeFilter);

  const PolicyCards = filteredPolicies.map((policyItem) => {
    return (
      <PolicyCard
        key={policyItem.policyId}
        userId={userId}
        policyId={policyItem.policyId}
        title={policyItem.policyName}
        description={policyItem.description}
        imageUrl="https://i.pravatar.cc"
        premium={policyItem.premium}
        insuranceType={policyItem.insuranceType}
        companyName={policyItem.companyName}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    );
  });

  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="flex justify-center space-x-4 mb-8">
        {filterOptions.map((option) => (
          <button
            key={option}
            className={`px-4 py-2 rounded-full focus:outline-none ${
              activeFilter === option
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveFilter(option)}
          >
            {option === "all" ? "All" : option}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {PolicyCards}
      </div>
    </div>
  );
}