import React from 'react';
import { useState, useEffect } from 'react';
import PolicyCard from './PolicyCard';
// import { catalogData } from '../testData/catalogData';
// import { cartItemsData } from '../testData/cartItemsData';  

export default function Policies({ catalogData, cartItems, setCartItems }) {
  const userId = 1;

  console.log("Cart Items");
  console.log(cartItems);

  const PolicyCards = catalogData.map((policyItem) => {
    return <PolicyCard key={policyItem.policyId}
    userId={userId}
    policyId={policyItem.policyId} 
    title={policyItem.policyName} 
    description={policyItem.description} 
    imageUrl="https://i.pravatar.cc"
    premium={policyItem.premium}
    insuranceType={policyItem.insuranceType}
    companyName={policyItem.companyName}
    cartItems={cartItems}
    setCartItems={setCartItems} />
  })

  console.log(PolicyCards);

  return (
    <div className='container px-5 py-12 mx-auto flex flex-wrap items-center justify-center'>
      {PolicyCards}
    </div>
  )
}
