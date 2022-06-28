import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <div className="logo"></div>
        <li>
          <a href=" ">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>

          <a href=" ">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href=" ">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>

          <a href="/" className="Home">
            Home
          </a>
        </li>
        <li>
          <a href="/about ">About Us</a>
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
