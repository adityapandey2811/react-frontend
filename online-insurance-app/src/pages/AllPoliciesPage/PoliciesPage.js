import React, { useEffect, useState } from "react";
import { cartItemsData } from "../../testData/cartItemsData";
import NavigationBar from "../../components/NavigationBar";
import PoliciesBanner from "../../components/policies-page-components/PoliciesBanner";
import Policies from "../../components/policies-page-components/Policies";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import axios from "axios";

function PoliciesPage(props) {
  const [cartItems, setCartItems] = useState(cartItemsData);
  const [catalogData, setCatalogData] = useState([]);
  const bearerToken = useSelector((state) => state.auth.token);
  console.log(bearerToken);
  console.log(localStorage.getItem("token"));
  useEffect(() => {
    const fetchCatalogData = async () => {
      try {
        // console.log(bearerToken);

        const response = await axios.get(
          "http://localhost:8077/insurance/getAllPolicies",
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          }
        );
        console.log(bearerToken);
        console.log(response.data);
        setCatalogData(response.data);
      } catch (error) {
        console.error("Error fetching catalog data:", error.message);
      }
    };

    fetchCatalogData();
  }, []);
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
