// import React from 'react'
// // import logo from '../assets/logo.png'
// import { FiDribbble, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'

// function Footer() {
//   return (
//         <div className='flex flex-col py-10 bg-purple-900 shadow-2xl'>
//             {/* <div className='top'>
//                 <div className='h-40 w-40'>
//                     <img src={logo}/>
//                 </div>
//             </div> */}
//             <div className='flex justify-center text-white flex-wrap gap-10 md:gap-25 text-xl'>
//                 <div className='col '>
//                     <h3 className='text-2xl text-[#4DA6FF] font-bold md:py-3 cursor-pointer'>NAVIGATION</h3>
//                     <p className='text-white font-semibold cursor-pointer '>Home</p>
//                     <p className='text-white font-semibold cursor-pointer'>Data</p>
//                     <p className='text-white font-semibold cursor-pointer'>Cloud</p>
//                     <p className='text-white font-semibold cursor-pointer'>Contact</p>
//                 </div>
//                 <div className='col '>
//                     <h3 className='text-2xl text-[#4DA6FF] font-bold md:py-3 cursor-pointer'>MY ACCOUNT</h3>
//                     <p className='text-white font-semibold cursor-pointer'>Home</p>
//                     <p className='text-white font-semibold cursor-pointer'>Data</p>
//                     <p className='text-white font-semibold cursor-pointer'>Cloud</p>
//                     <p className='text-white font-semibold cursor-pointer'>Contact</p>
//                 </div>
//                 <div className='col '>
//                     <h3 className='text-2xl text-[#4DA6FF] font-bold md:py-3 cursor-pointer'>INFORMATION</h3>
//                     <p className='text-white font-semibold cursor-pointer'>Home</p>
//                     <p className='text-white font-semibold cursor-pointer'>Data</p>
//                     <p className='text-white font-semibold cursor-pointer'>Cloud</p>
//                     <p className='text-white font-semibold cursor-pointer'>Contact</p>
//                 </div>
//                 <div className='col '>
//                     <h3 className='text-2xl text-[#4DA6FF] font-bold md:py-3 cursor-pointer'>LEGAL</h3>
//                     <p className='text-white font-semibold cursor-pointer'>Home</p> 
//                     <p className='text-white font-semibold cursor-pointer'>Data</p>
//                     <p className='text-white font-semibold cursor-pointer'>Cloud</p>
//                     <p className='text-white font-semibold cursor-pointer'>Contact</p>
//                 </div>
//                 <div className='flex flex-col gap-2 '>
//                     <h3 className='text-2xl font-bold text-[#4DA6FF] md:py-3 cursor-pointer'>JOIN OUR TEAM</h3>
//                     <div className='flex h-10 w-50 bg-white md:px-2 shadow-lg border-1 items-center p-2'>
//                         <input type='email' placeholder='Enter your email' className='w-45 focus:outline-none'/> 
//                         {/* < FiMail className = 'mail-icon'/> */}
//                     </div>
//                     <div className='flex gap-5 md:px-2 md:py-2 bg-purple-800 h-10 items-center p-2' >
//                         <FiInstagram className='social icon'/>
//                         <FiFacebook className='social-icon'/>
//                         <FiLinkedin className='social-icon'/>
//                         <FiDribbble className='social-icon'/>
//                         <FiGithub className='social-icon'/>
//                     </div>

//                 </div>
//             </div>
//         </div>
//   )
// }

// export default Footer



import React from 'react';
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal, FaCcMastercard } from "react-icons/fa";
// import logo from '../assets/logo1.png'

function Footer() {
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full bg-[#fce4d1] pt-12 pb-8">
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div className="flex flex-col ">
          <h1><span className="text-2xl font-bold text-red-600">+</span><span className="text-2xl text-amber-600 font-bold">Best</span><br/><span className="font-bold pl-1">Pharmacy</span></h1>
          <h1 className=' text-2xl text-[#4DA6FF] pb-5 font-bold'>Namrata Universal</h1>
          <p className="text-sm text-gray-700">
            Totes has survived not only five centuries but also the leap into electronic typesetting, remaining unchanged.
          </p>
        </div>

        {/* Help & Info */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Help & Information</h2>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Products Return</p>
          <p>Wholesale Policy</p>
        </div>

        {/* About Us */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p>Contact</p>
          <p>Home Page</p>
          <p>Terms & Conditions</p>
          <p>Accessories</p>
          <p>Pagination</p>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Categories</h2>
          <p>Menu Item</p>
          <p>Help Center</p>
          <p>Address Store</p>
          <p>Privacy Policy</p>
          <p>Home Page</p>
        </div>
      </div>

      {/* Bottom Footer */}
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
