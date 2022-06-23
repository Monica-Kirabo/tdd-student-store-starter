import * as React from "react";
import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState("");
  async function getProducts() {
    try {

      const response= await axios.get(" https://codepath-store-api.herokuapp.com/store.");
      console.log(response);
      const data = response.data;
      console.log(data)

    } catch(error){
      console.error(error);
    }
      

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
