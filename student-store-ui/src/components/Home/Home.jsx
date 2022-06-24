import * as React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Herobanner from "../Hero banner/Herobanner";
import ProductCard from "../productsCard/productCard";

export default function Home({ products }) {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <Herobanner />
      <productsGrid products={products} />

      <p> </p>
    </div>
  );
}
