import { motion } from "framer-motion";
import gog from "../assets/images/gog.png";
import tta from "../assets/images/tta.svg";
import tns from "../assets/images/tns.png";
import pdg from "../assets/images/pdg.png";
import impc from "../assets/images/impc.svg";
import krt from "../assets/images/Karot.svg";
import qva from "../assets/images/QOVA LOGO.svg";
import erg from "../assets/images/erg.svg";
export default function Logo() {
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
      <section className="bg-[#F9F9F9] py-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-8 grid-cols-4 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Logos with Staggered Animation */}
            {[gog, tta, tns, pdg, impc, krt, qva, erg].map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt="Logo"
                className="h-10  transition duration-300"
                variants={staggerItem}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
