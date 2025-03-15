import { motion } from "framer-motion";
import Logo from "../components/Logo";

export default function Educators() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const rotate = {
    hidden: { rotate: -10, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: 0.8 } },
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
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740598162/IMG_1691_llb7ij.jpg"
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
                We Serve Educators
              </motion.h2>
              <motion.p
                className="mt-4 text-gray-600 leading-relaxed"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Teachers play a crucial role in shaping the digital habits of
                young people. As students increasingly rely on the internet for
                learning, communication, and entertainment, it is essential that
                educators are equipped with the knowledge and tools to teach
                online safety effectively.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      <Logo />

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
                src="https://res.cloudinary.com/karotcloud/image/upload/v1740598161/IMG_1692_wwzt7p.jpg"
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
              Why Online Safety Education Matters for Teachers
            </h2>
            <p className="mt-4 text-white leading-relaxed text-sm md:text-lg">
              Many young people are unaware of the risks they face online, such
              as cyberbullying, identity theft, misinformation, and exposure to
              inappropriate content. Teachers can help bridge this gap by
              integrating online safety lessons into their curriculum, ensuring
              students develop responsible digital habits from an early age.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
