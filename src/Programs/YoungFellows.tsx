import { motion } from "framer-motion";
import yap from "../assets/images/yap.png";
import gp1 from "../assets/images/Group 1.png";
import gp2 from "../assets/images/Group 2.png";
import gp3 from "../assets/images/Group 3.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import pdg from "../assets/images/pdg.png";
import { FaShieldAlt, FaChartLine, FaBook, FaCogs } from "react-icons/fa";
export default function YoungFellows() {
  return (
    <div>
      <div className="bg-white text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-purple-900 to-indigo-900 overflow-hidden">
          {/* Animated Background Shapes */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full z-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full opacity-10 blur-2xl"
              animate={{
                x: [0, 20, 0],
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full opacity-10 blur-2xl"
              animate={{
                x: [0, -20, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-bold  font-nouvelr mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Young African Internet Safety Fellowship
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 font-lato max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A one-year program for young people aged 13-18 to understand and
              respond to digital security challenges.
            </motion.p>
            <motion.a
              href="#about"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl text-lg font-nouvelr whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </section>

        {/* About Section */}
        <section
          className="w-full bg-[#a484b2]  flex justify-center items-center  relative overflow-hidden md:py-10"
          id="about"
        >
          {/* Frame Container */}
          <div className="relative w-full max-w-7xl  md:mx-10 lg:mx-20">
            {/* Frame Border */}
            <div className="absolute inset-0 border-8 md:border-12 border-white/20 rounded-3xl pointer-events-none"></div>

            {/* Image Container */}
            <motion.div
              className="relative overflow-hidden md:rounded-3xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={yap}
                alt="Solution"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </div>
        </section>
        {/* Cybersecurity Training Section */}
        <section className="py-5 md:py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-2xl md:text-4xl font-bold font-nouvelr text-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Cybersecurity Training
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaShieldAlt className="w-12 h-12 text-blue-500" />,
                  title: "Problem-Solving",
                  description:
                    "Develop critical thinking to tackle digital challenges.",
                },
                {
                  icon: <FaCogs className="w-12 h-12 text-purple-500" />,
                  title: "Data Encryption",
                  description: "Learn to protect sensitive information online.",
                },
                {
                  icon: <FaChartLine className="w-12 h-12 text-green-500" />,
                  title: "Governance & Compliance",
                  description:
                    "Understand cybersecurity policies and regulations.",
                },
                {
                  icon: <FaBook className="w-12 h-12 text-yellow-500" />,
                  title: "Security Awareness",
                  description: "Promote safe online practices among peers.",
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
                  <h3 className="text-xl font-bold font-nouvelr mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 font-lato">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advocacy Training Section */}
        <section
          className="py-20"
          style={{
            background:
              "linear-gradient(116.68deg, rgba(0, 41, 75, 0.32) 0%, rgba(23, 80, 84, 0.32) 11.96%, rgba(41, 110, 91, 0.32) 21.11%, rgba(68, 156, 101, 0.32) 30.52%, rgba(75, 169, 104, 0.32) 33.98%, rgba(83, 182, 107, 0.32) 42.46%, rgba(80, 176, 105, 0.32) 45.83%, rgba(72, 163, 102, 0.32) 52.76%, rgba(46, 120, 93, 0.32) 71.43%, rgba(29, 90, 86, 0.32) 83.59%, rgba(0, 41, 75, 0.32) 97.4%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-2xl md:text-4xl font-bold font-nouvelr text-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Advocacy Training
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-container">
                <img src={gp1} alt="" className="card-image" />
              </div>
              <div className="card-container">
                <img src={gp2} alt="" className="card-image" />
              </div>
              <div className="card-container">
                <img src={gp3} alt="" className="card-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl text-gray-900 font-bold font-nouvelr text-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join the Movement
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-700 font-lato text-center max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Be part of a transformative program that empowers young people to
              create a safer digital world.
            </motion.p>
            <div className="flex justify-center">
              <motion.a
                href="#apply"
                className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl text-lg font-nouvelr whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.a>
            </div>
          </div>
        </section>
        <section className="bg-[#F9F9F9] py-8">
          <div className="container mx-auto px-4">
            {/* Logos Container */}
            <div className="flex flex-wrap justify-center gap-8">
              {/* Replace the src attributes with your logo images */}
              <img
                src={gog}
                alt="Google"
                className="h-10 grayscale hover:grayscale-0 transition duration-300"
              />
              <img
                src={lvp}
                alt="LevelUp"
                className="h-10 grayscale hover:grayscale-0 transition duration-300"
              />
              <img
                src={krs}
                alt="Kairos"
                className="h-10 grayscale hover:grayscale-0 transition duration-300"
              />
              <img
                src={tns}
                alt="Teens Can Code"
                className="h-10 grayscale hover:grayscale-0 transition duration-300"
              />
              <img
                src={bmb}
                alt="Bambi"
                className="h-10 grayscale hover:grayscale-0 transition duration-300"
              />
              <img
                src={pdg}
                alt="Pedagon"
                className="h-10 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
