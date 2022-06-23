import * as React from "react";
import "./ProductDetails.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
export default function ProductDetails() {
  return (
    <div className="Products">
      <Sidebar />
      <Navbar />
      <p>Products</p>
    </div>
  );
}
