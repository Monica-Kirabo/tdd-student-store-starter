import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ul role="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products/:productId">Product details</Link>
          </li>
        </ul>

        <main>
          {
            /* YOUR CODE HERE! */

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="navbar" element={<Navbar />} />
              <Route path="sidebar" element={<Sidebar />} />
            </Routes>
          }

          <Navbar />
          <switch></switch>
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}
