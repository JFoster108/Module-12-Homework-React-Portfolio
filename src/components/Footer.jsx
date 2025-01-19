import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pastelPurple to-pastelPink text-white py-6 text-center rounded-t-2xl shadow-md">
      <p className="mb-2 text-lg text-blue-400 font-semibold">
        © 2025 Justice Foster. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/JFoster108"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/justice-foster-155b5a347/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          LinkedIn
        </a>
        <a
          href="https://stackoverflow.com/users/27526129/justice-foster"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          Stack Overflow
        </a>
      </div>
    </footer>
  );
}

export default Footer;
