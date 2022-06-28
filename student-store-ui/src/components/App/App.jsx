import * as React from "react";
import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import NotFound from "../NotFound/NotFound";
import Hero from "../Hero /Hero";
import "./App.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../Aboutus/AboutUs";
import { SearchBar } from "../SearchBar/Searchbar";
import CheckOutForm from "../checkOutForm/checkoutForm";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        console.log("response", response);

        setProducts(response.data.products);
        console.log(products);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/products/:productId" element={<ProductDetails />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/checkout" element={<CheckOutForm />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Home products={products} />
      <SearchBar products={products} />
    </div>
  );
}
