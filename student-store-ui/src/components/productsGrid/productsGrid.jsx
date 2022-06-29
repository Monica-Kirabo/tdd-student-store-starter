import * as React from "react";
import "./productsGrid.css";
import ProductsCard from "../ProductsCard/ProductCard";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function ProductsGrid({ products }) {
  return (
    <div className="productsGrid">
      {products.map((product, idx) => {
        return (
          <ProductsCard
            key={product.id}
            product={product}
            productId={product.id}
          />
        );
      })}

      <Sidebar />
    </div>
  );
}
