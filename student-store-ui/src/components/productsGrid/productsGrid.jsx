import * as React from "react";
import "./productsGrid.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
export default function productsGrid({ products }) {
  return (
    <div className="productsGrid" products={products}>
      <p>Products grid</p>

      <Navbar />
      <Sidebar />
    </div>
  );
}
