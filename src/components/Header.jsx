import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-pastelBlue to-pastelPurple text-white py-4 rounded-b-2xl shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold text-pink-400">Justice O. Foster</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-pastelPink font-bold"
                    : "hover:text-pastelPink transition-colors"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "text-pastelPink font-bold"
                    : "hover:text-pastelPink transition-colors"
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-pastelPink font-bold"
                    : "hover:text-pastelPink transition-colors"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive
                    ? "text-pastelPink font-bold"
                    : "hover:text-pastelPink transition-colors"
                }
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
