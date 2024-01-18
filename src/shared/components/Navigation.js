import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <ul className="navigation-holder">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "myclass")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/componentPage"
          className={({ isActive }) => (isActive ? "active" : "myclass")}
        >
          Component Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "active" : "myclass")}
        >
          Profile
        </NavLink>
      </li>
    </ul>
  );
}
