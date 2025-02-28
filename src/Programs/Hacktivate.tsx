import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaCode } from "react-icons/fa";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/swiper-bundle.css";

const banners = [
  { id: 1, url: "b1.png", alt: "Banner 1" },
  { id: 2, url: "b2.png", alt: "Banner 2" },
  { id: 3, url: "b3.png", alt: "Banner 3" },
];

export default function Hacktivate() {
  const [activeBanner, setActiveBanner] = useState(banners[0].url);

  return (
    <div>
      <div>
        <div className="bg-white text-white min-h-screen">
          {/* Hero Section */}
          <section
            className="relative py-32 bg-gradient-to-r from-[#FF00FF] via-[#00294B] to-[#61CE70]
 overflow-hidden"
          >
            {/* Animated Background Shapes */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="absolute top-20 left-20 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-2xl"
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
                className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-2xl"
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

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
              <motion.h1
                className="text-5xl md:text-6xl font-bold font-nouvelr mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                HACKTIVATED
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-200 font-lato max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                An online safety intervention by Virtually Safe that leverages
                technology solutions to tackle online safety challenges in
                Nigeria.
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
          <section className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-6">
              <motion.h2
                className="text-3xl md:text-4xl font-bold font-nouvelr text-center mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Our Goal
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-200 font-lato text-center max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                The goal of Online Safety HACKTIVATED is to produce innovative
                tech products, ideas, and MVPs that drive transformative
                internet safety solutions and services into development.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <FaLightbulb className="w-12 h-12 text-purple-500" />,
                    title: "Innovation",
                    description:
                      "Foster groundbreaking ideas to tackle online safety challenges.",
                  },
                  {
                    icon: <FaCode className="w-12 h-12 text-blue-500" />,
                    title: "Technology",
                    description:
                      "Leverage tech solutions to address vulnerabilities in cyberspace.",
                  },
                  {
                    icon: <FaUsers className="w-12 h-12 text-green-500" />,
                    title: "Collaboration",
                    description:
                      "Bring together stakeholders to build impactful solutions.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold font-nouvelr mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 font-lato">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full flex flex-col items-center py-10 relative">
            {/* Main Banner */}
            <div className="relative w-full max-w-7xl mx-5 md:mx-10 lg:mx-20">
              <div className="absolute inset-0 border-8 md:border-12 border-white/20 rounded-3xl pointer-events-none"></div>
              <div className="relative overflow-hidden ">
                <img
                  src={activeBanner}
                  alt="Selected Banner"
                  className="w-full h-auto max-h-[500px] object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <Swiper
              modules={[Navigation, Thumbs]}
              spaceBetween={10}
              slidesPerView={3}
              navigation
              className="w-full max-w-7xl mt-6"
            >
              {banners.map(banner => (
                <SwiperSlide
                  key={banner.id}
                  onClick={() => setActiveBanner(banner.url)}
                >
                  <img
                    src={banner.url}
                    alt={banner.alt}
                    className="w-full h-42 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>

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
