// Hero.tsx
// import React, { useEffect, useState } from "react";
import img1 from "../assets/images/ec.jpg";
import img2 from "../assets/images/wsc.jpg";
import img3 from "../assets/images/ct.jpg";
import img4 from "../assets/images/awc.jpg";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import pdg from "../assets/images/pdg.png";
import abtImg from "../assets/images/abt.jpg";
import og from "../assets/images/og.png";
import cs1 from "../assets/images/cs1.png";
import cs2 from "../assets/images/cs2.png";
import cs3 from "../assets/images/cs3.png";
import ord from "../assets/images/ord.png";
import ctc from "../assets/images/ctc.png";
import { FaStar } from "react-icons/fa";
import { BsOctagonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { RiPentagonLine, RiShapesFill } from "react-icons/ri";
import { FaSquare, FaCircle, FaPlay } from "react-icons/fa";
import { TbRectangleFilled } from "react-icons/tb";

// const slides = [
//   "Creating a better internet for young people",
//   "Empowering youth with safe online spaces ",
//   "Building innovative useful tools for online safety ",
// ];

const Home: React.FC = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [isIconVisible, setIsIconVisible] = useState(false);

  // Trigger icon animation after component mounts
  // useEffect(() => {
  //   setIsIconVisible(true);
  // }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide(prev => (prev + 1) % slides.length);
  //   }, 5000); // Auto-rotate slides every 5 seconds
  //   return () => clearInterval(interval);
  // }, []);

  // const handleSlideChange = (index: number) => {
  //   setCurrentSlide(index);
  // };
  return (
    <div>
      {/* <div className="relative h-[600px] md:min-h-[700px] 2xl:h-screen w-full flex items-center justify-center text-center px-8 md:px-16 py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('y.svg')`,
            filter: "brightness(13%)",
          }}
        ></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div
            className={`flex justify-center mb-8 md:mb-12 transition-all duration-1000 ease-in-out ${
              isIconVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <FaShieldAlt className="w-20 h-20 md:w-24 md:h-24 text-white animate-bounce" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.3] md:leading-snug tracking-tight mb-8 md:mb-12 font-nouvelr animate-fade-in">
            {slides[currentSlide]}
          </h1>

          <div className="flex justify-center space-x-6 md:space-x-5 mb-8 md:mb-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-green-500 scale-125"
                    : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="bg-green-500 font-nouvelr hover:bg-green-600 text-white px-8 py-4 sm:px-8 sm:py-5 text-lg sm:text-xl font-semibold rounded-full transition-all duration-300 ease-in-out shadow-2xl hover:shadow-xl flex items-center gap-4 group">
              Explore Programs
              <FaArrowRight className="text-white text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div> */}
      {/* <div className="relative flex flex-col  items-center justify-center text-center px-6  py-16 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
        <FaCircle className="absolute top-8 left-12 text-blue-500 text-7xl opacity-50 " />
        <FaSquare className="absolute top-16 right-16 text-orange-500 text-7xl  opacity-50 rotate-12 " />
        <FaPlay className="absolute bottom-12 left-24 text-purple-500 text-7xl opacity-50 rotate-45 " />
        <RiPentagonLine className="absolute bottom-0 -mb-7 left-1/2 text-red-400 text-7xl opacity-50 " />
        <BsOctagonFill className="absolute bottom-82 right-16 text-green-500 text-7xl opacity-50 rotate-6 " />
        <RiShapesFill className="absolute bottom-82 left-16 text-[#00294B] text-7xl opacity-50 rotate-6 " />
        <TbRectangleFilled className="absolute bottom-8 right-16 text-yellow-500 text-7xl opacity-50 rotate-12 " />

        <motion.h1
          className="md:text-7xl text-4xl font-extrabold text-[#00294B] max-w-2xl font-nouvelr"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The all-in-one for online safety
        </motion.h1>

        <motion.p
          className="text-gray-700 max-w-lg mt-4 text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Join thousands of users securing their online presence with Virtually
          Safe.
        </motion.p>

        <motion.button
          className="mt-6 bg-[#00294B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Start your free trial
        </motion.button>

        <div className="relative flex flex-wrap justify-center gap-8 mt-16">
          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740493779/rs3_djdmfm.jpg"
            alt="Online Security"
            className="w-72 shadow-2xl rounded-xl rotate-[-8deg]"
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -8 }}
            transition={{ duration: 1 }}
          />

          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740493815/rs2_dbo9sw.jpg"
            alt="Website Safety"
            className="w-72 shadow-2xl rounded-xl rotate-4"
            initial={{ opacity: 0, y: 50, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 1.2 }}
          />

          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740493939/rs4_vq71fu.jpg"
            alt="Parental Control"
            className="w-72 shadow-2xl rounded-xl rotate-[-4deg]"
            initial={{ opacity: 0, x: 50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -4 }}
            transition={{ duration: 1.4 }}
          />
        </div>
      </div> */}
      {/* <div className="relative flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px]">
            
            <FaCircle className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 text-6xl md:text-8xl opacity-50" />
            <FaSquare className="absolute top-1/4 left-full transform -translate-x-1/2 -translate-y-1/2 text-orange-500 text-6xl md:text-8xl opacity-50 rotate-12" />
            <FaPlay className="absolute top-3/4 left-full transform -translate-x-1/2 -translate-y-1/2 text-purple-500 text-6xl md:text-8xl opacity-50 rotate-45" />
            <RiPentagonLine className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-red-400 text-6xl md:text-8xl opacity-50" />
            <BsOctagonFill className="absolute top-1/4 right-full transform translate-x-1/2 -translate-y-1/2 text-green-500 text-6xl md:text-8xl opacity-50 rotate-6" />
            <RiShapesFill className="absolute top-3/4 right-full transform translate-x-1/2 -translate-y-1/2 text-[#00294B] text-6xl md:text-8xl opacity-50 rotate-6" />
            <TbRectangleFilled className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500 text-6xl md:text-8xl opacity-50 rotate-12" />
          </div>
        </div>

        <motion.h1
          className="md:text-7xl text-4xl font-extrabold text-[#00294B] max-w-2xl font-nouvelr"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The all-in-one for online safety
        </motion.h1>

        <motion.p
          className="text-gray-700 max-w-lg mt-4 text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Join thousands of users securing their online presence with Virtually
          Safe.
        </motion.p>

        <motion.button
          className="mt-6 bg-[#00294B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Start your free trial
        </motion.button>

        <div className="relative flex flex-wrap justify-center gap-8 mt-16">
          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740493779/rs3_djdmfm.jpg"
            alt="Online Security"
            className="w-72 shadow-2xl rounded-xl rotate-[-8deg]"
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -8 }}
            transition={{ duration: 1 }}
          />

          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740493815/rs2_dbo9sw.jpg"
            alt="Website Safety"
            className="w-72 shadow-2xl rounded-xl rotate-4"
            initial={{ opacity: 0, y: 50, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 1.2 }}
          />

          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740493939/rs4_vq71fu.jpg"
            alt="Parental Control"
            className="w-72 shadow-2xl rounded-xl rotate-[-4deg]"
            initial={{ opacity: 0, x: 50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -4 }}
            transition={{ duration: 1.4 }}
          />
        </div>
      </div> */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
        {/* Background Shapes - Circular Arrangement */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Increase the circle size to contain the content */}
          <div className="relative w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px]">
            {/* Icons positioned in a circle */}
            <FaCircle className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 text-6xl md:block hidden md:text-8xl opacity-50 z-10" />
            <FaSquare className="absolute top-1/4 left-full transform -translate-x-1/2 -translate-y-1/2 text-orange-500 text-6xl md:text-8xl opacity-50 rotate-12 z-10" />
            <FaPlay className="absolute top-3/4 left-full transform -translate-x-1/2 -translate-y-1/2 text-purple-500 text-6xl md:text-8xl opacity-50 rotate-45 z-10" />
            <RiPentagonLine className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-red-400 text-6xl md:text-8xl opacity-50 z-10" />
            <BsOctagonFill className="absolute top-1/4 right-full transform translate-x-1/2 -translate-y-1/2 text-green-500 text-6xl md:text-8xl opacity-50 rotate-6 z-10" />
            <RiShapesFill className="absolute top-3/4 right-full transform translate-x-1/2 -translate-y-1/2 text-[#00294B] text-6xl md:text-8xl opacity-50 rotate-6 z-10" />
            <TbRectangleFilled className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500 text-6xl md:text-8xl opacity-50 rotate-12 z-10" />
            {/* Add the missing icon for the right side middle */}
            <FaStar className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-pink-500 text-6xl md:text-8xl opacity-50 rotate-12 z-10" />
          </div>
        </div>

        {/* Hero Content */}
        <motion.h1
          className="md:text-7xl text-4xl font-extrabold text-[#00294B] max-w-2xl font-nouvelr z-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The all-in-one for online safety
        </motion.h1>

        <motion.p
          className="text-gray-700 max-w-lg mt-4 text-lg z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Join thousands of users securing their online presence with Virtually
          Safe.
        </motion.p>

        <motion.a
          href="#discover"
          className="mt-6 bg-[#00294B] text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 shadow-md hover:shadow-lg z-20 font-lato"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover More
        </motion.a>
        {/* <div className="relative flex items-center mt-16">
          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740493779/rs3_djdmfm.jpg"
            alt="User 1"
            className="w-10 h-10 rounded-full border-2 border-white shadow-lg absolute left-0 z-30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />

          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740493815/rs2_dbo9sw.jpg"
            alt="User 2"
            className="w-10 h-10 rounded-full border-2 border-white shadow-lg absolute left-6 z-20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          />

          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740493939/rs4_vq71fu.jpg"
            alt="User 3"
            className="w-10 h-10 rounded-full border-2 border-white shadow-lg absolute left-12 z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
          />

          <p className="ml-24 text-gray-700 text-lg">+10,000 users joined</p>
        </div> */}
        {/* Feature Images */}
        <div className="relative flex flex-wrap justify-center gap-8 mt-16 z-20 imghero">
          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740493779/rs3_djdmfm.jpg"
            alt="Online Security"
            className="w-72 shadow-2xl rounded-xl rotate-[-8deg] imghero"
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -8 }}
            transition={{ duration: 1 }}
          />

          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740493815/rs2_dbo9sw.jpg"
            alt="Website Safety"
            className="w-72 shadow-2xl rounded-xl rotate-4 imghero"
            initial={{ opacity: 0, y: 50, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 1.2 }}
          />

          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740493939/rs4_vq71fu.jpg"
            alt="Parental Control"
            className="w-72 shadow-2xl rounded-xl rotate-[-4deg] imghero"
            initial={{ opacity: 0, x: 50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -4 }}
            transition={{ duration: 1.4 }}
          />
        </div>
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
      <section
        id="discover"
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        style={{
          background:
            "linear-gradient(116.68deg, rgba(0, 41, 75, 0.1) 0%, rgba(23, 80, 84, 0.1) 11.96%, rgba(41, 110, 91, 0.1) 21.11%, rgba(68, 156, 101, 0.1) 30.52%, rgba(75, 169, 104, 0.1) 33.98%, rgba(83, 182, 107, 0.1) 42.46%, rgba(80, 176, 105, 0.1) 45.83%, rgba(72, 163, 102, 0.1) 52.76%, rgba(46, 120, 93, 0.1) 71.43%, rgba(29, 90, 86, 0.1) 83.59%, rgba(0, 41, 75, 0.1) 97.4%)",
        }}
      >
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <motion.h2
            className="text-[#00294B] text-center font-semibold text-3xl md:text-4xl mb-16 tracking-wider leading-tight font-nouvelr"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What We Do
          </motion.h2>

          {/* Grid Layout for Content */}
          <div className="space-y-12">
            {/* Item 1: Text Left, Image Right */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Text Section */}
              <div className="p-8 bg-[#FFE5D9] rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold font-nouvelr text-[#00294B] mb-4">
                  Support Young People, Parents, and Educators
                </h3>
                <p className="text-gray-700 text-lg font-lato">
                  To fully protect young people from online harm or exposure to
                  unacceptable online risk.
                </p>
              </div>

              {/* Image Section */}
              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img1}
                  alt="Support Young People"
                  className="w-full h-48 md:h-72 object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            </motion.div>

            {/* Item 2: Image Left, Text Right */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Image Section */}
              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img2}
                  alt="Advocacy Policy"
                  className="w-full h-48 md:h-72 object-cover rounded-xl shadow-lg"
                />
              </motion.div>

              {/* Text Section */}
              <div className="p-8 bg-[#D8E2DC] rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold font-nouvelr text-[#00294B] mb-4">
                  Advocacy Policy
                </h3>
                <p className="text-gray-700 text-lg font-lato">
                  We understand that an education-based approach alone will not
                  be entirely effective; we need expert knowledge grounded in
                  research.
                </p>
              </div>
            </motion.div>

            {/* Item 3: Text Left, Image Right */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Text Section */}
              <div className="p-8 bg-[#F4ACB7] rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold font-nouvelr text-[#00294B] mb-4">
                  Create Tools
                </h3>
                <p className="text-gray-700 text-lg font-lato">
                  Invest in strengthening systems, building capacities, and
                  innovative technology solutions to tackle online harms.
                </p>
              </div>

              {/* Image Section */}
              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img3}
                  alt="Create Tools"
                  className="w-full h-48 md:h-72 object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            </motion.div>

            {/* Item 4: Image Left, Text Right */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Image Section */}
              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img4}
                  alt="Awareness and Campaigns"
                  className="w-full h-48 md:h-72 object-cover rounded-xl shadow-lg"
                />
              </motion.div>

              {/* Text Section */}
              <div className="p-8 bg-[#9D8189] rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold font-nouvelr text-[#00294B] mb-4">
                  Awareness and Campaigns
                </h3>
                <p className="text-gray-700 text-lg font-lato">
                  Our goal is to keep young people safe online. We achieve this
                  through multiple campaigns and awareness programs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#00294B] to-[#001F3A] text-white font-sans">
        <div className="flex flex-col md:flex-row">
          {/* Text Section (Left Partition) */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-[#00294B]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-xl space-y-6">
              <h2 className="text-[#61CE70] font-semibold text-2xl md:text-3xl tracking-wider leading-tight font-nouvelr">
                About Us
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[#F9F9F9] font-lato">
                We believe that the issues young people face online impact
                families, schools, communities, and the nation at large. Record
                levels of bullying, depression, self-harm, and identity theft
                affect everyone, not just those directly involved. Protecting
                children is a shared responsibility. Together, we can ensure a
                safe future for all, both online and offline.
              </p>
            </div>
          </motion.div>

          {/* Image Section (Right Partition) */}
          <motion.div
            className="w-full md:w-1/2  bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100   flex items-center justify-center p-8 md:p-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={abtImg} // Replace with your image path
              alt="Children smiling"
              className="w-full h-auto rounded-xl rotate-3 hover:rotate-0 shadow-2xl transform transition-transform hover:scale-105 duration-300"
            />
          </motion.div>
        </div>
      </section>
      <section
        className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-20 font-josefin"
        style={{
          background:
            "linear-gradient(116.68deg, rgba(0, 41, 75, 0.32) 0%, rgba(23, 80, 84, 0.32) 11.96%, rgba(41, 110, 91, 0.32) 21.11%, rgba(68, 156, 101, 0.32) 30.52%, rgba(75, 169, 104, 0.32) 33.98%, rgba(83, 182, 107, 0.32) 42.46%, rgba(80, 176, 105, 0.32) 45.83%, rgba(72, 163, 102, 0.32) 52.76%, rgba(46, 120, 93, 0.32) 71.43%, rgba(29, 90, 86, 0.32) 83.59%, rgba(0, 41, 75, 0.32) 97.4%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Our Goal Header */}
          <motion.h2
            className="text-[#174F66] text-center font-semibold text-2xl md:text-3xl mb-10  tracking-wider leading-tight font-nouvelr"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Goal
          </motion.h2>

          {/* Main Section Container */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            {/* Left Side: Goal Text */}
            <motion.div
              className="lg:w-1/2 text-gray-800"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-4xl 2xl:text-5xl font-semibold leading-snug text-center md:text-start">
                Virtually Safe is working towards creating a safer internet for
                young people
              </h3>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src={og}
                alt="Safer Internet"
                className="w-full h-auto rounded-lg shadow-2xl transform transition-transform hover:scale-105 duration-300"
              />
            </motion.div>
          </div>

          {/* Vision and Mission Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Vision Box */}
            <motion.div
              className="bg-[#00294B] p-8 rounded-lg shadow-2xl text-white hover:shadow-3xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-2xl font-semibold mb-4 border-b-2 border-[#61CE70] pb-2">
                Our Vision
              </h4>
              <p className="text-lg leading-relaxed">
                A safer digital world that is free from all forms of abuse,
                exploitations and violence, one that prepares young people to
                thrive in the digital space.
              </p>
            </motion.div>

            {/* Mission Box */}
            <motion.div
              className="bg-[#851FEC] p-8 rounded-lg shadow-2xl text-white hover:shadow-3xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-2xl font-semibold mb-4 border-b-2 border-[#FFD700] pb-2">
                Our Mission
              </h4>
              <p className="text-lg leading-relaxed">
                To improve digital safety for internet users, support parents,
                educators and young people in their digital wellbeing while
                promoting the positive and enriching use of digital technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-[#00294B] py-10 flex justify-center">
        <div className="text-center">
          <h2 className="text-[#61CE70] text-3xl font-extrabold mb-8  font-nouvelr">
            Our Impact
          </h2>
          <div className="bg-[#112F4B] rounded-2xl px-16  py-10 flex md:flex-row flex-col gap-16 text-white items-center shadow-lg">
            <div className="text-center">
              <p className="text-6xl md:text-7xl font-extrabold  font-nouvelr">
                1,000
              </p>
              <p className="text-lg opacity-90 mt-2 font-aeonik">Schools</p>
            </div>
            <div className="md:w-1 md:h-20 h-1 w-20 bg-white/40"></div>
            <div className="text-center">
              <p className="text-6xl md:text-7xl font-extrabold  font-nouvelr">
                100K+
              </p>
              <p className="text-lg opacity-90 mt-2 font-aeonik">
                Students Impacted
              </p>
            </div>
            <div className="md:w-1 md:h-20 h-1 w-20 bg-white/40"></div>
            <div className="text-center">
              <p className="text-6xl md:text-7xl font-extrabold  font-nouvelr">
                5K+
              </p>
              <p className="text-lg opacity-90 mt-2 font-aeonik">
                Teachers & Parents Engaged
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 bg-white font-nouvelr">
        {/* Section 1 */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8 font-nouvelr">
          Understanding Online Safety
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740537066/Frame_1321315390_jkayjk.png"
              alt="Online Safety"
              className="mx-auto w-24 md:w-28"
            />
            <p className="text-gray-700 mt-4">
              Young people agree that using the internet comes with significant
              risks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740536967/Frame_1321315390_x42xvq.png"
              alt="Negative Online Experience"
              className="mx-auto w-24 md:w-28"
            />
            <p className="text-gray-700 mt-4">
              Many have experienced negative feelings following an online
              interaction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740536967/Frame_1321315390-1_weskx0.png"
              alt="Reporting Issues"
              className="mx-auto w-24 md:w-28"
            />
            <p className="text-gray-700 mt-4">
              Few felt able to report issues to a trusted adult or their
              parents.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740536967/Frame_1321315390-2_yvb30z.png"
              alt="Parents and Teachers as Friends"
              className="mx-auto w-24 md:w-28"
            />
            <p className="text-gray-700 mt-4">
              Some young people have parents and teachers as friends on their
              social media pages.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740536967/Frame_1321315391_t1nzwq.png"
              alt="Privacy Preferences"
              className="mx-auto w-24 md:w-28"
            />
            <p className="text-gray-700 mt-4">
              Many would prefer not to have these figures on their social media
              profiles.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mt-16 font-nouvelr mb-8">
          Understanding the Digital Risks Facing Our Youth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740537265/Group_3_t27idf.png"
              alt="Social Media Usage"
              className="mx-auto w-24 md:w-28"
            />
            <p className="text-gray-700 mt-4">
              Students actively use social media apps.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740537266/Group_3-1_g5gkpv.png"
              alt="Online Exposure"
              className="mx-auto w-24 md:w-28"
            />
            <p className="text-gray-700 mt-4">
              Many students have been exposed to online pornography.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740537266/Group_3-2_eeceeh.png"
              alt="Underage Betting"
              className="mx-auto w-24 md:w-28"
            />
            <p className="text-gray-700 mt-4">
              Some students have engaged in underage betting.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#851FEC] text-white py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden ">
        {/* Content Wrapper */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-center font-semibold text-lg md:text-2xl mb-5 uppercase tracking-wider leading-tight underline decoration-2 font-nouvelr  text-[#FFFFFF]">
            Children's Rights
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed font-nouvelr mb-4">
            The rights of every child must be respected, protected and fulfilled
            in the digital space.
            <a
              href="#"
              className="text-white underline text-sm ml-2 hover:text-gray-200"
            >
              see more...
            </a>
          </h2>
        </div>

        {/* Image Section */}

        <img
          src="https://res.cloudinary.com/karotcloud/image/upload/v1740585444/chr_yrtjgp.jpg"
          alt="Children Rights"
          className="rounded-lg w-full max-w-lg mx-auto object-cover"
        />

        {/* Decorative Shapes */}
        {/* <img
          src={blob}
          alt=""
          className="absolute top-[-30px] left-[-40px] w-24 h-24 md:w-96 md:h-96 "
        />

        <img
          src={blob}
          alt=""
          className="absolute bottom-[-30px] right-[-40px] w-28 h-28 md:w-48 md:h-48 "
        /> */}
      </section>
      <section className="bg-[#F9F9F9] py-12 px-4 md:px-8 lg:px-16">
        {/* Header Content */}
        <div className="text-center mb-8">
          <a
            href="#"
            className="text-[#00294B] text-center font-semibold text-lg md:text-2xl mb-5 uppercase tracking-wider leading-tight underline font-nouvelr decoration-2 "
          >
            Need Resources?
          </a>
          <h2 className="text-2xl  md:text-3xl font-semibold mt-2 text-[#1E1E1E] font-nouvelr">
            We Provide a range of free resources for Parents, <br /> teachers
            and young people.
          </h2>
        </div>

        {/* Resource Cards */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          {/* Image 1 */}
          <div className="max-w-xs md:max-w-sm">
            <img
              src={cs3}
              alt="Spot a Phishing Email"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Image 2 */}
          <div className="max-w-xs md:max-w-sm">
            <img
              src={cs2}
              alt="Internet Safety Tips"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Image 3 */}

          <div className="max-w-xs md:max-w-sm">
            <img
              src={cs1}
              alt="Know Your Rights"
              className="rounded-lg shadow-lg w-full  "
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full">
          {/* Top Section */}
          <div
            className=" p-4 md:p-8 lg:p-12 flex justify-center items-center"
            style={{
              background:
                "linear-gradient(116.68deg, rgba(0, 41, 75, 0.32) 0%, rgba(23, 80, 84, 0.32) 11.96%, rgba(41, 110, 91, 0.32) 21.11%, rgba(68, 156, 101, 0.32) 30.52%, rgba(75, 169, 104, 0.32) 33.98%, rgba(83, 182, 107, 0.32) 42.46%, rgba(80, 176, 105, 0.32) 45.83%, rgba(72, 163, 102, 0.32) 52.76%, rgba(46, 120, 93, 0.32) 71.43%, rgba(29, 90, 86, 0.32) 83.59%, rgba(0, 41, 75, 0.32) 97.4%)",
            }}
          >
            {/* Centered Image */}
            <div className="flex justify-center items-center w-full">
              <img
                src={ord} // Replace with actual image link
                alt="Promotional Content"
                className="w-full max-w-lg md:max-w-3xl h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-[#F9F9F9] px-4 py-8 md:py-16 font-josefin">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <p className="text-[#00294B] font-semibold mb-5 ">
              Reach Out to Us! We Are here to help you
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Talking helps! We're here for <br /> you. <br /> No problem is{" "}
              <span className="underline">too big</span> or small.
            </h2>
            <a
              href="tel:+2347072634282"
              className="text-[#8E3DFF] text-lg font-semibold underline hover:text-purple-700 transition duration-300"
            >
              Call our cyber360 helpline (toll free)
            </a>
            <p className="text-[#8E3DFF] text-2xl font-bold mt-2">
              +2347072634282
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={ctc}
              alt="Cyber360 HelpLine"
              className="w-full max-w-md h-auto "
            />
          </div>
        </div>
      </div>
      <section className="bg-white  h-20 md:h-30 w-full">
        {/* Content Placeholder */}
        <div className="flex justify-center items-center h-full"></div>
      </section>
    </div>
  );
};

export default Home;
