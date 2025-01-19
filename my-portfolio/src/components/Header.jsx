import React from "react";
import Button from "@mui/material/Button";

function Header() {
  return (
    <header className="bg-gradient-to-r from-pastelBlue to-pastelPurple text-white py-4 rounded-b-2xl shadow-soft">
        <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold">My Portfolio</h1>
            <nav>
            <ul className="flex space-x-4">
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
                <li><a href="#resume" className="hover:underline">Resume</a></li>
            </ul>
            </nav>
            <button className="bg-pastelPink text-white py-2 px-4 rounded-xl hover:bg-pastelTurquoise shadow-soft">
            Hire Me
            </button>
        </div>
    </header>
  );
}

export default Header;
