import * as React from "react";
import "./Sidebar.css";

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
export default function Sidebar() {
  return (
    <section className="sidebar ">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
        &times;
      </a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>

      <span onclick="openNav()">open</span>
      <p></p>
    </section>
  );
}
