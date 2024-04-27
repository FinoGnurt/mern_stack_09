import React from "react";
import NavBar from "../features/navbar/NavBar";
import ProductDetails from "../features/product/components/ProductDetails";

const PorductDetailPage = () => {
  return (
    <div>
      <NavBar>
        <ProductDetails></ProductDetails>
      </NavBar>
    </div>
  );
};

export default PorductDetailPage;
