import { motion } from "framer-motion";
import {
  FaUsers,
  FaBook,
  FaGlobeAfrica,
  FaCalendarCheck,
  FaHandshake,
  FaHandsHelping,
} from "react-icons/fa";

const SchoolTourPage = () => {
  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <div className=" ">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden mb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 sm:px-6 lg:px-8"
        >
          {/* Image on the Left */}
          <motion.div
            variants={fadeInUp}
            className="w-full md:w-1/4 lg:w-1/3 relative md:-ml-16 lg:-ml-24 transform -rotate-6 overflow-hidden mb-8 md:mb-0"
          >
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1741250459/teenscancode/IMG_0558_1_o6gle6.jpg"
              alt="Digital Safety Awareness"
              className="w-full h-48 md:h-64 lg:h-96 rotate-6 object-cover rounded-lg shadow-2xl hidden md:block"
            />
            <div className="absolute inset-0 border-4 border-white rounded-lg transform rotate-6"></div>
          </motion.div>

          {/* Text Content in the Center */}
          <motion.div
            variants={fadeInUp}
            className="w-full text-center mx-0 md:mx-4"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl text-[#00294B] mb-6 drop-shadow-md font-nouvelr leading-tight max-w-2xl mx-auto"
            >
              Creating Digital Safety Awareness Across Nigeria
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              The Virtually Safe School Tour is a nationwide initiative designed
              to educate and empower young people with the knowledge and tools
              they need to navigate the digital world safely. Over an intensive
              three-week activation, our dedicated and trained volunteers will
              visit up to hundreds of schools across Nigeria, reaching thousands
              of students with essential online safety education.
            </motion.p>
          </motion.div>

          {/* Image on the Right */}
          <motion.div
            variants={fadeInUp}
            className="w-full md:w-1/4 lg:w-1/3 relative md:-mr-16 lg:-mr-24 transform rotate-6 overflow-hidden mt-8 md:mt-0"
          >
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1741250820/teenscancode/Copy_of_IMG_0817_bego8d.jpg"
              alt="Digital Safety Awareness"
              className="w-full h-48 md:h-64 lg:h-96 -rotate-6 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 border-4 border-white rounded-lg transform -rotate-6"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Impact Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8"
      >
        {/* Section Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-4xl font-nouvelr font-bold text-[#00294B] text-center mb-8"
        >
          Our Impact So Far
        </motion.h2>

        {/* Introductory Text */}
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl font-lato mx-auto mb-12"
        >
          Virtually Safe has been at the forefront of promoting digital safety
          for years, making a real difference in the lives of young people.
        </motion.p>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 2022 Impact Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-8 border-blue-500 transform hover:scale-105 transition-transform"
          >
            <div className="flex items-center mb-6">
              <FaCalendarCheck className="w-12 h-12 text-blue-500 mr-4 animate-pulse" />

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-nouvelr">
                2022
              </h3>
            </div>
            <p className="text-lg sm:text-xl text-gray-600">
              Reached <span className="font-bold text-blue-600">100,000</span>{" "}
              young people in{" "}
              <span className="font-bold text-blue-600">500 schools</span>{" "}
              across Nigeria.
            </p>
          </motion.div>

          {/* 2024 Impact Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-8 border-green-500 transform hover:scale-105 transition-transform"
          >
            <div className="flex items-center mb-6">
              <FaCalendarCheck className="w-12 h-12 text-green-600 mr-4 animate-pulse" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-nouvelr">
                2024
              </h3>
            </div>
            <p className="text-lg sm:text-xl text-gray-600">
              Reached <span className="font-bold text-green-600">70,000</span>{" "}
              young people, providing critical online safety education in{" "}
              <span className="font-bold text-green-600">350 schools</span>,
              reaching over{" "}
              <span className="font-bold text-green-600">70,000 students</span>.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div
        style={{
          background:
            "linear-gradient(116.68deg, rgba(0, 41, 75, 0.1) 0%, rgba(23, 80, 84, 0.1) 11.96%, rgba(41, 110, 91, 0.1) 21.11%, rgba(68, 156, 101, 0.1) 30.52%, rgba(75, 169, 104, 0.1) 33.98%, rgba(83, 182, 107, 0.1) 42.46%, rgba(80, 176, 105, 0.1) 45.83%, rgba(72, 163, 102, 0.1) 52.76%, rgba(46, 120, 93, 0.1) 71.43%, rgba(29, 90, 86, 0.1) 83.59%, rgba(0, 41, 75, 0.1) 97.4%)",
        }}
        className="py-12"
      >
        {/* What Happens Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="md:text-4xl text-3xl  font-bold text-gray-900 text-center mb-12 font-nouvelr"
          >
            What Happens During the School Tour?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <FaUsers className="w-16 h-16 mb-6 text-blue-600 mx-auto" />
                ),
                title: "Interactive Online Safety Lessons",
                description:
                  "Volunteers lead engaging, practical sessions on internet harms, privacy, digital well-being, and responsible online behavior.",
              },
              {
                icon: (
                  <FaBook className="w-16 h-16 mb-6 text-purple-600 mx-auto" />
                ),
                title: "Online Safety Toolkit Distribution",
                description:
                  "Schools and students receive valuable resources, including guides, posters, activity booklets, and our internet safety board games.",
              },
              {
                icon: (
                  <FaGlobeAfrica className="w-16 h-16 mb-6 text-green-600 mx-auto" />
                ),
                title: "Nationwide Activation",
                description:
                  "Our teams work across different states, ensuring a wide and meaningful impact within the three-week period.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white mx-5 p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center border-b-8 border-purple-500 transform hover:scale-105 transition-transform"
              >
                <div>{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-nouvelr">
                  {item.title}
                </h3>
                <p className="text-xl text-gray-600 font-lato">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Why This Matters Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-4xl font-nouvelr text-[#00294B] text-center mb-12"
          >
            Why This Matters
          </motion.h2>

          {/* Split-Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Image */}
            <motion.div
              variants={fadeInUp}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://res.cloudinary.com/karotcloud/image/upload/v1741250459/teenscancode/IMG_0558_1_o6gle6.jpg"
                alt="Digital Safety Awareness"
                className="w-full h-auto md:h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold font-nouvelr mb-2">
                  Empowering the Next Generation
                </h3>
                <p className="text-lg font-lato">
                  Equipping students with the tools to stay safe online.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* Introductory Text */}
              <p className="text-lg sm:text-xl text-gray-600 font-lato">
                In today’s digital world, young people are increasingly
                vulnerable to{" "}
                <span className="font-bold text-blue-600">cyberbullying</span>,{" "}
                <span className="font-bold text-purple-600">
                  online exploitation
                </span>
                ,{" "}
                <span className="font-bold text-green-600">misinformation</span>
                ,{" "}
                <span className="font-bold text-pink-600">
                  digital addiction
                </span>
                , and the ever-increasing digital harms. Many lack the skills
                and knowledge to protect themselves in online spaces. Our school
                tour bridges this gap by equipping students with practical tools
                and knowledge to stay safe online.
              </p>

              {/* Get Involved Section */}
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-nouvelr text-[#00294B]">
                  Get Involved!
                </h3>

                {/* Schools */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUsers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#00294B] font-nouvelr">
                      Schools
                    </h4>
                    <p className="text-lg text-gray-600 font-lato mb-2">
                      Want to bring the Virtually Safe School Tour to your
                      school?
                    </p>
                  </div>
                </div>

                {/* Volunteers */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaHandsHelping className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#00294B] font-nouvelr">
                      Volunteers
                    </h4>
                    <p className="text-lg text-gray-600 font-lato mb-2">
                      Passionate about online safety?{" "}
                      <span className="font-bold">
                        Join our team and make a difference!
                      </span>
                    </p>
                  </div>
                </div>

                {/* Partners & Sponsors */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaHandshake className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#00294B] font-nouvelr">
                      Partners & Sponsors
                    </h4>
                    <p className="text-lg text-gray-600 font-lato mb-2">
                      Help us reach more schools and provide even more
                      resources!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SchoolTourPage;
