import { motion } from "framer-motion";
import hro from "../assets/images/hero.svg";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export default function HeroSection() {
  return (
    <section className="relative text-white bg-cover bg-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${hro})`,
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)", // Curved bottom effect
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            className="bg-blue-500 text-sm py-1 px-3 rounded-full inline-flex items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <IoShieldCheckmarkOutline className="text-white mr-2" />
            Keeping kids safe online
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-5xl font-bold font-nouvelr leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Creating safe digital environments
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg text-gray-300 max-w-md mx-auto lg:mx-0 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Through education, advocacy, and cutting-edge technology to protect
            young people online.
          </motion.p>

          {/* Button */}
          <a
            href="#rsh"
            onClick={e => {
              e.preventDefault();
              const target = document.querySelector("#rsh");
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            <motion.button
              className="bg-blue-500 mt-5 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Learn More
            </motion.button>
          </a>
        </div>

        {/* Right Side: Image */}

        {/* <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-96  lg:h-[30rem] rounded-2xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740585444/chr_yrtjgp.jpg"
              alt="Hero Image"
              className="w-full h-full object-cover object-center "
            />
          </div>
          <div className="absolute top-1 rotate-3 right-10 hidden lg:block"></div>
          <div className="absolute inset-0 border-4 border-green-400 rounded-lg transform -rotate-6 "></div>
        </motion.div> */}

        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative z-10 w-full h-96 lg:h-[30rem] rounded-2xl overflow-hidden">
            <motion.img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740585444/chr_yrtjgp.jpg"
              alt="Hero Image"
              className="w-full h-full object-cover object-center"
              initial={{ scale: 1 }} // Ensure initial scale is 1
              whileHover={{
                scale: 1.1, // Scale up on hover
                filter: "brightness(1.2) contrast(1.1)", // Brightness and contrast boost
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            />
          </div>
          <div className="absolute top-1 rotate-3 right-10 hidden lg:block"></div>
          <div className="absolute inset-0 border-4 border-green-400 rounded-lg transform -rotate-6 "></div>
        </motion.div>
      </div>
    </section>
  );
}
