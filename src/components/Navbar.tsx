import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/vlg.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  type MenuType = "WhoWeServe" | "Resources" | "Games" | "Policy" | null;
  const [menuOpen, setMenuOpen] = useState<MenuType>(null);

  const toggleMenu = (menu: MenuType) => {
    setMenuOpen(menu === menuOpen ? null : menu); // Toggle the menu
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-[#00294B] border-gray-200 px-4 lg:px-6 py-5 font-josefin sticky top-0 z-50">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="object-cover h-8 md:h-10" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } fixed top-0 left-0 w-3/4 h-full bg-[#00294B] transition-all transform duration-300 ease-in-out z-50 lg:hidden`}
          id="navbar-dropdown"
        >
          <ul className="space-y-8 p-4 text-[#F9F9F9]">
            <li>
              <Link
                to="/"
                className="text-[#61CE70] text-lg font-black"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleMenu("WhoWeServe")}
                className="hover:text-gray-300 flex gap-2 items-center text-lg font-black"
              >
                Who we serve
                <TiArrowSortedDown />
              </button>
              {menuOpen === "WhoWeServe" && (
                <ul className="space-y-2 pl-4 bg-white text-[#999999] py-2 shadow-lg w-full">
                  <li>
                    <Link
                      to="/young-people"
                      className="block py-2 hover:bg-gray-100 "
                      onClick={closeMobileMenu}
                    >
                      Young People
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/parent"
                      className="block py-2 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      Parent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/educators"
                      className="block py-2 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      Educators
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <button
                onClick={() => toggleMenu("Resources")}
                className="hover:text-gray-300 flex gap-2 items-center text-lg font-black"
              >
                Resources
                <TiArrowSortedDown />
              </button>
              {menuOpen === "Resources" && (
                <ul className="space-y-2 pl-4 bg-white text-[#999999] py-2 shadow-lg w-full">
                  <li>
                    <Link
                      to="https://virtuallysafe.org/wp-content/uploads/2024/07/Chimamanda-Yusuf-Story-Book-Presentation.pdf"
                      className="block py-2 hover:bg-gray-100 flex underline"
                      onClick={closeMobileMenu}
                      target="_blank"
                    >
                      Storybook
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/young-people-resources"
                      className="block py-2 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      Young people's Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/parent-resources"
                      className="block py-2 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      Parent Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/educators-resources"
                      className="block py-2 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      Educators Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/general-resources"
                      className="block py-2 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      General Resources
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <button
                onClick={() => toggleMenu("Games")}
                className="hover:text-gray-300 flex gap-2 items-center text-lg font-black"
              >
                Games
                <TiArrowSortedDown />
              </button>
              {menuOpen === "Games" && (
                <ul className="space-y-2 pl-4 bg-white text-[#999999] py-2 shadow-lg w-full">
                  <li>
                    <Link
                      to="#"
                      className="block py-2 hover:bg-gray-100 flex underline gap-2"
                      onClick={closeMobileMenu}
                    >
                      Bambi Board Games
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block py-2 hover:bg-gray-100 flex underline gap-2"
                      onClick={closeMobileMenu}
                    >
                      Download Flashcards
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <button
                onClick={() => toggleMenu("Policy")}
                className="hover:text-gray-300 flex gap-2 items-center text-lg font-black"
              >
                Policy
                <TiArrowSortedDown />
              </button>
              {menuOpen === "Policy" && (
                <ul className="space-y-2 pl-4 bg-white text-[#999999] py-2 shadow-lg w-full ">
                  <li>
                    <Link
                      to="/safer-gambling"
                      className="block py-2 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      Safer Gambling
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block py-2 hover:bg-gray-100 gap-2 flex underline items-center"
                      onClick={closeMobileMenu}
                    >
                      Research
                      <p className="font-black">
                        <FiArrowUpRight size={20} />
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/advocacy"
                      className="block py-2 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      Advocacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block py-2 hover:bg-gray-100 "
                      onClick={closeMobileMenu}
                    >
                      Awareness / Campaign
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block py-2 hover:bg-gray-100">
                      Law Enforcement
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block py-2 hover:bg-gray-100">
                      CSAM
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block  py-2 hover:bg-gray-100 text-left flex gap-2 underline"
                    >
                      Cyber 360
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="#"
                className="text-lg font-black"
                onClick={closeMobileMenu}
              >
                Volunteer
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="bg-[#61CE70] px-4 py-2 font-lato rounded-md text-white font-bold"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden lg:flex space-x-4 ">
          {/* Desktop Menu */}
          <ul className="md:flex space-x-8 items-center hidden font-lato  ">
            <li>
              <Link to="/" className="text-[#61CE70] text-lg font-[400]">
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleMenu("WhoWeServe")}
                className="text-[#F9F9F9] flex gap-2 items-center text-lg font-[400]"
              >
                Who we serve
                <TiArrowSortedDown />
              </button>
              {menuOpen === "WhoWeServe" && (
                <ul
                  className="absolute top-full left-0 bg-white text-[#999999] py-2 shadow-2xl w-48 z-50 font-josefin  border border-gray-200 rounded-md"
                  onMouseLeave={() => setMenuOpen(null)} // Close dropdown on mouse leave
                >
                  <li>
                    <Link
                      to="/young-people"
                      className="block px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      Young People
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/parent"
                      className="block px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      Parent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/educators"
                      className="block px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      Educators
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative">
              <button
                onClick={() => toggleMenu("Resources")}
                className="text-[#F9F9F9] flex gap-2 items-center text-lg font-[400]"
              >
                Resources
                <TiArrowSortedDown />
              </button>
              {menuOpen === "Resources" && (
                <ul
                  className="absolute top-full left-0 bg-white text-[#999999] py-2 shadow-2xl w-64 z-50 border border-gray-200 rounded-md font-josefin"
                  onMouseLeave={() => setMenuOpen(null)} // Close dropdown on mouse leave
                >
                  <li>
                    <Link
                      to="https://virtuallysafe.org/wp-content/uploads/2024/07/Chimamanda-Yusuf-Story-Book-Presentation.pdf"
                      className="block px-4 py-2 hover:bg-gray-100 text-left underline flex items-center gap-1"
                      target="_blank"
                    >
                      Storybook
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/young-people-resources"
                      className="block px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      Young people's Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/parent-resources"
                      className="block px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      Parent Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/educators-resources"
                      className="block px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      Educators Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/general-resources"
                      className="block px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      General Resources
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <button
                onClick={() => toggleMenu("Games")}
                className="text-[#F9F9F9] flex gap-2 items-center text-lg font-[400]"
              >
                Games
                <TiArrowSortedDown />
              </button>
              {menuOpen === "Games" && (
                <ul
                  className="absolute top-full left-0 bg-white text-[#999999] py-2 shadow-2xl w-64 z-50 font-josefin  border border-gray-200 rounded-md"
                  onMouseLeave={() => setMenuOpen(null)} // Close dropdown on mouse leave
                >
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1WNbLJcOCFBKAELGpGW85WDeRmGJTIlpf/view?usp=drive_link"
                      className="block px-4 py-2 hover:bg-gray-100 text-center underline flex  mb-2 gap-1"
                      target="_blank"
                    >
                      Bambi Board Games
                      <FiArrowUpRight size={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1RGALHffT6O14lb_KIzXUPo0Fl490XPIX/view?usp=drive_link"
                      className="block px-4 py-2 hover:bg-gray-100 text-center underline flex  gap-1"
                      target="_blank"
                    >
                      Download Flashcards
                      <FiArrowUpRight size={20} />
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <button
                onClick={() => toggleMenu("Policy")}
                className="text-[#F9F9F9] flex gap-2 items-center text-lg font-[400]"
              >
                Policy
                <TiArrowSortedDown />
              </button>
              {menuOpen === "Policy" && (
                <ul
                  className="absolute top-full left-0 bg-white text-[#999999] py-2 shadow-2xl w-52 z-50 font-josefin  border border-gray-200 rounded-md"
                  onMouseLeave={() => setMenuOpen(null)} // Close dropdown on mouse leave
                >
                  <li>
                    <Link
                      to="/safer-gambling"
                      className="block px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      Safer Gambling
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-100 text-left flex gap-2 underline"
                    >
                      Research
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/advocacy"
                      className="block px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      Advocacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      Awareness / Campaign
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      Law Enforcement
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      CSAM
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-100 text-left flex gap-2 underline"
                    >
                      Cyber 360
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="#" className=" text-lg text-[#F9F9F9] font-[400]">
                Volunteer
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Us Button */}
        <li className="hidden lg:block">
          <button className="bg-[#61CE70] px-4 py-1.5 rounded-md text-[#F9F9F9] font-bold spacefont flex items-center gap-1.5 border border-1">
            <Link to={"/contact"}> Contact Us</Link>
          </button>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
