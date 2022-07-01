import * as React from "react";
import "./productsGrid.css";
import ProductsCard from "../ProductsCard/ProductCard";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function ProductsGrid(props) {
  return (
    <div className="productsGrid">
      {props.products.map((product, idx) => {
        return (
          <ProductsCard
          product={product}
          productId={product.id}
          quantity={
            props.shoppingCart.find((item) => item.itemId === product.id)
              ? props.shoppingCart.find((item) => item.itemId === product.id)
                  .quantity
              : null
          }
          handleAddItemToCart={props.handleAddItemToCart}
          handleRemoveItemFromCart={props.handleRemoveItemFromCart}
          showDescription={false}
          key={idx}
          shoppingCart={props.shoppingCart}
          />
        );
      })}

     
    </div>
  );
}
