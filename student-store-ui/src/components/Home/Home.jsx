import * as React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Herobanner from "../Hero banner/Herobanner";
import ProductsCard from "../ProductsCard/ProductCard";
import ProductsGrid from "../ProductsGrid/ProductsGrid";

export default function Home({ products }) {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <Herobanner />
      <ProductsGrid products={products} />
    </div>
  );
}
