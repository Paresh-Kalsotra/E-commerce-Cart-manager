import React from "react";
import { NavLink } from "react-router-dom";
import { IoCart, IoHome } from "react-icons/io5";

function Navbar() {
  return (
    <nav>
      <h1 style={{ color: "#7f2121", fontWeight: "bold", paddingLeft: "2%" }}>
        Cart Manager
      </h1>
      <div>
        <NavLink to="/">
          <IoHome />
        </NavLink>
        <NavLink to="/cart">
          <IoCart />
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
