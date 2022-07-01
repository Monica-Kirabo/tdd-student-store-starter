import * as React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero /Hero";
import ProductsCard from "../ProductsCard/ProductCard";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import AboutUs from "../Aboutus/AboutUs";
import ContactUs from "../ContactuS/ContactUs";
//import { SearchBar } from "../SearchBar/Searchbar";
import { useState } from "react";

export default function Home({ products }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnTextChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const items = products.filter((prdt) => {
    return prdt.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="home">
      <div search-bar>
        <input type="text" name="search" placeholder="search here..." onChange={handleOnTextChange}/>
        <i className="material-icons">search</i>
      </div>
      <Navbar />
      <Sidebar />
      <Hero />
      {/* <SearchBar handleOnChange={handleOnTextChange}/> */}
      <ProductsGrid products={items} />
      <AboutUs />
      <ContactUs />
      </div>
  )
}
  
      {/* <footer className="footer">
      <div className="content">
        <div className="top">
          <div className="links">
            <div className="link-column">
              <h4>Categories</h4>
              <ul>
                <li>All Categories</li>
                <li>Clothing</li>
                <li>Food</li>
                <li>Accessories</li>
                <li>Tech</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Find a Store</li>
                <li>Terms</li>
                <li>Sitemap</li>
                <li>Careers</li>
              </ul>
            </div>

            <div className="link-column">
              <h4>Support</h4>
              <ul>
                <li>Contact Us</li>
                <li>Money Refund</li>
                <li>Order Status</li>
                <li>Shipping Info</li>
                <li>Open Dispute</li>
              </ul>
            </div>

            <div className="link-column">
              <h4>Account</h4>
              <ul>
                <li>Login</li>
                <li>Register</li>
                <li>Account Setting</li>
                <li>My Orders</li>
              </ul>
            </div>

            <div className="link-column">
              <h4>Our App</h4>
              <ul>
                <li>
                  <img
                    src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg"
                    alt="app store"
                  />
                </li>
                <li>
                  <img
                    src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg"
                    alt="app store"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer className="footer">
        <div className="content">
          <div className="top">
            <div className="links">
              <div className="link-column">
                <h4>Categories</h4>
                <ul>
                  <li>All Categories</li>
                  <li>Clothing</li>
                  <li>Food</li>
                  <li>Accessories</li>
                  <li>Tech</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Company</h4>
                <ul>
                  <li>About Us</li>
                  <li>Find a Store</li>
                  <li>Terms</li>
                  <li>Sitemap</li>
                  <li>Careers</li>
                </ul>
              </div>

              <div className="link-column">
                <h4>Support</h4>
                <ul>
                  <li>Contact Us</li>
                  <li>Money Refund</li>
                  <li>Order Status</li>
                  <li>Shipping Info</li>
                  <li>Open Dispute</li>
                </ul>
              </div>

              <div className="link-column">
                <h4>Account</h4>
                <ul>
                  <li>Login</li>
                  <li>Register</li>
                  <li>Account Setting</li>
                  <li>My Orders</li>
                </ul>
              </div>

              <div className="link-column">
                <h4>Our App</h4>
                <ul>
                  <li>
                    <img
                      src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg"
                      alt="app store"
                    />
                  </li>
                  <li>
                    <img
                      src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg"
                      alt="app store"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
     */}
    
  

