import * as React from "react";
import "./ProductsCard.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
export default function ProductsCard({ product, productId }) {
  return (
    <div className="Product-card">
      <div className="media">
        <a href={"/products/" + productId}>
          <img src={product.image}></img>
        </a>
      </div>
      <div className="info">
        <p className="product-name">{product.name}</p>
        <p className="product-rating">{"$" + product.rating}</p>
        <p className="product-price">{"$" + product.price}</p>
      </div>

      <Sidebar />
    </div>
  );
}
