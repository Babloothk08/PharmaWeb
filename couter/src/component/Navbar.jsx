import React, { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed top-0 w-full h-20 bg-white shadow flex justify-between items-center px-5 z-20">
      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-red-600">+</span>
          <span className="text-amber-600">Best</span>
          <br />
          <span className="font-bold pl-1">Pharmacy</span>
        </h1>
      </div>

      <ul className="hidden md:flex gap-10 font-semibold text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-500 hover:underline ${isActive ? "text-blue-500 underline" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `hover:text-blue-500 hover:underline ${isActive ? "text-blue-500 underline" : ""}`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            `hover:text-blue-500 hover:underline ${isActive ? "text-blue-500 underline" : ""}`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-blue-500 hover:underline ${isActive ? "text-blue-500 underline" : ""}`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `hover:text-blue-500 hover:underline ${isActive ? "text-blue-500 underline" : ""}`
          }
        >
          Profile
        </NavLink>
      </ul>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {open ? <FiX /> : <FiAlignJustify />}
        </button>

      
        {open && (
          <ul className="absolute top-20 left-0 w-full bg-yellow-500 flex flex-col gap-4 p-4 text-center font-bold z-10">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? "text-blue-500" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? "text-blue-500" : ""}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/aboutUs"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? "text-blue-500" : ""}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? "text-blue-500" : ""}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/profile"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? "text-blue-500" : ""}`
              }
            >
              Profile
            </NavLink>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
