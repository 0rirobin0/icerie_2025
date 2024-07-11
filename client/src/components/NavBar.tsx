import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Tracks", href: "#tracks" },
  {
    name: "For Authors", href: "#For-Authors", dropdown: [
      { name: "Submission", href: "#submission" },
      { name: "Call For Paper", href: "#call-for-paper" },
      { name: "Tracks", href: "#tracks" },
      { name: "Important Dates", href: "#important-dates" }
    ]
  },
  { name: "Registration", href: "#registration" },
  { name: "Schedule", href: "#schedule" },
  { name: "Gallery", href: "#gallery" },
  {
    name: "Previous Conferences", href: "#Previous-Conferences", dropdown: [
      { name: "ICERIE 2023", href: "#Previous-Conferences" },
      { name: "ICERIE 2022", href: "#Previous-Conferences" },
      { name: "ICERIE 2021", href: "#Previous-Conferences" },
      { name: "ICERIE 2020", href: "#Previous-Conferences" }
    ]
  },
  {
    name: "About", href: "#about", dropdown: [
      { name: "About ICERIE", href: "#about-icerie" },
      { name: "Committee", href: "#committee" },
      { name: "Sponsors", href: "#sponsors" },
      { name: "Accommodation", href: "#contact-us" },
      { name: "Venue", href: "#contact-us" }
    ]
  },
  { name: "Contact US", href: "#Contact-US" }
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setDropdownOpen("");
  };

  const handleMouseEnter = (link: string) => {
    setDropdownOpen(link);
  };

  const handleMouseLeave = () => {
    setDropdownOpen("");
  };

  return (
  
    <header className="bg-white shadow-lg p-3 z-50 relative">
      <nav className="flex justify-between items-center w-full h-14 mx-auto ">
        <div>
          <Image
            className="ml-10 w-16 cursor-pointer"
            src="/logoNavBar.png"
            alt="Logo"
            width={64}
            height={64}
          />
        </div>
        <div className="nav-links md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 top-0 md:w-auto w-full flex items-center px-5 z-50">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-6 gap-2 text-black text-sm mt-4 ">
            {navLinks.map((link, index) => (
              <li
                key={index}
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <a
                  className={`relative inline-block group ${activeLink === link.name ? "text-black" : "text-gray-700"}`}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                  {link.dropdown && <FaAngleDown className="inline ml-1" />}
                  <span
                    className={`${activeLink === link.name
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0"
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                      }`}
                  ></span>
                </a>
                {dropdownOpen === link.name && link.dropdown && (
                  <ul className="absolute bg-white shadow-lg mt-1 rounded w-48 z-50 pt-5">
                    {link.dropdown.map((sublink, subIndex) => (
                      <li key={subIndex} className="hover:bg-gray-200 mx-2 mr-2 mb-2">
                        <a href={sublink.href} className="block px-4 py-2">{sublink.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-red-500 text-white px-5 py-2 text-sm rounded-full hover:bg-black flex justify-between items-center mx-5">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Register
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
