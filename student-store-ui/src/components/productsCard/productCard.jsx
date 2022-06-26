import * as React from "react";
import "./ProductsCard.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
export default function ProductsCard({ products, productId }) {
  return (
    <div className="Product-card">
      <div className="media">
        <a href={"/products/" + productId}>
          <img src={products.image}></img>
        </a>
      </div>
      <div className="info">
        <p className="product-name">{products.name}</p>
        <p className="product-price">{"$" + products.price}</p>
      </div>

      <Sidebar />
    </div>
  );
}
