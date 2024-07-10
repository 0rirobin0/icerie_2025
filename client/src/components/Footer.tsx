import React from 'react';
import { FaWhatsapp, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('arces@sust.edu');
    alert('Email copied to clipboard!');
  };
  
    const iconStyle = { width: '40px', height: '40px', color: 'currentColor' }
  

  return (
    <footer className="bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="flex items-center justify-center w-full space-x-4">
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp style={iconStyle} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-10 h-10 fill-current" viewBox="3 5 50 40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
              <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z" />
            </svg>
          </svg>
        </a>
        <a href="mailto:arces@sust.edu">
          <svg className="w-10 h-10 fill-current" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="3" fill="none" />
            <rect x="30" y="35" width="40" height="30" stroke="white" strokeWidth="2" fill="none" />
            <polyline points="30,35 50,50 70,35" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </a>
        <span className="flex items-center">
          Copyright © 2024. All rights reserved |
          <button onClick={copyEmailToClipboard} className="ml-1 underline">
            Contact: arces@sust.edu
          </button>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
