import * as React from "react";
import "./ProductsCard.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
export default function ProductCard({ products }) {
  return (
    <div className="Product-card" products={products}>
      <p>Products</p>

      <Sidebar />
    </div>
  );
}
