import React, { useState } from "react";
import { cartItemsData } from "../../testData/cartItemsData";
import NavigationBar from "../../components/NavigationBar";
import PoliciesBanner from "../../components/policies-page-components/PoliciesBanner";
import Policies from "../../components/policies-page-components/Policies";
import Footer from "../../components/Footer";
import { catalogData } from "../../testData/catalogData";
import { useSelector } from "react-redux";

function PoliciesPage(props) {
  const [cartItems, setCartItems] = useState(cartItemsData);
  const sel = useSelector((state) => state.loginLogout.loggedIn);
  console.log(sel);

  return (
    <div className="bg-slate-50">
      <NavigationBar cartItemCount={cartItems.length} />
      <div className="mt-8">
        <PoliciesBanner
          title={"Policy Catalog"}
          value={"Choose any policy you need"}
        />
        <Policies
          catalogData={catalogData}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
      <Footer />
    </div>
  );
}

export default PoliciesPage;
