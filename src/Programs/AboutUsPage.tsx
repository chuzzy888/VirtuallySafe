import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
  FaBook,
} from "react-icons/fa";
import abtbg from "../assets/images/abtbg.svg";
const AboutUsPage = () => {
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
    <div>
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative max-w-[12xl] mx-auto text-center space-y-4  py-24 px-4 sm:px-6 lg:px-8"
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${abtbg})`, // Replace with your image path
            // clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)", // Curved bottom effect
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
          {/* Semi-transparent overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 font-nouvelr"
          >
            About Virtually Safe
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-xl text-gray-200 max-w-5xl mx-auto mb-8 font-lato"
          >
            At Virtually Safe, we are at the forefront of championing online
            safety for Africa’s children and youth. Our mission is to create a
            secure and inclusive digital world where young people can explore,
            learn, and connect without fear. By working closely with parents,
            educators, policymakers, industry leaders, and youth organizations,
            we drive systemic change that ensures the digital environment is
            designed with the safety and well-being of young people in mind.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Our Mission Section */}
      <div className="bg-gradient-to-br from-white to-blue-50  py-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 font-nouvelr">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Driving systemic change that prioritizes online safety, equipping
              young people, parents, and educators with tools, resources, and
              knowledge to navigate the digital landscape securely and
              confidently.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1741250820/teenscancode/Copy_of_IMG_0817_bego8d.jpg"
              alt="Our Mission"
              className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeInUp}>
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1741250814/teenscancode/tccimmagg_1_busk1q.jpg"
              alt="Our Mission"
              className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
              }}
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 font-nouvelr">
              Our Commitment
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are committed to making the online world safer for children and
              their families by providing tailored resources and practical tools
              that empower different stakeholders, including parents, young
              people, and educators. Our efforts are focused on raising
              awareness, advocating for policy changes, and equipping users with
              the knowledge needed to navigate the internet responsibly and
              confidently.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 font-nouvelr">
              Our Initiatives
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Internet Safety Stakeholders Forum (ISSF) Virtually Safe convenes
              key leaders from industry, government, and the non-profit sector
              through the Internet Safety Stakeholders Forum (ISSF)—a
              multi-stakeholder platform dedicated to discussing public policy
              issues related to internet safety. This initiative fosters
              collaboration and innovation to develop new solutions, best
              practices, and policies that enhance online safety across Africa.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1730989154/karotimages/qtw7tjshrdvmtax81phl.jpg"
              alt="Our Mission"
              className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeInUp}>
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1741250814/teenscancode/tccimmagg_1_busk1q.jpg"
              alt="Our Mission"
              className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
              }}
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 font-nouvelr">
              Research & Innovation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our work includes conducting surveys and experimental research to
              understand public attitudes towards online safety and to develop
              cutting-edge solutions in digital safety. By leveraging technology
              and data-driven insights, we contribute to shaping a safer and
              more responsible digital ecosystem.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 font-nouvelr">
              Community Engagement & Awareness Campaigns
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in the power of community-led action. Through street
              shows, digital literacy programs, school outreach, and social
              media campaigns, we raise awareness about digital safety and
              responsible internet use. Our initiatives encourage a sense of
              digital citizenship, ensuring that children and young people can
              access the internet creatively, knowledgeably, and fearlessly.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1730989154/karotimages/qtw7tjshrdvmtax81phl.jpg"
              alt="Our Mission"
              className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      {/* Our Approach Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto mb-20 py-8"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-800 text-center mb-12 font-nouvelr"
        >
          Our Approach
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaShieldAlt className="w-14 h-14 mb-4 text-blue-600" />,
              title: "Empowering Digital Citizens",
              description:
                "Providing tools to help young people seize digital opportunities while managing online risks.",
            },
            {
              icon: <FaLightbulb className="w-14 h-14 mb-4 text-purple-600" />,
              title: "Education & Awareness",
              description:
                "Enabling teachers and parents to guide children’s online experiences through resources and training.",
            },
            {
              icon: (
                <FaHandsHelping className="w-14 h-14 mb-4 text-green-600" />
              ),
              title: "Advocacy & Policy Influence",
              description:
                "Advocating for a digital ecosystem that prioritizes child safety by design and default.",
            },
            {
              icon: <FaChartLine className="w-14 h-14 mb-4 text-orange-600" />,
              title: "Research & Insights",
              description:
                "Conducting localized research to inform policies and technological advancements.",
            },
            {
              icon: <FaBook className="w-14 h-14 mb-4 text-pink-600" />, // Changed icon for variety
              title: "Innovative Learning Tools",
              description:
                "Creating engaging tools like board games, flashcards, and storybooks to make online safety education fun and interactive.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`
        bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center
        ${
          index >= 3 ? "sm:col-start-2 lg:col-start-auto" : ""
        } // Center the last two cards
      `}
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-nouvelr">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Join Us Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto text-center"
        >
          {/* Section Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-extrabold text-gray-900 mb-6 font-nouvelr"
          >
            Join Us
          </motion.h2>

          {/* Section Description */}
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            At Virtually Safe, we believe that building a safer internet
            requires collective action. Whether you are a parent, educator,
            policymaker, or an industry leader, your voice and efforts matter.
            Join us in shaping a digital world that prioritizes the safety and
            well-being of Africa’s young people.
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 mt-8 font-semibold italic"
          >
            Virtually Safe – Building a Safer Digital Future for Africa’s Youth.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;
