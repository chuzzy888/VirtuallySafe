import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRocket, FaGlobe } from "react-icons/fa"; // Importing icons from React Icons

const resources = [
  {
    image:
      "https://res.cloudinary.com/karotcloud/image/upload/v1739290106/rs1_ifkpq1.jpg",
    title: "Internet Safety Checklist",
    description: "For Parents & Students",
    link: "https://drive.google.com/file/d/1fp8xDlR0duJyM1SlyjG0MB9A2RjMpp1U/view?usp=sharing",
  },
  {
    image:
      "https://res.cloudinary.com/karotcloud/image/upload/v1739289430/rs2_f2rwxy.jpg",
    title: "Navigating The Digital World",
    description:
      "A teen's guide to setting screen time limits for a balanced lifestyle",
    link: "https://drive.google.com/file/d/1KUPlTWk5kMlXKH_BiD93hvwQrWA99iT4/view?usp=sharing",
  },
  {
    image:
      "https://res.cloudinary.com/karotcloud/image/upload/v1739289428/rs3_butprl.jpg",
    title: "Online Challenge And Young People",
    description:
      "Explore online challenges and their impact on young individuals",
    link: "https://drive.google.com/file/d/1qTj_wy9PaGqCEcL_mfVB10LNMUgLEHv3/view?usp=sharing",
  },
  {
    image:
      "https://res-console.cloudinary.com/karotcloud/thumbnails/v1/image/upload/v1739289429/cnM0X3pmYzdqYw==/drilldown",
    title: "Protecting Our Precious Ones",
    description: "A comprehensive guide to combating online predators",
    link: "https://res.cloudinary.com/karotcloud/image/upload/v1739289429/rs4_zfc7jc.jpg",
  },
];
export default function Research() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Animated Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-64 h-64 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
            initial={{ x: "-50%", y: "-50%", scale: 0.8 }}
            animate={{
              x: ["0%", "20%", "-20%", "0%"],
              y: ["0%", "-30%", "30%", "0%"],
              scale: [0.8, 1.2, 0.9, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl left-1/3 top-1/4"
            initial={{ x: "50%", y: "50%", scale: 0.8 }}
            animate={{
              x: ["0%", "-20%", "20%", "0%"],
              y: ["0%", "30%", "-30%", "0%"],
              scale: [0.8, 1.2, 0.9, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Header Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-nouvelr bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Virtual Safety Research
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-lato max-w-2xl mx-auto">
              Explore our extensive research—from engaging vox pop interviews
              capturing real-world insights to in-depth studies on critical
              issues like underage betting. Our findings drive our Virtual
              Safety Resources, equipping young people, parents, and educators
              with the knowledge and practical tips needed to navigate the
              online world safely.
            </p>
          </motion.div>
        </div>

        {/* Research Documents Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-nouvelr mb-6 text-center">
              Research Documents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Image */}
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="h-40 w-full object-cover rounded-lg mb-4"
                  />
                  {/* Title */}
                  <h3 className="text-xl font-bold font-nouvelr text-center mb-2 text-white">
                    {resource.title}
                  </h3>
                  {/* Learn More Link */}
                  <div className="flex justify-center mt-4">
                    <motion.a
                      href={resource.link}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                    >
                      Learn More
                      <MdKeyboardArrowRight size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission Statement Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* Mission Statement Content */}
          <motion.div
            className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Icons Inside the Card */}
            <FaRocket className="absolute top-4 left-4 w-16 h-16 text-white opacity-30 transform -rotate-12" />
            <FaGlobe className="absolute bottom-4 right-4 w-16 h-16 text-white opacity-30 transform rotate-12" />
            {/* <FaShieldAlt className="absolute top-4 right-4 w-16 h-16 text-white opacity-30 transform -rotate-6 -translate-x-1/2 -translate-y-1/2" /> */}

            {/* Mission Text */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold font-nouvelr mb-6">
                Our Mission
              </h2>
              <p className="text-gray-100 text-lg font-lato max-w-2xl mx-auto">
                Our mission is to improve digital safety for internet users by
                providing accessible resources, fostering collaboration, and
                promoting best practices for online safety.
              </p>
            </div>
          </motion.div>
        </div>
        {/* CTA Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-nouvelr mb-6">
              Stay Updated
            </h2>
            <p className="text-gray-300 text-lg font-lato mb-6">
              Subscribe to receive updates, news, and exclusive content directly
              to your inbox.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full md:w-96 px-6 py-3 rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <motion.button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
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
  );
}
