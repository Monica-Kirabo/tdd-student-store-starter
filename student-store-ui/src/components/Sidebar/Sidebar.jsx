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
          <div>
            <h1> Shopping Cart</h1>
            <span class="material-symbols-outlined"></span>
            <p>No items added to cart yet. Start shopping</p>
            <div>
              <h1> Payment Info</h1>
            </div>

            <div>
              <p>Name</p>
              <input type="text" placeholder="student Name..." />
              <p>Email</p>
              <input type="text" placeholder="student@codepath.org..." />
            </div>

            <h1>CheckOut Info</h1>
            <p>
              A confirmation email will be sent to you so that you can confirm
              this order. Once you have confirmed the order, it will be
              delivered to your dorm room.
            </p>
          </div>

          <a href=" ">
            <i className="fa fa-fw fa-home"></i>
          </a>
        </ul>
      </nav>
    </section>
  );
}
