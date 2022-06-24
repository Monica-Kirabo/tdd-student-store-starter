import * as React from "react";
import "./Logo.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <div className="logo">
      <li>
        <Link to="/">
          <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" />
        </Link>
      </li>
      <Navbar />
      <Sidebar />
    </div>
  );
}
