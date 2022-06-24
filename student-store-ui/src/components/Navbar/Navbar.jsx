import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/" className="Home">
            Home
          </a>
        </li>
        <li>
          <a href=" ">About Us</a>
        </li>
        <li>
          <a href=" ">Buy Now</a>
        </li>
        <li>
          <a href=" ">Contact Us</a>x
        </li>
      </ul>
    </nav>
  );
}
