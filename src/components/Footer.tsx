import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/vlg.png";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, FormEvent } from "react"; // Import FormEvent from React

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Your Mailchimp form action URL
  const MAILCHIMP_URL =
    "https://virtuallysafe.us17.list-manage.com/subscribe/post?u=3adcb1f4f3850f32df1eb83b2&amp;id=99e61d73e1&amp;f_id=00b78ae1f0";

  // Explicitly type the 'e' parameter as FormEvent
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const form = document.createElement("form");
    form.action = MAILCHIMP_URL;
    form.method = "POST";
    form.target = "_blank";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "EMAIL";
    emailInput.value = email;
    form.appendChild(emailInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setEmail("");
    setMessage("Thank you for subscribing!");
  };

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
          <form className="relative" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={e => setEmail(e.target.value)} // TypeScript infers 'e' here
              className="w-full py-3 px-4 text-white bg-[#00294B] border border-gray-400 rounded-md placeholder-white focus:ring-2 focus:ring-[#61CE70] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#61CE70] hover:bg-green-600 text-[#1E1E1E] px-5 py-2 rounded-md shadow-md transition duration-300"
            >
              Send
            </button>
          </form>
          {message && <p className="mt-2 text-sm text-gray-300">{message}</p>}
        </div>

        {/* Organization */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4 font-nouvelr">Programs</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-green-400 cursor-pointer">
              <a
                href="#abts"
                onClick={e => {
                  e.preventDefault();
                  const target = document.querySelector("#abts");
                  if (target) {
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                About Us
              </a>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link to={"/research"}> Research</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link to={"/hacktivate"}>Hactivated</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link to={"/Competition"}>Competitions</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link to={"/issc"}>School Club</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4 font-nouvelr">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-green-400 cursor-pointer">
              <Link to="/programs-report">Our Programs Report</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link to="young-people-resources">Young People’s resources</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link to={"/parent-resources"}>Parent resources</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link to={"/educators-resources"}>Educators resources</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link to={"/general-resources"}>General resources</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4 font-nouvelr">
            Contact Us
          </h3>
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
              rel="noopener noreferrer"
            >
              <span className="hover:text-green-500 cursor-pointer">
                <FaXTwitter />
              </span>
            </a>
            <a
              href="https://www.instagram.com/virtuallysafe?igsh=MTZuYWM4NjFnYzRhYg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span className="hover:text-green-500 cursor-pointer">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/company/106036032/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BQwwoeE30SUu9Qv1iZmHWtw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
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
