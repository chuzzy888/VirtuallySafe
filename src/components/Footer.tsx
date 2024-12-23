import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/vlg.png";
const Footer = () => {
  return (
    <footer className="bg-[#00294B] text-white py-10 px-4 font-josefin">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Subscription */}
        <div>
          <img
            src={logo}
            alt="Virtually Safe Logo"
            className="object-cover mb-8 mr-2 h-10 md:h-12"
          />

          <p className="text-gray-300 mb-4">
            Subscribe for Latest News and Resources
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full py-4 px-4 pr-16 text-black rounded-md border border-gray-300 focus:outline-none "
            />
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white px-5 py-1.5 rounded-md shadow-md transition duration-300">
              Send
            </button>
          </div>
        </div>

        {/* Organization */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Organization</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About</li>
            <li>Our Service</li>
            <li>Resources</li>
            <li>Policy</li>
            <li>Contact Us</li>
            <li>Games</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Our Programs report</li>
            <li>Adventure of Chimamanda & Yusuf</li>
            <li>Internet Safety Tips</li>
            <li>Digital Right</li>
            <li>Phishing Email Tips</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">
            Email:{" "}
            <a
              href="mailto:info@virtuallysafe.org"
              className="text-green-400 hover:underline"
            >
              info@virtuallysafe.org
            </a>
          </p>
          <p className="text-gray-300 my-2">
            Location: 147/149, Akowonjo Road, Lagos, Nigeria.
          </p>
          <p className="text-gray-300 mb-4">+2347072634282</p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <span className="hover:text-green-500 cursor-pointer">
              {" "}
              <FaFacebook />
            </span>
            <span className="hover:text-green-500 cursor-pointer">
              {" "}
              <FaTwitter />
            </span>
            <span className="hover:text-green-500 cursor-pointer">
              {" "}
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-400 border-t border-gray-600 pt-4">
        <p>&copy; 2024 Copyrights by Virtually Safe</p>
      </div>
    </footer>
  );
};

export default Footer;
