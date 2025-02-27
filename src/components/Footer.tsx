import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/vlg.png";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#00294B] text-white py-10 px-6 font-lato">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:space-x-12">
        {/* Logo and Subscription */}
        <div className="flex-1 mb-8 lg:mb-0">
          <img
            src={logo}
            alt="Virtually Safe Logo"
            className="mb-6 h-10 md:h-12 object-cover"
          />
          <p className="text-gray-300 mb-4">
            Subscribe for Latest News and Resources
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full py-3 px-4 text-white bg-[#00294B] border border-gray-400 rounded-md placeholder-white focus:ring-2 focus:ring-[#61CE70] focus:outline-none"
            />
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#61CE70] hover:bg-green-600 text-[#1E1E1E] px-5 py-2 rounded-md shadow-md transition duration-300">
              Send
            </button>
          </div>
        </div>

        {/* Organization */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Organization</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Our Service</li>
            <li className="hover:text-green-400 cursor-pointer">Resources</li>
            <li className="hover:text-green-400 cursor-pointer">Policy</li>
            <li className="hover:text-green-400 cursor-pointer">Contact Us</li>
            <li className="hover:text-green-400 cursor-pointer">Games</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-green-400 cursor-pointer">
              Our Programs Report
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Adventure of Chimamanda & Yusuf
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Internet Safety Tips
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Digital Right
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Phishing Email Tips
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 mb-2">
            Email:{" "}
            <a
              href="mailto:info@virtuallysafe.org"
              className="text-green-400 hover:underline"
            >
              hello@virtuallysafe.org
            </a>
          </p>
          <p className="text-gray-300 mb-2">
            Location: 147/149, Akowonjo Road, Lagos, Nigeria.
          </p>
          <p className="text-gray-300 mb-6">+2347072634282</p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <span className="hover:text-green-500 cursor-pointer">
              <FaFacebook />
            </span>
            <a
              href="https://x.com/Virtuallysafeng?t=hnY6iTg5mQP2nOQ8C7ZPMw&s=08"
              target="_blank"
            >
              <span className="hover:text-green-500 cursor-pointer">
                <FaXTwitter />
              </span>
            </a>
            <a
              href="https://www.instagram.com/virtuallysafe?igsh=MTZuYWM4NjFnYzRhYg=="
              target="_blank"
            >
              {" "}
              <span className="hover:text-green-500 cursor-pointer">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/company/106036032/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BQwwoeE30SUu9Qv1iZmHWtw%3D%3D"
              target="_blank"
            >
              {" "}
              <span className="hover:text-green-500 cursor-pointer">
                <FaLinkedin />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-400 border-t border-gray-600 pt-6">
        <p>&copy; 2024 Copyrights by Virtually Safe</p>
      </div>
    </footer>
  );
};

export default Footer;
