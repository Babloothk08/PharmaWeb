import React from "react";
import Section from "../component/Section";

function Contact() {
  return (
    <>
      <div className='bg-[url("https://www.marksanspharma.com/assets/img/slider3.png")] bg-center bg-cover w-full h-40 md:h-[500px]   text-start content-center md:pl-20 mt-20'></div>
      <div className="min-h-fit mx-4 md:mx-20 ">
        <div className="text-center pt-7 mt-7 text-3xl underline underline-offset-4">
          <h1>Contact Us</h1>
        </div>

        
        <div className="h-auto md:h-[550px] py-6">
          <div className="flex flex-col md:flex-row gap-6 px-5 py-5 mt-5 justify-center items-center">
            <div className="w-full md:w-[600px]">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="w-full md:w-[600px]">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 px-5 justify-center items-center">
            <div className="w-full md:w-[600px]">
              <input
                type="tel"
                placeholder="Your Phone"
                required
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400 my-5 md:my-0"
              />
            </div>
            <div className="w-full md:w-[600px]">
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div className="px-5 mt-6 flex justify-center">
            <textarea
              placeholder="Write your message..."
              className="w-full md:w-[1220px] h-[200px] p-4 border rounded-lg outline-none focus:ring-2 focus:ring-green-400 resize-none"
            />
          </div>

          <div className="px-5 mt-6 flex justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition cursor-pointer">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Section />

      <div className="flex flex-col bg-[#333333] py-15 gap-15">
        <div className="flex flex-col justify-center text-center md:min-w-full md:px-50 gap-5 ">
          <h1 className="text-white shadow-2xl text-4xl">
            DRIVEN BY SCIENCE, INSPIRED BY PEOPLE
          </h1>
          <p className="text-white">
            Whether we're working to develop the first treatment for a disease,
            or a better one, patients are at the center of all we do. They are
            the reason we come to work every day, and their stories inspire us
            to continue innovating by pushing the science of RNAi therapeutics
            forward.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5  text-center ">
          <div className="overflow-hidden rounded-lg">
             <div className="relative bg-[url('https://www.alnylam.com/sites/default/files/2025-01/about-card-0.png')] bg-center bg-cover w-90 md:h-90 h-72 group overflow-hidden flex items-end cursor-pointer transition-transform hover:scale-110 rounded-lg">
            <div className="flex flex-col gap-5 p-5 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <h1 className="text-2xl text-white font-bold">
                DRIVEN BY SCIENCE, INSPIRED BY PEOPLE
              </h1>
              <p className="text-white">
                Whether we're working to develop the first treatment for a
                disease, or a better one, patients are at the center of all we
                do. They are the reason we come to work every day, and their
                stories inspire us to continue innovating by pushing the science
                of RNAi therapeutics forward.
              </p>
            </div>
          </div>
          </div>
          <div className="overflow-hidden rounded-lg">
             <div className="relative bg-[url('https://www.alnylam.com/sites/default/files/2025-01/pipeline-man.jpg')] bg-center bg-cover w-90 md:h-90 h-72 group overflow-hidden flex items-end cursor-pointer transition-transform hover:scale-110 rounded-lg">
            <div className="flex flex-col gap-5 p-5 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <h1 className="text-2xl text-white font-bold">
                DRIVEN BY SCIENCE, INSPIRED BY PEOPLE
              </h1>
              <p className="text-white">
                Whether we're working to develop the first treatment for a
                disease, or a better one, patients are at the center of all we
                do. They are the reason we come to work every day, and their
                stories inspire us to continue innovating by pushing the science
                of RNAi therapeutics forward.
              </p>
            </div>
          </div>
          </div>
          <div className="overflow-hidden rounded-lg">
             <div className="relative bg-[url('https://www.alnylam.com/sites/default/files/2025-01/rnai_believe.jpg')] bg-center bg-cover w-90 md:h-90 h-72 group overflow-hidden flex items-end cursor-pointer transition-transform hover:scale-110 rounded-lg">
            <div className="flex flex-col gap-5 p-5 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <h1 className="text-2xl text-white font-bold">
                DRIVEN BY SCIENCE, INSPIRED BY PEOPLE
              </h1>
              <p className="text-white">
                Whether we're working to develop the first treatment for a
                disease, or a better one, patients are at the center of all we
                do. They are the reason we come to work every day, and their
                stories inspire us to continue innovating by pushing the science
                of RNAi therapeutics forward.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
