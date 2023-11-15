import React from "react";
import { useState } from "react";
import NavigationBar from "../generic-components/NavigationBar";
import Footer from "../generic-components/Footer";
import CartHeading from "../components/insurance-cart-page-component/CartHeading";
import { catalogData } from "../testData/catalogData";
import CartItemsContainer from "../components/insurance-cart-page-component/CartItemsContainer";
import CartTotalComponent from "../components/insurance-cart-page-component/CartTotalComponent";

function CartPage(props) {
  const [allCartItems, setallCartItems] = useState([
    {
      userId: 1,
      policyId: 101,
    }, {
      userId: 1,
      policyId: 102
    }
  ]);
  const [allCatalogData, setAllCatalogData] = useState(catalogData);

  return (
    <div className="bg-slate-50">
      <NavigationBar cartItemCount={allCartItems.length} />
      <br />
      <br />
      <br />
      <br />
      <CartHeading itemCount={allCartItems.length} />
      <CartItemsContainer
        allCartItems={allCartItems}
        setallCartItems={setallCartItems}
        allCatalogData={allCatalogData}
        setAllCatalogData={setAllCatalogData}
      />
      <CartTotalComponent allCartItems={allCartItems} setallCartItems={setallCartItems} />
      <Footer />
    </div>
  );
}

export default CartPage;
