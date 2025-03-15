import cyb1 from "../assets/images/cyb1.jpg";
import cyb2 from "../assets/images/cyb2.jpg";
import cyb3 from "../assets/images/cyb3.jpg";
import oum from "../assets/images/oum.png";

import {
  FaCode,
  FaUsers,
  FaLightbulb,
  FaTrophy,
  FaChalkboardTeacher,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa"; // Importing icons from React Icons
import { motion } from "framer-motion";
import TestimonialsSection from "../components/TestimonialsSection";
import Gallery from "../components/Gallery";
import Logo from "../components/Logo";

const features = [
  {
    icon: <FaCode className="w-12 h-12 text-purple-500" />,
    title: "Hackathons",
    description:
      "Tackling real-world challenges with solutions from emerging leaders.",
  },
  {
    icon: <FaTrophy className="w-12 h-12 text-blue-500" />,
    title: "Competitions",
    description:
      "Prizes that empower schools and students to innovate further.",
  },
  {
    icon: <FaChalkboardTeacher className="w-12 h-12 text-indigo-500" />,
    title: "Workshops",
    description:
      "For educators, parents, and students to explore digital literacy and career pathways.",
  },
  {
    icon: <FaLightbulb className="w-12 h-12 text-green-500" />,
    title: "Exhibitions",
    description:
      "Showcasing the latest tech innovations and tools for learning and development.",
  },
  {
    icon: <FaHandshake className="w-12 h-12 text-purple-500" />,
    title: "Networking Opportunities",
    description: "With industry experts, thought leaders, and policymakers.",
  },
];

export default function CSC() {
  const images = [
    "https://res.cloudinary.com/karotcloud/image/upload/v1740656629/IMG_1705_w63mbl.jpg",
    "https://res.cloudinary.com/karotcloud/image/upload/v1740659358/Cyber_Space-189_t1nkba.jpg",
    "https://res.cloudinary.com/karotcloud/image/upload/v1740659358/Cyber_Space-216_rd3iol.jpg",
  ];
  return (
    <div>
      <div className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative min-h-[500px] py-6 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Animated Shapes */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Floating Gradients */}
            <motion.div
              className="absolute w-72 h-72 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-[120px] left-10 top-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/30 to-indigo-500/30 rounded-full blur-[140px] right-10 bottom-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />

            {/* Animated Circles */}
            <motion.div
              className="absolute w-64 h-64 bg-gradient-to-r from-green-500/20 to-white rounded-full blur-3xl"
              initial={{ x: "-50%", y: "-50%", scale: 0.8 }}
              animate={{
                x: ["0%", "50%", "-20%", "0%"],
                y: ["0%", "-80%", "30%", "0%"],
                scale: [0.8, 1.2, 0.9, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl left-1/3 top-1/4"
              initial={{ x: "50%", y: "50%", scale: 0.8 }}
              animate={{
                x: ["0%", "50%", "20%", "0%"],
                y: ["0%", "-80%", "30%", "0%"],
                scale: [0.8, 1.2, 0.9, 1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:gap-10 gap-3 items-center">
            {/* Text Content (Left Side) */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center space-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-nouvelr text-white drop-shadow-2xl">
                Cyber Space Conference
              </h1>
              <p className="text-gray-200 text-xl md:text-2xl font-lato">
                Empowering the next generation of digital leaders through
                innovation, collaboration, and education.
              </p>
              <div className="flex text-center flex-col md:flex-row gap-6">
                <motion.a
                  href="#"
                  className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-10 rounded-full transition-all shadow-2xl hover:shadow-3xl text-xl font-nouvelr"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-transparent border-2 border-white/50 hover:border-white text-white font-semibold py-4 px-10 rounded-full transition-all shadow-2xl hover:shadow-3xl text-xl font-nouvelr"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>

            {/* Image Content (Right Side) */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Image Frames with Hover Effects */}
              <div className="relative w-full max-w-2xl h-[600px] flex items-center justify-center">
                {/* Rectangular Image Frame */}
                <div
                  className="absolute w-[500px] h-[300px] bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl border-2 border-white/20 overflow-hidden transform -rotate-0 -translate-y-16 hover:rotate-0 -translate-y-20 transition-all duration-500"
                  style={{
                    borderTopLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }} // Adjust the radius value as needed
                >
                  {/* <img
                    src={cyb1}
                    alt="Rectangular Image"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  /> */}
                  <img
                    src={cyb1}
                    alt="Rectangular Image"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    style={{
                      borderTopLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }} // Adjust the radius value as needed
                  />
                </div>

                {/* Triangle-Shaped Image Frame */}
                <div className="absolute w-80 h-80 bg-white/10 backdrop-blur-lg clip-triangle shadow-2xl border-2 border-white/20 overflow-hidden transform hover:rotate-12 hover:translate-y-20 rotate-0 translate-y-24 transition-all duration-500">
                  <img
                    src={cyb2}
                    alt="Triangle Image"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* About the Conference Section */}

        <section className="relative py-20 overflow-hidden">
          {/* Gradient Background with Cool Shapes */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-[#00294B] to-[#61CE70]">
            {/* SVG Shapes */}
            <svg
              className="absolute top-0 left-52 w-full h-full opacity-20"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="200"
                cy="100"
                r="150"
                fill="rgba(255, 255, 255, 0.1)"
              />
            </svg>
          </div>

          {/* Decorative Background Icons */}
          <div className="absolute inset-0 flex justify-center items-center">
            <FaUsers className="text-[250px] text-white opacity-10 absolute top-16 left-10 rotate-[-15deg]" />
            <FaChalkboardTeacher className="text-[250px] text-white opacity-10 absolute bottom-20 right-20 rotate-[15deg]" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-nouvelr text-white mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About the Conference
            </motion.h2>

            <motion.p
              className="text-white text-lg md:text-xl font-lato max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Cyber Space Conference is a large scale annual online safety
              conference for young people, parents and educators. The goal of
              the conference is to empower and inspire the next generation of
              leaders by equipping them with the skills and knowledge needed to
              thrive in the digital era.
            </motion.p>
          </div>

          {/* Image at the Bottom */}
          <motion.div
            className="relative mt-16 w-full  max-w-3xl mx-auto h-[350px] md:h-[450px] overflow-hidden rounded-[30px] shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={cyb3}
              alt="About the Conference"
              className="w-full h-full object-cover md:px-0 px-8 rounded-[30px]"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </section>

        {/* Legacy of Impact Section */}

        <section className="py-20  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-nouvelr text-center mb-8 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Legacy of Impact
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Impact Cards */}
              {[
                {
                  icon: <FaUsers className="w-12 h-12 text-purple-500" />,
                  title: "A Destination Website",
                  description:
                    "Virtuallysafe.org has become a destination for teachers and parents, with traffic increasing up to 50% in the past year.",
                },
                {
                  icon: <FaHandshake className="w-12 h-12 text-blue-500" />,
                  title: "Support for Vulnerable Young People",
                  description:
                    "Our work includes research and bespoke resources to help vulnerable young people navigate the digital world.",
                },
                {
                  icon: <FaChartLine className="w-12 h-12 text-indigo-500" />,
                  title: "Understanding Data",
                  description:
                    "We gather unique data to deliver insights into the impact of digital technology and cyberspace.",
                },
                {
                  icon: (
                    <FaChalkboardTeacher className="w-12 h-12 text-green-500" />
                  ),
                  title: "Supporting Professionals",
                  description:
                    "We provide resources and training for educators to support young people effectively.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold font-nouvelr mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 font-lato">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-20 bg-white"
          style={{
            background:
              "linear-gradient(116.68deg, rgba(0, 41, 75, 0.32) 0%, rgba(23, 80, 84, 0.32) 11.96%, rgba(41, 110, 91, 0.32) 21.11%, rgba(68, 156, 101, 0.32) 30.52%, rgba(75, 169, 104, 0.32) 33.98%, rgba(83, 182, 107, 0.32) 42.46%, rgba(80, 176, 105, 0.32) 45.83%, rgba(72, 163, 102, 0.32) 52.76%, rgba(46, 120, 93, 0.32) 71.43%, rgba(29, 90, 86, 0.32) 83.59%, rgba(0, 41, 75, 0.32) 97.4%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Title */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-nouvelr text-center mb-12 text-gray-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              What Makes It Unique?
            </motion.h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.slice(0, 3).map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl shadow-lg text-center relative overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Main Icon */}
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold font-nouvelr mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-lato">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Last Two Centered Cards */}
            <div className="flex justify-center flex-wrap gap-8 mt-8">
              {features.slice(3, 5).map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl shadow-lg text-center relative overflow-hidden w-full md:w-[48%] lg:w-[30%] group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (index + 3) * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Main Icon */}
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold font-nouvelr mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-lato">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section
          className="w-full flex justify-center items-center py-10 relative overflow-hidden"
          id="about"
        >
          {/* Frame Container */}
          <div className="relative w-full max-w-7xl mx-5 md:mx-10 lg:mx-20">
            {/* Frame Border */}
            <div className="absolute inset-0 border-8 md:border-12 border-white/20 rounded-3xl pointer-events-none"></div>

            {/* Image Container */}
            <motion.div
              className="relative overflow-hidden rounded-3xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={oum}
                alt="Solution"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </div>
        </section>
        <div className="bg-gray-900">
          <motion.h2
            className="text-3xl font-semibold pt-8 font-nouvelr text-[#61CE70] text-center "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Highlights{" "}
          </motion.h2>
          <Gallery images={images} />
        </div>
        <TestimonialsSection />
        {/* Enhanced Call to Action Section with Animated Shapes */}
        <section className="py-16 bg-gradient-to-br from-[#6D28D9] to-[#1E1B4B] relative overflow-hidden">
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-20"></div>

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-nouvelr mb-8 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Looking Ahead
            </motion.h2>
            <motion.p
              className="text-gray-200 text-lg md:text-xl font-lato max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join us each year to learn, engage, and shape the future of
              technology and society.
            </motion.p>
            <div className="flex md:flex-row flex-col justify-center gap-6">
              <motion.a
                href="#"
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl text-lg font-nouvelr whitespace-nowrap transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Become a Sponsor
              </motion.a>
              <motion.a
                href="#"
                className="bg-transparent border-2 border-white  hover:text-purple-600 hover:border-white text-white  font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl text-lg font-nouvelr whitespace-nowrap transform hover:-translate-y-1 hover:bg-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </section>
      </div>
      <Logo />
    </div>
  );
}
