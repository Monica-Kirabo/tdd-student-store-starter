import * as React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <productsGrid />
      <p> </p>
    </div>
  );
}
