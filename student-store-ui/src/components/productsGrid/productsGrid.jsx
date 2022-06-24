import * as React from "react";
import "./productsGrid.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
export default function productsGrid({ products }) {
  return (
    <div className="productsGrid">
      <Navbar />
      <Sidebar />
    </div>
  );
}
/*  products.map((products, idx) => {
            return (<Home key={idx} products={products} />);
          })*/
