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
import NotFound from "../NotFound/NotFound";
export default function ProductDetails({products}) {
  const { productId } = useParams();
  //const location = useLocation();
  const [product, setProduct] = useState(null);
  const isLoading = !Boolean(product);
  

  useEffect(async () => {
    console.log("checking the value of product id again", productId);

    const url = "http://localhost:3001/store/" + productId;

    try {
      const response = await axios.get(url);
      console.log("response from second API call: ", response.data.product);
      console.log(response);
      setProduct(response.data.product);

      
    } catch (error) {
      console.log(error);
    }
  }, []);

 // if(product === null){
   // return <NotFound />
 // }
  return (
    <div className="product-detail">
      {/* const element = isLoading ? (
    "Loading.."
  ) : ( */}
    
  
     
     
      <Navbar />
      {product ? 
      <ProductView product={product} productId={productId} /> : null}
    </div>
  );
}
