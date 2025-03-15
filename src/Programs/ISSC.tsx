import { motion } from "framer-motion";
import {
  FaUsers,
  FaHandsHelping,
  FaPaintBrush,
  FaBullhorn,
} from "react-icons/fa";
import Logo from "../components/Logo";

export default function ISSC() {
  return (
    <div>
      <div className="bg-gray-50 text-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-[#4B0082] to-[#00294B] overflow-hidden">
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
              className="text-5xl md:text-6xl font-bold font-nouvelr mb-6 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Internet Safety School Club
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 font-lato max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering students to become champions of online safety within
              their school community.
            </motion.p>
          </div>
        </section>

        {/* What the Club Involves Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-nouvelr text-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              What the Club Involves
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaUsers className="w-12 h-12 text-purple-500" />,
                  title: "Education & Awareness",
                  description:
                    "Members learn about online safety topics like cyberbullying, privacy, and digital citizenship.",
                  image:
                    "https://res.cloudinary.com/karotcloud/image/upload/v1740603287/IMG_1273_rjwfqu.jpg",
                },
                {
                  icon: <FaHandsHelping className="w-12 h-12 text-blue-500" />,
                  title: "Peer-to-Peer Support",
                  description:
                    "Club members offer guidance and support to fellow students on online safety issues.",
                  image:
                    "https://res.cloudinary.com/karotcloud/image/upload/v1740603313/IMG_1720_gok0zd.jpg",
                },
                {
                  icon: <FaPaintBrush className="w-12 h-12 text-green-500" />,
                  title: "Creative Projects",
                  description:
                    "Clubs engage in projects like designing posters or creating educational games.",
                  image:
                    "https://res.cloudinary.com/karotcloud/image/upload/v1740603286/IMG_1272_odqdya.jpg",
                },
                {
                  icon: <FaBullhorn className="w-12 h-12 text-orange-500" />,
                  title: "Advocacy & Action",
                  description:
                    "Clubs organize campaigns, workshops, and events to promote online safety.",
                  image:
                    "https://res.cloudinary.com/karotcloud/image/upload/v1740603309/IMG_1719_cs9zal.jpg",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold font-nouvelr mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-lato mb-4">
                    {item.description}
                  </p>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-nouvelr text-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Benefits of School Clubs
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Empowers Students",
                  description:
                    "Develops critical thinking and problem-solving skills through active engagement.",
                },
                {
                  title: "Creates a Safer Environment",
                  description:
                    "Raises awareness and promotes responsible online behavior in schools.",
                },
                {
                  title: "Fosters Community",
                  description:
                    "Provides a platform for students to connect and collaborate towards a common goal.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-100 p-6 rounded-2xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-bold font-nouvelr mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-lato">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Logo />
    </div>
  );
}
