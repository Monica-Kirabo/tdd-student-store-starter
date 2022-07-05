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
import Sidebar from "../Sidebar/Sidebar";
//import { SearchBar } from "../SearchBar/Searchbar";
import CheckOutForm from "../checkOutForm/CheckoutForm";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [shoppingCart, setShoppingCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" });
  const [isFetching, setIsFetching] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("http://localhost:3001/store");
        console.log("response", response);

        setProducts(response.data.products);
        console.log(products);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddItemToCart = (productId) => {
    var newItem;
    var newCart = [];

    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        shoppingCart[i].quantity++;
        setShoppingCart([...shoppingCart]);
        var tempPrice =
          products.find((item) => item.id === productId).price + subtotal;
        setSubtotal(tempPrice);

        return;
      }
    }
    newItem = {
      itemId: productId,
      quantity: 1,
    };
    setShoppingCart([newItem, ...shoppingCart]);
    var tempPrice =
      products.find((item) => item.id === productId).price + subtotal;
    setSubtotal(tempPrice);
  };

  const handleRemoveItemFromCart = (productId) => {
    var newItem;
    var newCart = [];

    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        if (shoppingCart[i].quantity != 1) {
          shoppingCart[i].quantity--;
          setShoppingCart([...shoppingCart]);
          var tempPrice =
            subtotal - products.find((item) => item.id === productId).price;
          setSubtotal(tempPrice);
          return;
        } else {
          shoppingCart.splice(i, 1);
          setShoppingCart([...shoppingCart]);
          var tempPrice =
            subtotal - products.find((item) => item.id === productId).price;
          setSubtotal(tempPrice);
          return;
        }
      }
    }
  };

  const handleOnCheckoutFormChange = (name, value) => {};
  const handleOnSubmitCheckoutForm = () => {};
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar
          handleOnToggle={handleOnToggle}
          isOpen={isOpen}
          products={products}
          shoppingCart={shoppingCart}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          checkoutForm={checkoutForm}
          setShoppingCart={setShoppingCart}
          subtotal={subtotal}
          cartSize={shoppingCart.length}
          setSubtotal={setSubtotal}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleOnToggle={handleOnToggle}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnCheckoutFormChange}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                  isOpen={isOpen}
                  checkoutForm={checkoutForm}
                  setShoppingCart={setShoppingCart}
                  subtotal={subtotal}
                  cartSize={shoppingCart.length}
                  setSubtotal={setSubtotal}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetails
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  ShoppingCart={shoppingCart}
                  isOpen={isOpen}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  handleOnToggle={handleOnToggle}
                  checkoutForm={checkoutForm}
                  subtotal={subtotal}
                  cartSize={shoppingCart.length}
                />
              }
            />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/checkout" element={<CheckOutForm />} />
          </Routes>
        </main>
      </BrowserRouter>

      {/* <SearchBar products={products} /> */}
    </div>
  );
}
