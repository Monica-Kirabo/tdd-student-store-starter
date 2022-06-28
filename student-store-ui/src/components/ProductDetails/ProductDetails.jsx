import * as React from "react";
import "./ProductDetails.css";

import { useEffect } from "react";
import ProductView from "../ProductView/ProductView";
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
import ProductsCard from "../ProductsCard/ProductCard";
import ProductsGrid from "../ProductsGrid/ProductsGrid";

import { useState } from "react";
export default function ProductDetails() {
  const { productId } = useParams();
  //const location = useLocation();
  const [products, setProduct] = useState();
  const isLoading = !Boolean(products);
  const element = isLoading ? (
    "Loading.."
  ) : (
    <ProductView products={products} productId={productId} />
  );

  useEffect(async () => {
    console.log("checking the value of product id again", productId);

    const url = "https://codepath-store-api.herokuapp.com/store" + productId;

    try {
      const response = await axios.get(url);
      console.log("response from second API call: ", response.data.products);

      setProduct(response.data.products);

      console.log(products);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="product-detail">
      <div className="box">{element}</div>
      <Sidebar />
      <Navbar />
    </div>
  );
}
