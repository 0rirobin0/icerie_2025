import React from "react";
import { FaWhatsapp, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("icerie2025@sust.edu");
    alert("Email copied to clipboard!");
  };

  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-10 items-center">
        {/* Social Icons Section */}
        <div className="flex space-x-6 justify-center mb-4 md:mb-0">
          <a
            href="https://wa.me/+8801700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10" />
          </a>
          <a
            href="https://www.facebook.com/ICERIE2023"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF className="w-8 h-8 md:w-10 md:h-10" />
          </a>
          <a
            href="mailto:icerie2025@sust.edu"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope className="w-8 h-8 md:w-10 md:h-10" />
          </a>
        </div>

        {/* Copyright and Contact Section */}
        <div className="text-center flex items-center  md:text-right text-xs md:text-sm">
          <p className="mb-2 md:mb-0 md:text-xl text-base">
            Copyright © 2024. All rights reserved |{" "}
            <button
              onClick={copyEmailToClipboard}
              className="underline cursor-pointer"
            >
              Contact: icerie2025@sust.edu
            </button>
          </p>
        </div>

        
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-sm py-2 px-4 rounded-full shadow-md">
            Developed by Team SWE 20, SUST
          </span>
       
      </div>
    </footer>
  );
};

export default Footer;
