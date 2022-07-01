import * as React from "react";
import "./ProductView.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductsCard from "../ProductsCard/ProductCard";
export default function ProductView({ product, productId }) {
  return (
    <div className="view">
     
      { <ProductsCard
        showDescription={true}
        product={product}
        productId={productId}
      />}

     

      
    </div>
  );
}
