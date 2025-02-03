import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/vlg.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiArrowUpRight } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  type MenuType = "WhoWeServe" | "Resources" | "Games" | "Policy" | null;
  const [menuOpen, setMenuOpen] = useState<MenuType>(null);

  const toggleMenu = (menu: MenuType) => {
    setMenuOpen(menu === menuOpen ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMenuOpen(null); // Close all dropdowns when a link is clicked
  };

  return (
    <nav className="bg-[#00294B] border-gray-200 px-4 lg:px-6 md:py-6 py-3 font-josefin sticky top-0 z-50">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="object-cover h-8 md:h-10" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg lg:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <span className="text-white">
            {mobileMenuOpen ? (
              <MdOutlineClose className="text-4xl text-white hidden" />
            ) : (
              <RiMenu3Fill className="text-4xl" />
            )}
          </span>
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeMobileMenu}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-3/4 bg-[#00294B] transition-transform duration-300 ease-in-out z-50 lg:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          id="navbar-dropdown"
        >
          <ul className="space-y-12 p-4 text-[#F9F9F9] mt-10 px-8">
            <li>
              <Link
                to="/"
                className="text-[#61CE70] text-lg font-black font-lato"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleMenu("WhoWeServe")}
                className="hover:text-gray-300 flex gap-2 items-center text-lg font-black font-lato w-full justify-between"
              >
                Who we serve
                <IoIosArrowDown
                  className={`text-2xl transition-transform ${
                    menuOpen === "WhoWeServe" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-y-auto transition-all duration-300 ease-in-out ${
                  menuOpen === "WhoWeServe" ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="space-y-3 pl-4 bg-white text-[#999999] py-2 shadow-lg w-full mt-2 rounded-lg">
                  <li>
                    <Link
                      to="/young-people"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Young People
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/parent"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Parent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/educators"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Educators
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleMenu("Resources")}
                className="hover:text-gray-300 flex gap-2 items-center text-lg font-black font-lato  w-full justify-between"
              >
                Resources
                <IoIosArrowDown
                  className={`text-2xl transition-transform ${
                    menuOpen === "Resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-y-auto transition-all duration-300 ease-in-out ${
                  menuOpen === "Resources" ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="space-y-3 pl-4 bg-white text-[#999999] py-2 shadow-lg w-full mt-2 rounded-lg">
                  <li>
                    <Link
                      to="https://rhbooks.com.ng/product/the-adventure-of-chimamanda-and-yusuf/"
                      className="block py-2 hover:bg-gray-100 flex underline font-lato"
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
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Young people's Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/parent-resources"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Parent Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/educators-resources"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Educators Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/general-resources"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      General Resources
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleMenu("Policy")}
                className="hover:text-gray-300 flex gap-2 items-center text-lg font-black font-lato  w-full justify-between"
              >
                Programs
                <IoIosArrowDown
                  className={`text-2xl transition-transform ${
                    menuOpen === "Policy" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-y-auto transition-all duration-300 ease-in-out ${
                  menuOpen === "Policy" ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="space-y-3 pl-4 bg-white text-[#999999] py-2 shadow-lg w-full mt-2 rounded-lg">
                  <li>
                    <Link
                      to="/issf"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      ISSF
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/safer-gambling"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Safer Gambling
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/research"
                      className="block py-2 hover:bg-gray-100 font-lato flex underline"
                      onClick={closeMobileMenu}
                    >
                      Research
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/csc"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Cyber Space Conference
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hacktivate"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Hactivated
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/awarenes-campaign"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Awareness / Campaign
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block py-2 hover:bg-gray-100 font-lato flex underline"
                      onClick={closeMobileMenu}
                    >
                      Cyber 360
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/young-fellows-program"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Young Fellows Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/competition"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Competitions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/issc"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      ISSC
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/programs-report"
                      className="block py-2 hover:bg-gray-100 font-lato"
                      onClick={closeMobileMenu}
                    >
                      Programs Report
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleMenu("Games")}
                className="hover:text-gray-300 flex gap-2 items-center text-lg font-black font-lato  w-full justify-between"
              >
                Games
                <IoIosArrowDown
                  className={`text-2xl transition-transform ${
                    menuOpen === "Games" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-y-auto transition-all duration-300 ease-in-out ${
                  menuOpen === "Games" ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="space-y-3 pl-4 bg-white text-[#999999] py-2 shadow-lg w-full mt-2 rounded-lg">
                  <li>
                    <Link
                      to="#"
                      className="block py-2 hover:bg-gray-100 font-lato flex underline"
                      onClick={closeMobileMenu}
                    >
                      Bambi Board Games
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block py-2 hover:bg-gray-100 font-lato flex underline"
                      onClick={closeMobileMenu}
                    >
                      Download Flashcards
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="#"
                className="text-lg font-black font-lato "
                onClick={closeMobileMenu}
              >
                Volunteer
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="bg-[#61CE70] px-8 py-3 font-lato rounded text-[#00294B] font-bold"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden lg:flex space-x-4">
          {/* Desktop Menu */}
          <ul className="md:flex space-x-8 items-center hidden font-lato text-lg">
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
                  className="absolute top-full left-0 bg-white text-[#999999] py-2 shadow-2xl w-48 z-50 font-lato border border-gray-200 rounded-md"
                  onMouseLeave={() => setMenuOpen(null)}
                >
                  <li>
                    <Link
                      to="/young-people"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      Young People
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/parent"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      Parents
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/educators"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
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
                  className="absolute top-full left-0 bg-white text-[#999999] py-4 shadow-2xl w-64 z-50 border border-gray-200 rounded-md font-lato"
                  onMouseLeave={() => setMenuOpen(null)}
                >
                  <li>
                    <Link
                      to="https://rhbooks.com.ng/product/the-adventure-of-chimamanda-and-yusuf/"
                      className="block px-4 py-4 hover:bg-gray-100 text-left underline flex items-center gap-1"
                      target="_blank"
                    >
                      Storybook
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/young-people-resources"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      Young people's Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/parent-resources"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      Parent Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/educators-resources"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      Educators Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/general-resources"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
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
                  className="absolute top-full left-0 bg-white text-[#999999] py-1 shadow-2xl w-64 z-50 font-lato border border-gray-200 rounded-md"
                  onMouseLeave={() => setMenuOpen(null)}
                >
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1WNbLJcOCFBKAELGpGW85WDeRmGJTIlpf/view?usp=drive_link"
                      className="block px-4 py-2 hover:bg-gray-100 text-center underline flex mb-2"
                      target="_blank"
                    >
                      Bambi Board Games
                      <FiArrowUpRight size={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1RGALHffT6O14lb_KIzXUPo0Fl490XPIX/view?usp=drive_link"
                      className="block px-4 py-4 hover:bg-gray-100 text-center underline flex"
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
                Programs
                <TiArrowSortedDown />
              </button>
              {menuOpen === "Policy" && (
                <ul
                  className="absolute top-full left-0 bg-white text-[#999999] py-4 shadow-2xl w-64 z-50 font-lato border border-gray-200 rounded-md"
                  onMouseLeave={() => setMenuOpen(null)}
                >
                  <li>
                    <Link
                      to="/issf"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      ISSF
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/safer-gambling"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      Safer Gambling
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/research"
                      className="block px-4 py-4 hover:bg-gray-100 text-left flex underline"
                    >
                      Research
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/csc"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      Cyber Space Conference
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hacktivate"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      Hactivated
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/awarenes-campaign"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      Awareness / Campaign
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-4 hover:bg-gray-100 text-left flex underline"
                    >
                      Cyber 360
                      <FiArrowUpRight size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/young-fellows-program"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      Young Fellows Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/competition"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      Competitions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/issc"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      ISSC
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/programs-report"
                      className="block px-4 py-4 hover:bg-gray-100 text-left"
                    >
                      Program Reports
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="#" className="text-lg text-[#F9F9F9] font-[400]">
                Volunteer
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Us Button */}
        <li className="hidden lg:block">
          <button className="bg-[#61CE70] font-aeonik px-4 py-1.5 rounded-md text-[#00294B] font-medium flex items-center gap-1.5 transition-colors duration-300 ease-in-out hover:bg-[#4CAF50] hover:shadow-md">
            <Link to={"/contact"}>Contact us</Link>
          </button>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
