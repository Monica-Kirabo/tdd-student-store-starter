import * as React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Herobanner from "../Hero banner/Herobanner";
import ProductsCard from "../ProductsCard/ProductCard";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import AboutUs from "../Aboutus/AboutUs";

export default function Home({ products }) {
  return (
    <div className="home">
      <div>
        <a
          href={"/products/" + products.id}
          state={{ products: products } + products.description}
        ></a>
      </div>
      <Navbar />
      <Sidebar />
      <Herobanner />
      <ProductsGrid products={products} />

      <AboutUs />
    </div>
  );
}
