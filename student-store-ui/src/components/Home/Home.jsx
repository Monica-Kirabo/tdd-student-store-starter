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

export default function Home(props) {
  const handleOnTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleReset = () => {
    props.setShoppingCart([]);
    props.setSubtotal(0);
  };

  return (
    <div className="home">
      <Navbar />

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <nav class="sub-navbar">
        <div class="content">
          <div class="row">
            <div class="search-bar">
              <input type="text" name="search" placeholder="Search" />
              <i class="material-icons">search</i>
            </div>
            <div class="links">
              <span class="help">
                <i class="material-icons">help</i>
                "Help"
              </span>
              <div class="cart">
                <a href="/">
                  "My Cart"
                  <i class="material-icons">shopping_cart</i>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="hamburger-menu">
              <i class="material=icons"></i>
            </div>
            <ul class="category-menu open">
              <li class="is-active">
                <button>All Categories</button>
              </li>
              <li class>
                <button>Clothing</button>
              </li>
              <li class>
                <button>Food</button>
              </li>
              <li class>
                <button>Accessories</button>
              </li>
              <li class>
                <button>Tech</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ProductsGrid
        products={props.products}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
      />
      <AboutUs />
      <ContactUs />
      <div>
        <footer class="footer">
          <div class="content">
            <div class="top">
              <div class="links">
                <div class="link-column">
                  <h4>Categories</h4>
                  <ul>
                    <li>All Categories</li>
                    <li>Clothing</li>
                    <li>Food</li>
                    <li>Accessories</li>
                    <li>Tech</li>
                  </ul>
                </div>
                <div class="link-column">
                  <h4>Company</h4>
                  <ul>
                    <li>About Us</li>
                    <li>Find a Store</li>
                    <li>Terms</li>
                    <li>Sitemap</li>
                    <li>Careers</li>
                  </ul>
                </div>
                <div class="link-column">
                  <h4>Support</h4>
                  <ul>
                    <li>Contact Us</li>
                    <li>Money Refund</li>
                    <li>Order Status</li>
                    <li>Shipping Info</li>
                    <li>Open Dispute</li>
                  </ul>
                </div>
                <div class="link-column">
                  <h4>Account</h4>
                  <ul>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Account Setting</li>
                    <li>My Orders</li>
                  </ul>
                </div>
                <div class="link-column">
                  <h4>Socials</h4>
                  <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                    <li>YouTube</li>
                  </ul>
                </div>
                <div class="link-column">
                  <h4>Our App</h4>
                  <ul>
                    <li>
                      <img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" />
                    </li>
                    <li>
                      <img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom">
              <span class="payment-options">
                <img
                  src="https://codepath-student-store-demo.surge.sh/assets/american_express.40f242c7.svg"
                  alt="american express"
                />
                <img
                  src="https://codepath-student-store-demo.surge.sh/assets/mastercard.c75b7bc4.svg"
                  alt="mastercard"
                />
                <img
                  src="https://codepath-student-store-demo.surge.sh/assets/paypal.6a45b239.svg"
                  alt="paypal"
                />
                <img
                  src="https://codepath-student-store-demo.surge.sh/assets/visa.a818ddc4.svg"
                  alt="visa"
                />
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

//   {<footer className="footer">
//   <div className="content">
//     <div className="top">
//       <div className="links">
//         <div className="link-column">
//           <h4>Categories</h4>
//           <ul>
//             <li>All Categories</li>
//             <li>Clothing</li>
//             <li>Food</li>
//             <li>Accessories</li>
//             <li>Tech</li>
//           </ul>
//         </div>
//         <div className="link-column">
//           <h4>Company</h4>
//           <ul>
//             <li>About Us</li>
//             <li>Find a Store</li>
//             <li>Terms</li>
//             <li>Sitemap</li>
//             <li>Careers</li>
//           </ul>
//         </div>
//         <div className="link-column">
//           <h4>Support</h4>
//           <ul>
//             <li>Contact Us</li>
//             <li>Money Refund</li>
//             <li>Order Status</li>
//             <li>Shipping Info</li>
//             <li>Open Dispute</li>
//           </ul>
//         </div>
//         <div className="link-column">
//           <h4>Account</h4>
//           <ul>
//             <li>Login</li>
//             <li>Register</li>
//             <li>Account Setting</li>
//             <li>My Orders</li>
//           </ul>
//         </div>
//         <div className="link-column">
//           <h4>Our App</h4>
//           <ul>
//             <li>
//               <img
//                 src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg"
//                 alt="app store"
//               />
//             </li>
//             <li>
//               <img
//                 src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg"
//                 alt="app store"
//               />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <footer className="footer">
//     <div className="content">
//       <div className="top">
//         <div className="links">
//           <div className="link-column">
//             <h4>Categories</h4>
//             <ul>
//               <li>All Categories</li>
//               <li>Clothing</li>
//               <li>Food</li>
//               <li>Accessories</li>
//               <li>Tech</li>
//             </ul>
//           </div>
//           <div className="link-column">
//             <h4>Company</h4>
//             <ul>
//               <li>About Us</li>
//               <li>Find a Store</li>
//               <li>Terms</li>
//               <li>Sitemap</li>
//               <li>Careers</li>
//             </ul>
//           </div>
//           <div className="link-column">
//             <h4>Support</h4>
//             <ul>
//               <li>Contact Us</li>
//               <li>Money Refund</li>
//               <li>Order Status</li>
//               <li>Shipping Info</li>
//               <li>Open Dispute</li>
//             </ul>
//           </div>
//           <div className="link-column">
//             <h4>Account</h4>
//             <ul>
//               <li>Login</li>
//               <li>Register</li>
//               <li>Account Setting</li>
//               <li>My Orders</li>
//             </ul>
//           </div>
//           <div className="link-column">
//             <h4>Our App</h4>
//             <ul>
//               <li>
//                 <img
//                   src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg"
//                   alt="app store"
//                 />
//               </li>
//               <li>
//                 <img
//                   src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg"
//                   alt="app store"
//                 />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   </div>
// </footer>
