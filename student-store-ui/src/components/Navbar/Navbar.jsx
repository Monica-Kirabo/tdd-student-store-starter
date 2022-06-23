import * as React from "react";
import "./Navbar.css";
//import Logo from "/"
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "darkgreen",
        width: "15in",
        height: "1in",
      }}
    >
      <p>
        <Link to="/">Home </Link>

        <Link to="/products/:productId">ProductDetails</Link>
      </p>
    </nav>
  );
}
