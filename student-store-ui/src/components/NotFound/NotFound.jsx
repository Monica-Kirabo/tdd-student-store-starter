import * as React from "react";
import "./NotFound.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
export default function NotFound() {
  return (
    <div className="Notfound">
      <Navbar />

      <Sidebar />
      <p>Error not found</p>
    </div>
  );
}
