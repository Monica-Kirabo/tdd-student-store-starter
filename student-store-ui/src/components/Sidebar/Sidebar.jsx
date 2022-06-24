import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <section className="sidebar ">
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <button className="hamburger" type="button" onClick={showSidebar}>
          <div></div>
        </button>
        <ul onClick={showSidebar}>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <a href="#home">
            <i class="fa fa-fw fa-home"></i>
          </a>
          <a href="#services">
            <i class="fa fa-fw fa-wrench"></i>
          </a>
          <a href="#clients">
            <i class="fa-solid fa-cart-arrow-down"></i>
          </a>
        </ul>
      </nav>
    </section>
  );
}
