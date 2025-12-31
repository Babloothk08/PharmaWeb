import React, { useState } from "react";
// import logo from "../assets/logo-removebg-preview.png";
// import logo from "../assets/logo1.png";
// import Button from "@mui/material/Button";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className=" flex max-sm:flex-row  max-sm:items-center max-sm:justify-between max md:justify-around w-full max-sm:px-5 content-center  shadow-xl h-20 md:items-center fixed top-0 m-0 z-20 pr-120 gap-30 bg-white ">
      <div className="">
        {/* <img
          src={logo}
          alt="Logo"
          className="w-33 h-33 object-contain cursor-pointer" */}
          <h1 ><span className="text-2xl font-bold text-red-600">+</span><span className="text-2xl text-amber-600 font-bold">Best</span><br/><span className="font-bold pl-1">Pharmacy</span></h1>
        
      </div>
      <div className="max-sm:hidden">
        <ul className="flex  max-sm:mt-7 gap-10 max-sm:gap-5 max-sm:flex-col ">
          <li className="text-2xl md:hidden" onClick={toggleMenu}>
            {open ? <FiAlignJustify /> : <FiX />}
          </li>
          <NavLink to="/"
             className={({ isActive }) => `cursor-pointer transition-transform hover:scale-120 hover:underline hover:underline-offset-8 hover:font-bold hover:text-[#4DA6FF] hover:text-shadow-lg font-semibold  ${isActive ? "scale-120 underline underline-offset-8 font-bold text-[#4DA6FF] text-shadow-lg" : ""}`}
             > Home 
            
          </NavLink>
          <NavLink to="/services"
             className= {({ isActive }) => `cursor-pointer  transition-transform hover:scale-120 hover:underline hover:underline-offset-8 hover:font-bold hover:text-[#4DA6FF] hover:text-shadow-lg font-semibold  ${isActive ? "scale-120 underline underline-offset-8 font-bold text-[#4DA6FF] text-shadow-lg" : ""}`}>
              Services
            
          </NavLink>
          {/* <NavLink to='/products'>
            <li className="cursor-pointer transition-transform hover:scale-120 hover:underline hover:underline-offset-8 hover:font-bold hover:text-[#4DA6FF] hover:text-shadow-lg font-semibold ">
            Products
          </li>
          </NavLink> */}
          <NavLink to="/aboutUs"
             className= {({isActive})=>`cursor-pointer transition-transform hover:scale-120 hover:underline hover:underline-offset-8 hover:font-bold hover:text-[#4DA6FF] hover:text-shadow-lg font-semibold  ${isActive ? "scale-120 underline underline-offset-8 font-bold text-[#4DA6FF] text-shadow-lg" : ""}`}>
              About Us
            
          </NavLink>
          <NavLink to="/contact"
             className={({ isActive }) =>`cursor-pointer transition-transform hover:scale-120 hover:underline hover:underline-offset-8 hover:font-bold hover:text-[#4DA6FF] hover:text-shadow-lg font-semibold  ${isActive ? "scale-120 underline underline-offset-8 font-bold text-[#4DA6FF] text-shadow-lg" : ""}`}>
              Contact
            
          </NavLink>
          <NavLink to="profile"
             className= {({ isActive })=> `cursor-pointer transition-transform hover:scale-120 hover:underline hover:underline-offset-8 hover:font-bold hover:text-[#4DA6FF] hover:text-shadow-lg font-semibold  ${isActive ? "scale-120 underline underline-offset-8 font-bold text-[#4DA6FF] text-shadow-lg" : ""}`}>
              Profile
            
          </NavLink>
        </ul>
      </div>

      {/* Responsiveness Design*/}
      <div className="md:hidden">
        <ul className="flex  max-sm:mt-7 gap-30 max-sm:gap-5 max-sm:flex-col ">
          <li
            className="text-2xl md:hidden relative -top-3 text-black"
            onClick={toggleMenu}
          >
            {open ? <FiX /> : <FiAlignJustify />}
          </li>
          {open && (
            <div className="absolute left-0 top-20 font-bold text-white rounded-b-xl  bg-[#fcbd00c4] text-2xl flex flex-col gap-3  w-30 text-center">
              <NavLink to="/"
                 className= {({ isActive }) => `cursor-pointer  transition-transform hover:scale-120 hover:underline hover:underline-offset-8 hover:font-bold ${isActive ? " scale-120 underline text-[#4DA6FF] underline-offset-8 font-bold" : ""}`}>
                  Home 
              </NavLink>
              <NavLink to="/services"
                className= {({ isActive })=>`cursor-pointer  transition-transform hover:scale-120 hover:underline hover:underline-offset-8 hover:font-bold ${ isActive ? "scale-120 underline underline-offset-8 text-[#4DA6FF] font-bold" : ""}`}>
                  Services
              </NavLink>
              {/* <NavLink to='/products'>
                 <li className="cursor-pointer transition-transform hover:scale-120 hover:underline hover:underline-offset-8 hover:font-bold">
                Products
              </li>
              </NavLink> */}
              <NavLink to="/aboutUs"
                className= {({ isActive }) => `cursor-pointer transition-transform hover:scale-120 hover:underline hover:underline-offset-8 hover:font-bold ${ isActive ? "scale-120 underline underline-offset-8 text-[#4DA6FF] font-bold" : ""}`}>
                  About Us
              </NavLink>
              <NavLink to="/contact"
                className= {({ isActive }) => `cursor-pointer transition-transform hover:scale-120 hover:underline hover:underline-offset-8 hover:font-bold ${ isActive ? "scale-120 underline underline-offset-8 text-[#4DA6FF] font-bold" : ""}`}>
                  Contact
              </NavLink>
              <NavLink to="/profile"
                className= {({ isActive }) =>`cursor-pointer transition-transform hover:scale-120 hover:underline hover:underline-offset-8 hover:font-bold ${ isActive ? "scale-120 underline underline-offset-8 text-[#4DA6FF] font-bold" : ""}`}>
                  Profile
              </NavLink>
            </div>
          )}
        </ul>
      </div>
      {/* <Button variant="contained">View More</Button> */}
    </div>
  );
}

export default Navbar;
