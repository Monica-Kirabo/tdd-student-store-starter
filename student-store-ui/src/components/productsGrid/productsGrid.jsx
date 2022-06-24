import * as React from "react";
import "./productsGrid.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
export default function productsGrid({ products }) {
  return (
    <div className="productsGrid">
      {products.map((products, idx) => {
        return <ProductCard key={idx} products={products} />;
      })}
      <Navbar />
      <Sidebar />
    </div>
  );
}
