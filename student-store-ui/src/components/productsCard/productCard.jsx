import * as React from "react";
import "./ProductsCard.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
export default function ProductsCard(props) {
  return (

    <div className="product-card">
    <div className="info">
      <Link to={"/products/" + props.product.id}>
        <img src={props.product.image} />
      </Link>
    </div>

    <div className="product-info">
      <div className="main-info">
        <p className="product-name">{props.product.name}</p>
        <p className="product-price"> {"$" + props.product.price}</p>
      </div>

      <div className="actions">
        <div className="buttons">
          <button
            className="add"
            onClick={() => props.handleAddItemToCart(props.product.id)}
          >
            {" "}
            <i className="material-icons">add</i>
          </button>
          <button
            className="add"
            onClick={() => props.handleRemoveItemFromCart(props.product.id)}
          >
            {" "}
            <i className="material-icons">remove</i>
          </button>
        </div>
        {props.quantity ? (
          <span className="product-quantity">{props.quantity}</span>
        ) : null}
      </div>
    </div>
  </div>
    // <div className="Product-card">
    //   <div className="media">
    //     <a href={"/products/" + productId}>
    //       <img src={product.image}></img>
    //     </a>
    //   </div>
    //   <div className="info">
    //     <p className="product-name">{product.name}</p>

    //     <p className="product-price">{"$" + product.price}</p>
    //   </div>

    
    // </div>
  );
}
