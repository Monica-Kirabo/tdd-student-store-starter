import * as React from "react";
import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import productsGrid from "../productsGrid/productsGrid";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

export default function App() {
  const [products, setProducts] = useState("");
  async function getProducts() {
    try {
      const response = await axios.get(
        " https://codepath-store-api.herokuapp.com/store"
      );
      console.log(response);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
      <productsGrid products={products} />
    </div>
  );
}
