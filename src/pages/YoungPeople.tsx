import { motion } from "framer-motion";
import yp from "../assets/images/abts.jpg";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import pdg from "../assets/images/pdg.png";
import ypg from "../assets/images/DSC_0089.jpg";

export default function YoungPeople() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const rotate = {
    hidden: { rotate: -10, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: 0.8 } },
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
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-16">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center h-[400px] md:h-[450px] lg:h-[350px]"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/karotcloud/image/upload/v1740597943/Rectangle_1_ksazjz.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 -mt-[120px] container mx-auto px-6 flex justify-center">
          <motion.div
            className="bg-[#F9F9F9] rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start w-full md:max-w-4xl mt-40 md:mt-52 lg:mt-60"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image */}
            <motion.img
              src={ypg}
              alt="Event"
              className="w-full h-full md:w-1/3 rounded-lg object-cover"
              variants={rotate}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            {/* Text Content */}
            <div className="md:ml-6 mt-6 md:mt-0 text-center md:text-left">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-[#00294B] font-nouvelr"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                We serve Young People{" "}
              </motion.h2>
              <motion.p
                className="mt-4 text-gray-600 leading-relaxed"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                One out of three internet users is a young person below the age
                of 18 years, they are spending more and more of their time on
                the Internet, learning, playing online games, browsing social
                media, creating content and using mobile apps.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
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
            {[gog, lvp, krs, tns, bmb, pdg].map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt="Logo"
                className="h-10 grayscale hover:grayscale-0 transition duration-300"
                variants={staggerItem}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-16 bg-[#851FEC] flex justify-center items-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Image Container */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center"
            variants={rotate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src={yp}
                alt="Young People Learning"
                className="w-full max-w-md md:max-w-lg rounded-lg shadow-xl transform rotate-3"
              />
              <div className="absolute inset-0 border-4 border-green-400 rounded-lg transform -rotate-6"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 mt-10 md:mt-0 text-white md:text-left text-center px-1 md:px-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-4xl font-extrabold font-nouvelr md:max-w-lg">
              Educating and equipping the upcoming generation.
            </h2>
            <p className="mt-4 text-white leading-relaxed text-sm md:text-lg">
              The internet offers young people opportunities to learn, create,
              and connect, but it also exposes them to risks like cyberbullying,
              identity theft, and harmful content. Virtually Safe is committed
              to ensuring a secure and enriching online space by providing
              resources that protect young users from digital dangers while
              fostering their well-being as they navigate the digital world.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
