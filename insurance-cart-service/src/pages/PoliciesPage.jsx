import React from 'react';
import { useState } from 'react';
import NavigationBar from '../generic-components/NavigationBar';
import Policies from '../components/policies-page-components/Policies';
import PoliciesBanner from '../components/policies-page-components/PoliciesBanner';
import { catalogData } from '../testData/catalogData';
import { cartItemsData } from '../testData/cartItemsData';
import Footer from '../generic-components/Footer';

export default function PoliciesPage() {
  const [cartItems, setCartItems] = useState(cartItemsData);

  return (
    <div className='bg-slate-50'>
      <NavigationBar cartItemCount={cartItems.length} />
      <PoliciesBanner title={"Policy Catalog"} value={"Choose any policy you need."} />
      <Policies catalogData={catalogData} cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </div>
  )
}
