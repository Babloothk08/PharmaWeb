import React from 'react';
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal, FaCcMastercard } from "react-icons/fa";

function Footer() {
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full bg-[#fce4d1] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center gap-10">
        <div className="flex flex-col gap-3">
          <h1><span className="text-2xl font-bold text-red-600">+</span><span className="text-2xl text-amber-600 font-bold">Best</span><br/><span className="font-bold pl-1">Pharmacy</span></h1>
          <p className="text-sm text-gray-700">
            Totes has survived not only five centuries but also the leap into electronic typesetting, remaining unchanged.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Help & Information</h2>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Products Return</p>
          <p>Wholesale Policy</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p>Contact</p>
          <p>Home Page</p>
          <p>Terms & Conditions</p>
          <p>Accessories</p>
          <p>Pagination</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Categories</h2>
          <p>Menu Item</p>
          <p>Help Center</p>
          <p>Address Store</p>
          <p>Privacy Policy</p>
          <p>Home Page</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-300 pt-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-700">
          <p>© 2025 Totes. All Rights Reserved.</p>
          <div className="flex items-center gap-5 text-2xl text-black">
            <RiVisaLine onClick={scrollToTop}/>
            <FaCcPaypal onClick={scrollToTop}/>
            <FaCcMastercard />
            <FaCcMastercard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
