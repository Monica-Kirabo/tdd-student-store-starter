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
import { useState } from "react";

export default function Home({ products }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnTextChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const items = products.filter((value) => {
    return value.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="home">
      {/* <div>
        <a
          href={"/products/" + products.id}
          state={{ products: products } + products.description}
        ></a>
      </div> */}
      <Navbar />
      <Sidebar />
      <Hero />
      <SearchBar handleOnChange={handleOnTextChange}/>
      <ProductsGrid products={items} />

      <AboutUs />
      <ContactUs />
    </div>
  );
}
