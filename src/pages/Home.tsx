import img3 from "../assets/images/ct.jpg";
import img4 from "../assets/images/awc.jpg";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import pdg from "../assets/images/pdg.png";
import impc from "../assets/images/impc.svg";
import krt from "../assets/images/Karot.svg";
import qva from "../assets/images/QOVA LOGO.svg";
import erg from "../assets/images/ERAGON 1.svg";
import abtImg from "../assets/images/abt.jpg";
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
import HeroSection from "./HeroSection";

const Home: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <HeroSection />

      <section className="bg-[#F9F9F9] py-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Logos with Staggered Animation */}
            {[gog, lvp, krs, tns, bmb, pdg, impc, krt, qva, erg].map(
              (logo, index) => (
                <motion.img
                  key={index}
                  src={logo}
                  alt="Logo"
                  className="h-10  transition duration-300"
                  variants={staggerItem}
                  whileHover={{ scale: 1.1 }}
                />
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Discover Section */}
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
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What We Do
          </motion.h2>

          {/* Grid Layout for Content */}
          <div className="space-y-12">
            {/* Item 1: Text Left, Image Right */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Text Section */}
              <motion.div
                className="p-8 bg-[#FFE5D9] rounded-xl shadow-lg order-1 md:order-1"
                variants={fadeInLeft}
              >
                <h3 className="text-2xl font-bold font-nouvelr text-[#00294B] mb-4">
                  Support Young People, Parents, and Educators
                </h3>
                <p className="text-gray-700 text-lg font-lato">
                  Equipping young people, parents, and educators with the
                  resources they need to foster a culture of digital safety and
                  well-being.
                </p>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className="flex justify-center order-2 md:order-2"
                variants={fadeInRight}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/karotcloud/image/upload/v1740920297/wwd_vqul1a.jpg"
                  alt="Support Young People"
                  className="w-full h-48 md:h-72 object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            </motion.div>

            {/* Item 2: Image Left, Text Right */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <motion.div
                className="flex justify-center order-2 md:order-1"
                variants={fadeInLeft}
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/karotcloud/image/upload/v1741006530/ds1_llcmq2_t0tfdz.jpg"
                  alt="Advocacy Policy"
                  className="w-full h-48 md:h-72 object-cover rounded-xl shadow-lg"
                />
              </motion.div>

              {/* Text Section */}
              <motion.div
                className="p-8 bg-[#D8E2DC] rounded-xl shadow-lg order-1 md:order-2"
                variants={fadeInRight}
              >
                <h3 className="text-2xl font-bold font-nouvelr text-[#00294B] mb-4">
                  Advocacy Policy
                </h3>
                <p className="text-gray-700 text-lg font-lato">
                  We understand that an education-based approach alone will not
                  be entirely effective; we need expert knowledge grounded in
                  research.
                </p>
              </motion.div>
            </motion.div>

            {/* Item 3: Text Left, Image Right */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Text Section */}
              <motion.div
                className="p-8 bg-[#F4ACB7] rounded-xl shadow-lg order-1 md:order-1"
                variants={fadeInLeft}
              >
                <h3 className="text-2xl font-bold font-nouvelr text-[#00294B] mb-4">
                  Create Tools
                </h3>
                <p className="text-gray-700 text-lg font-lato">
                  Invest in strengthening systems, building capacities, and
                  innovative technology solutions to tackle online harms.
                </p>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className="flex justify-center order-2 md:order-2"
                variants={fadeInRight}
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
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <motion.div
                className="flex justify-center order-2 md:order-1"
                variants={fadeInLeft}
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
              <motion.div
                className="p-8 bg-[#a5e29b] rounded-xl shadow-lg order-1 md:order-2"
                variants={fadeInRight}
              >
                <h3 className="text-2xl font-bold font-nouvelr text-[#00294B] mb-4">
                  Awareness and Campaigns
                </h3>
                <p className="text-gray-700 text-lg font-lato">
                  Our goal is to keep young people safe online. We achieve this
                  through multiple campaigns and awareness programs.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="bg-gradient-to-b from-[#00294B] to-[#001F3A] text-white font-sans"
        id="abts"
      >
        <div className="flex flex-col md:flex-row">
          {/* Text Section (Left Partition) */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-[#00294B]"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-xl space-y-6">
              <h2 className="text-[#61CE70] font-semibold text-2xl md:text-3xl tracking-wider leading-tight font-nouvelr">
                About Us
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[#F9F9F9] font-lato">
                At Virtually Safe, we are at the forefront of championing online
                safety for Africa’s children and youth. As a leading online
                safety and digital well-being organization, we equip children,
                parents, and educators with the tools and knowledge needed to
                navigate the digital landscape responsibly. <br /> <br />
                Through education, campaigns, advocacy, resources and
                technology-driven solutions, we tackle the rising challenges of
                digital harms, misinformation, online exploitation, and digital
                addiction. <br /> <br /> At Virtually Safe, we believe digital
                empowerment starts with digital safety. Join us as we shape a
                digital world that is safe, empowering, and designed for
                children and young people to thrive.—safely and confidently.
              </p>
            </div>
          </motion.div>

          {/* Image Section (Right Partition) */}
          <motion.div
            className="w-full md:w-1/2 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-8 md:p-12"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={abtImg}
              alt="Children smiling"
              className="w-full h-auto rounded-xl rotate-3 hover:rotate-0 shadow-2xl transform transition-transform hover:scale-105 duration-300"
            />
          </motion.div>
        </div>
      </section>
      {/* Our Goal Section */}
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
            className="text-[#174F66] text-center font-semibold text-2xl md:text-3xl mb-10 tracking-wider leading-tight font-nouvelr"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Goal
          </motion.h2>

          {/* Main Section Container */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            {/* Left Side: Goal Text */}
            <motion.div
              className="lg:w-1/2 text-gray-800"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg bg-white md:p-8 p-3 md:text-2xl  rounded-lg 2xl:text-2xl font-semibold  leading-snug text-center md:text-start">
                At <span className="text-[#61CE70]"> Virtually Safe</span>, our
                goal is to create a safe, inclusive, and empowering digital
                environment for young people across Africa.
              </h3>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              className="lg:w-1/2"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="https://res.cloudinary.com/karotcloud/image/upload/v1740922403/IMG_3347_1_2_1_irf14i.jpg"
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
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold mb-4 border-b-2 border-[#61CE70] pb-2">
                Our Vision
              </h4>
              <p className="text-lg leading-relaxed">
                A digital world that is safe, empowering, and designed for
                children and young people to thrive. .
              </p>
            </motion.div>

            {/* Mission Box */}
            <motion.div
              className="bg-[#851FEC] p-8 rounded-lg shadow-2xl text-white hover:shadow-3xl transition-shadow duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold mb-4 border-b-2 border-[#FFD700] pb-2">
                Our Mission
              </h4>
              <p className="text-lg leading-relaxed">
                To drive systemic change that prioritizes online safety,
                equipping young people, parents, and educators with the tools,
                resources, and knowledge to navigate the digital landscape
                securely and confidently—while empowering stakeholders to build
                a safer internet for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[#00294B] py-12 flex justify-center">
        <div className="text-center">
          <motion.h2
            className="text-[#61CE70] text-3xl font-extrabold mb-8 font-nouvelr"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Impact
          </motion.h2>
          <div className="bg-[#112F4B] rounded-2xl px-16 py-10 flex md:flex-row flex-col gap-16 text-white items-center shadow-lg">
            <div className="text-center">
              <p className="text-6xl md:text-7xl font-extrabold font-nouvelr">
                1,000
              </p>
              <p className="text-lg opacity-90 mt-2 font-aeonik">Schools</p>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <p className="text-6xl md:text-7xl font-extrabold font-nouvelr">
                100K+
              </p>
              <p className="text-lg opacity-90 mt-2 font-aeonik">
                Students Impacted
              </p>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <p className="text-6xl md:text-7xl font-extrabold font-nouvelr">
                5K+
              </p>
              <p className="text-lg opacity-90 mt-2 font-aeonik">
                Teachers & Parents Engaged
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Online Safety Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-nouvelr">
        <motion.h2
          className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8 font-nouvelr"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Evaluating Young People’s Online Experience In Nigeria.{" "}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              src: "https://res.cloudinary.com/karotcloud/image/upload/v1740537066/Frame_1321315390_jkayjk.png",
              text: "Young people agree that using the internet comes with significant risks.",
            },
            {
              src: "https://res.cloudinary.com/karotcloud/image/upload/v1740536967/Frame_1321315390_x42xvq.png",
              text: "Many have experienced negative feelings following an online interaction.",
            },
            {
              src: "https://res.cloudinary.com/karotcloud/image/upload/v1740536967/Frame_1321315390-1_weskx0.png",
              text: "Few felt able to report issues to a trusted adult or their parents.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center"
              variants={staggerItem}
            >
              <img
                src={item.src}
                alt="Online Safety"
                className="mx-auto w-24 md:w-28"
              />
              <p className="text-gray-700 mt-4">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className=" flex max-w-3xl my-8  gap-6 mx-auto flex-wrap md:flex-nowrap">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-center"
            variants={staggerItem}
          >
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740536967/Frame_1321315390-2_yvb30z.png"
              alt="Online Safety"
              className="mx-auto w-24 md:w-28"
            />
            <p className="text-gray-700 mt-4">
              Some young people have parents and teachers as friends on their
              social media pages.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-center"
            variants={staggerItem}
          >
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740536967/Frame_1321315391_t1nzwq.png"
              alt="Online Safety"
              className="mx-auto w-24 md:w-28"
            />
            <p className="text-gray-700 mt-4">
              Many would prefer not to have these figures on their social media
              profiles.
            </p>
          </motion.div>
        </div>
        {/* Understanding the Digital Risks Section */}
        <motion.h2
          className="text-center text-2xl md:text-3xl font-bold text-gray-900 mt-16 font-nouvelr mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Understanding the Digital Risks Facing Our Youth
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              src: "https://res.cloudinary.com/karotcloud/image/upload/v1740537265/Group_3_t27idf.png",
              text: "Students actively use social media apps.",
            },
            {
              src: "https://res.cloudinary.com/karotcloud/image/upload/v1740537266/Group_3-1_g5gkpv.png",
              text: "Many students have been exposed to online pornography.",
            },
            {
              src: "https://res.cloudinary.com/karotcloud/image/upload/v1740537266/Group_3-2_eeceeh.png",
              text: "Some students have engaged in underage betting.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center"
              variants={staggerItem}
            >
              <img
                src={item.src}
                alt="Digital Risks"
                className="mx-auto w-24 md:w-28"
              />
              <p className="text-gray-700 mt-4">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div
        className="relative flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden"
        id="rsh"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px]">
            <FaCircle className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 text-6xl md:block hidden md:text-8xl opacity-50 z-10" />
            <FaSquare className="absolute top-1/4 left-full transform -translate-x-1/2 -translate-y-1/2 text-orange-500 text-6xl md:text-8xl opacity-50 rotate-12 z-10" />
            <FaPlay className="absolute top-3/4 left-full transform -translate-x-1/2 -translate-y-1/2 text-purple-500 text-6xl md:text-8xl opacity-50 rotate-45 z-10" />
            <RiPentagonLine className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-red-400 text-6xl md:text-8xl opacity-50 z-10" />
            <BsOctagonFill className="absolute top-1/4 right-full transform translate-x-1/2 -translate-y-1/2 text-green-500 text-6xl md:text-8xl opacity-50 rotate-6 z-10" />
            <RiShapesFill className="absolute top-3/4 right-full transform translate-x-1/2 -translate-y-1/2 text-[#00294B] text-6xl md:text-8xl opacity-50 rotate-6 z-10" />
            <TbRectangleFilled className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500 text-6xl md:text-8xl opacity-50 rotate-12 z-10" />
            <FaStar className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-pink-500 text-6xl md:text-8xl opacity-50 rotate-12 z-10" />
          </div>
        </div>

        <motion.h1
          className="md:text-5xl text-4xl font-extrabold text-[#00294B] max-w-2xl font-nouvelr z-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Research & Data-Driven Insights
        </motion.h1>

        <motion.p
          className="text-gray-700 max-w-lg mt-4 text-lg z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          We conduct localized research, surveys, and evidence-driven studies.
        </motion.p>

        <motion.a
          href="#discover"
          className="mt-6 bg-[#00294B] text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 shadow-md hover:shadow-lg z-20 font-lato"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover More
        </motion.a>

        <div className="relative flex flex-wrap justify-center gap-8 mt-16 z-20 imghero">
          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740719513/rs4_vq71fu-min_patfjx.jpg"
            alt="Online Security"
            className="w-72 shadow-2xl rounded-xl rotate-[-8deg] imghero"
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -8 }}
            transition={{ duration: 1 }}
          />

          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740719517/rs2_dbo9sw-min_vwyhn9.jpg"
            alt="Website Safety"
            className="w-72 shadow-2xl rounded-xl rotate-4 imghero"
            initial={{ opacity: 0, y: 50, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 1.2 }}
          />

          <motion.img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1740719513/rs3_djdmfm-min_whjbox.jpg"
            alt="Parental Control"
            className="w-72 shadow-2xl rounded-xl rotate-[-4deg] imghero"
            initial={{ opacity: 0, x: 50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -4 }}
            transition={{ duration: 1.4 }}
          />
        </div>
      </div>
      <section className="bg-[#F9F9F9] py-12 px-4 md:px-8 lg:px-16">
        {/* Header Content */}
        <div className="text-center mb-8">
          <p className="text-[#00294B] text-center font-semibold text-lg md:text-3xl mb-5  tracking-wider leading-tight underline font-nouvelr decoration-2 ">
            Need Resources?
          </p>
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
    </div>
  );
};

export default Home;
