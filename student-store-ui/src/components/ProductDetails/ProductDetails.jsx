import * as React from "react";
import "./ProductDetails.css";

import { useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";

import { useState } from "react";
export default function ProductDetails({ products }) {
  const { productId } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState();

  useEffect(async () => {
    console.log("checking the value of product id again", productId);

    const url = "https://codepath-store-api.herokuapp.com/store" + productId;

    try {
      const response = await axios.get();
      console.log("response from second API call: ", response.data);

      setProduct(response.data.product);

      console.log(products);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="Product-details">
      <div>
        <p>{/* product {product.id} name is {product.name} */}</p>
      </div>
      <Sidebar />
      <Navbar />
    </div>
  );
}
