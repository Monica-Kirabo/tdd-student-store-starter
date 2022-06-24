import * as React from "react";
import "./Header.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
export default function Header() {
  return (
    <div className="Header">
      <p>Header</p>

      <Navbar />
      <Sidebar />
    </div>
  );
}
