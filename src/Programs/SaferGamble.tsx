import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaBrain,
  FaSmile,
  FaHandHoldingHeart,
} from "react-icons/fa";

import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import fgh from "../assets/images/sgm.png";
import fgi from "../assets/images/sgm2.png";
import Gallery from "../components/Gallery";

export default function SaferGamble() {
  const images = [
    "https://res.cloudinary.com/karotcloud/image/upload/v1740652478/ds5_lfq5bv.jpg",
    "https://res.cloudinary.com/karotcloud/image/upload/v1740652704/ds1_llcmq2.jpg",
    "https://res.cloudinary.com/karotcloud/image/upload/v1740652480/ds3_wb4lt6.jpg",
    "https://res.cloudinary.com/karotcloud/image/upload/v1740652704/ds8_j4nxv8.jpg",
    "https://res.cloudinary.com/karotcloud/image/upload/v1740652480/ds2_dvxe0q.jpg",
  ];
  return (
    <div className="bg-gray-50 overflow-hidden">
      <section className="relative w-full bg-gradient-to-r from-purple-900 via-[#00294B] to-[#61CE70] text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg font-semibold tracking-wider uppercase text-gray-200">
              Responsible Gambling Matters
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-nouvelr max-w-4xl mx-auto">
              Play Smart. Stay in Control. Enjoy the Game.
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-lato max-w-3xl mx-auto">
              Gambling should be a safe and enjoyable activity. Let’s build a
              culture that promotes ethical play and ensures compliance.
            </p>
            <div className="flex justify-center md:justify-center">
              <motion.a
                href="#"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        </div>
      </section>

      <div className="bg-gray-50 overflow-hidden">
        {/* Content Sections */}
        <section className="px-6 md:px-12 lg:px-20 py-16">
          {/* First Section - Safer Gambling */}
          <motion.div
            className="relative bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl shadow-2xl overflow-hidden p-8 md:p-12 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Background Shapes */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-32 -left-32"></div>
              <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-48 -right-48"></div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-nouvelr">
                  Safer Gambling
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  Research shows that more than 65 million Nigerians aged
                  between 18 and 40 bet on various online platforms, including
                  vulnerable players who do not gamble for fun.
                </p>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-white/20 rounded-full">
                      <FaShieldAlt className="text-white text-2xl" />
                    </div>
                    <p className="text-white">
                      Minimize gambling-related harm like addictions and
                      depression.
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-white/20 rounded-full">
                      <FaBrain className="text-white text-2xl" />
                    </div>
                    <p className="text-white">
                      Engage stakeholders: regulators, industry players, and
                      mental health experts.
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={fgh}
                  alt="Gambling Awareness"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Second Section - Young People and Gambling */}
          <motion.div
            className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl overflow-hidden p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Background Shapes */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-32 -right-32"></div>
              <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-48 -left-48"></div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={fgi}
                  alt="Young People and Gambling"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-nouvelr">
                  Why Should We Care About Gambling Among Young People?
                </h2>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-white/20 rounded-full">
                      <FaSmile className="text-white text-2xl" />
                    </div>
                    <p className="text-white">
                      Gambling patterns start as early as 9 years and can be
                      established before teenage years.
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-white/20 rounded-full">
                      <FaHandHoldingHeart className="text-white text-2xl" />
                    </div>
                    <p className="text-white">
                      Early exposure increases the likelihood of gambling
                      problems later in life.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      <div className="bg-gray-900">
        <motion.h2
          className="text-3xl md:text-3xl font-bold pt-8 font-nouvelr text-[#61CE70] text-center "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Highlights
        </motion.h2>
        <Gallery images={images} />
      </div>
    </div>
  );
}
