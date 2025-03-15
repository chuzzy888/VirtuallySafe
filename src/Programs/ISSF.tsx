import issf from "../assets/images/fgi.png";
import { motion } from "framer-motion";
import { FaMicrophone, FaGamepad, FaBook, FaHandshake } from "react-icons/fa";
import { MdLock, MdPublic, MdPrivacyTip } from "react-icons/md";
import Logo from "../components/Logo";
export default function ISSF() {
  return (
    <div className="font-nouvelr">
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

        {/* Section 1: Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-green-400 text-sm md:text-lg font-semibold tracking-wide uppercase font-aeonik">
              Internet Safety Stakeholders Forum (ISSF)
            </p>
            <h1 className="text-2xl md:text-6xl font-bold max-w-4xl leading-tight font-nouvelr bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Empowering Stakeholders to Build a Safer Internet Together
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-lato max-w-2xl mx-auto">
              Protecting children and young people online is a shared
              responsibility. The ISSF brings together policymakers, tech
              companies, parents, educators, youth organizations, and more to
              ensure a sustainable digital future.
            </p>
          </motion.div>
        </div>

        {/* Section 2: About Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 ">
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-nouvelr mb-6">
                About the ISSF
              </h2>
              <p className="text-gray-300 text-lg font-lato">
                The Internet Safety Stakeholders Forum (ISSF) is a
                multi-stakeholder platform for discussing online safety and
                public policy issues. It emerged from Virtually Safe’s Africa
                Online Safety Fund initiatives in 2022, funded by Impact
                Amplifier and Google.org. Together, we address challenges like
                cyberthreats, digital well-being, and online safety trends.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={issf} // Replace with the actual path to the flyer image
                alt="ISSF Flyer"
                className="w-full h-auto md:h-56 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 3: Previous Event Highlights */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-nouvelr mb-6">
              Previous Event Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-lato justify-items-center">
              {/* Highlight 1 */}
              <motion.div
                className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 text-center w-full max-w-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaMicrophone className="text-4xl text-blue-600 mb-4 mx-auto" />
                <p className="text-gray-700 text-base md:text-lg">
                  Engaging panels on online grooming, cyberbullying, and online
                  betting.
                </p>
              </motion.div>

              {/* Highlight 2 */}
              <motion.div
                className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 text-center w-full max-w-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGamepad className="text-4xl text-purple-600 mb-4 mx-auto" />
                <p className="text-gray-700 text-base md:text-lg">
                  Interactive sessions with Virtually Safe’s Bambi Online Safety
                  Board Game.
                </p>
              </motion.div>

              {/* Highlight 3 */}
              <motion.div
                className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 text-center w-full max-w-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaBook className="text-4xl text-green-600 mb-4 mx-auto" />
                <p className="text-gray-700 text-base md:text-lg">
                  Distribution of online safety resources like The Adventures of
                  Chimamanda and Yusuf.
                </p>
              </motion.div>

              {/* Highlight 4 */}
              <motion.div
                className="bg-gradient-to-r from-red-100 to-red-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 text-center w-full max-w-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHandshake className="text-4xl text-red-600 mb-4 mx-auto" />
                <p className="text-gray-700 text-base md:text-lg">
                  Networking opportunities with industry leaders and advocates.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Logo />

      <section className="bg-white  h-8 md:h-10 w-full"></section>

      <div className="bg-gray-100">
        {/* Problem Statement Section */}
        <section className="bg-[#F9F9F9] py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-nouvelr mb-4">
              Problem Statement
            </h2>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed font-lato max-w-3xl mx-auto">
              The internet has transformed our lives, breaking geographical
              barriers and fostering global connectivity. However, it has also
              introduced significant challenges.
            </p>

            {/* Problem Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
              {/* Card 1 */}
              <div className="bg-purple-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-3 duration-300">
                <MdLock className="text-purple-600 text-5xl mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-nouvelr">
                  Cyberthreats
                </h3>
                <p className="text-gray-700 text-base md:text-lg font-lato">
                  Cyberthreats that compromise personal and organizational
                  security.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-3 duration-300">
                <MdPublic className="text-green-600 text-5xl mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-nouvelr">
                  Digital Divide
                </h3>
                <p className="text-gray-700 text-base md:text-lg font-lato">
                  Digital divides that exclude many from the benefits of the
                  online world.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-3 duration-300">
                <MdPrivacyTip className="text-blue-600 text-5xl mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-nouvelr">
                  Privacy Concerns
                </h3>
                <p className="text-gray-700 text-base md:text-lg font-lato">
                  Privacy concerns in a rapidly evolving digital ecosystem.
                </p>
              </div>
            </div>

            {/* Closing Statement */}
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed font-lato max-w-3xl mx-auto mt-12">
              To address these challenges and harness the benefits of the
              internet, inclusive solutions are essential. The ISSF provides a
              space for collaboration, ensuring that digital policies are
              adaptable, equitable, and impactful.
            </p>
          </div>
        </section>
      </div>

      <section className="bg-gray-50 py-12 px-4 relative overflow-hidden">
        {/* Decorative Shape */}
        <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-purple-500 rounded-full blur-3xl opacity-50 transform -translate-x-12 -translate-y-12"></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 font-nouvelr">
            Stay Updated
          </h2>
          <p className="text-gray-700 mt-4 text-sm md:text-base font-lato ">
            Want to stay informed about the next ISSF event? Sign up to receive
            updates, news, and exclusive <br /> content directly to your inbox.
          </p>

          {/* Email Subscription Form */}
          <form className="mt-6 flex items-center justify-center font-lato">
            <input
              type="email"
              placeholder="Email address"
              className="w-2/3 md:w-1/2 lg:w-1/3 px-4 py-2 text-sm md:text-base border border-purple-300 rounded-l-lg focus:ring-0 focus:ring-purple-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 text-sm md:text-base font-semibold bg-purple-500 text-white rounded-r-lg hover:bg-purple-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <section className="bg-white  h-8 md:h-10 w-full"></section>
    </div>
  );
}
