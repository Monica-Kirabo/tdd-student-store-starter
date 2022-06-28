import * as React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero /Hero";
import ProductsCard from "../ProductsCard/ProductCard";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import AboutUs from "../Aboutus/AboutUs";
import ContactUs from "../ContactuS/ContactUs";
import { SearchBar } from "../SearchBar/Searchbar";

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
      <Hero />
      <SearchBar />
      <ProductsGrid products={products} />

      <AboutUs />
      <ContactUs />
    </div>
  );
}
