import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Logo from "../components/Logo";

export default function Contact() {
  return (
    <div>
      <div className="bg-gray-100 mb-10 ">
        <div className="">
          {/* Header */}
          <section className="bg-[#00294B] text-white md:py-36 py-14 font-nouvelr">
            <div className="container mx-auto px-6 text-center space-y-8">
              <h1 className="text-4xl font-bold md:text-5xl">
                We’d Love to Hear From You
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Whether you have a question, want to give feedback, or simply
                want to connect, we’re here for you.
              </p>
              {/* Social Media Icons */}
              <div className="flex justify-center space-x-6">
                <a
                  href="https://facebook.com"
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-red-500 hover:bg-gray-200 transition"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-red-500 hover:bg-gray-200 transition"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-red-500 hover:bg-gray-200 transition"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-red-500 hover:bg-gray-200 transition"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className="bg-white my-10 rounded-lg md:-mt-20  shadow-lg p-6 md:p-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="relative bg-black text-white rounded-lg p-6 flex flex-col justify-center">
              <img
                src="https://res.cloudinary.com/karotcloud/image/upload/v1739462791/Qova%20ai/why1_brpm1s.jpg"
                alt="Contact"
                className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg"
              />
              <div className="relative font-nouvelr">
                <p className="mb-5 flex gap-3 items-center">
                  <span className="bg-[#61CE70] h-8 w-8 rounded-full flex items-center justify-center ">
                    <MdLocationOn />
                  </span>
                  147, Akowonjo Road.
                </p>
                <p className="mb-5 flex gap-3 items-center">
                  <span className="bg-[#61CE70] h-8 w-8 rounded-full flex items-center justify-center">
                    <MdEmail />
                  </span>
                  info@virtuallysafe.org
                </p>
                <p className="mb-5 flex gap-3 items-center">
                  <span className="bg-[#61CE70] h-8 w-8 rounded-full flex items-center justify-center">
                    <FaPhoneAlt />
                  </span>
                  +234 703 839 2825
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-4 font-nouvelr ">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-4">
                Feel free to drop us a line below!
              </p>
              <form>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-[#61CE70] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-[#61CE70] focus:outline-none"
                />
                <textarea
                  placeholder="Type your message here..."
                  className="w-full p-3 border border-gray-300 rounded-lg h-32 mb-4 focus:ring-2 focus:ring-[#61CE70] focus:outline-none"
                ></textarea>
                <button className="w-full bg-red-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-600">
                  SEND
                </button>
              </form>
            </div>
          </div>
          <Logo />
        </div>
      </div>
    </div>
  );
}
