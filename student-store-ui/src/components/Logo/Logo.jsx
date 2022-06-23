import * as React from "react";
import "./Logo.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
export default function Logo() {
  return (
    <div className="logo">
      <link to="/">Home</link>

      <Navbar />
      <Sidebar />
    </div>
  );
}
