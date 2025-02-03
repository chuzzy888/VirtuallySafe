import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import gnr from "../assets/images/gnr.png";
import sg1 from "../assets/images/sg1.png";
import { FaMicrophone, FaGamepad, FaBook, FaHandshake } from "react-icons/fa";
import { MdLock, MdPublic, MdPrivacyTip } from "react-icons/md";
export default function ISSF() {
  return (
    <div className="font-josefin">
      <div
        className="relative h-auto py-10 md:h-[600px] w-full bg-cover bg-center flex justify-center items-center font-sans"
        style={{
          backgroundImage: `url(${gnr})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <p className="text-green-400 text-sm md:text-lg font-medium mb-4 uppercase tracking-wider">
            Internet Safety Stakeholders Forum
          </p>
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed lg:leading-tight mb-6 max-w-3xl mx-auto font-lato">
            Empowering Stakeholders to Build a Safer Internet Together
          </h1>

          <p className="text-white text-lg md:text-xl font-light max-w-3xl mx-auto">
            Join industry experts, policymakers, and advocates in a
            collaborative effort to create a safer online experience for all.
          </p>
        </div>
      </div>

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
      <section className="bg-white  h-8 md:h-10 w-full"></section>

      <section className="bg-[#F9F9F9] py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Second Content Block */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 font-lato">
                The Goal
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed font-lato max-w-5xl">
                Protecting children and young people online is a shared
                responsibility. The Internet Safety Stakeholders Forum (ISSF) is
                a platform that brings together policymakers, tech companies,
                parents, educators, youth organizations, industries, government
                agencies, and more. Together, we ensure a sustainable future by
                addressing the challenges and opportunities of the digital
                world.
              </p>
            </div>
            <img
              src={sg1}
              alt="Youth Gambling"
              className="w-full h-56 object-cover  shadow-lg"
            />
          </div>
        </div>
      </section>
      <div className="bg-gray-100">
        {/* Header Section */}
        <section
          className="text-center py-20 px-4"
          style={{
            background:
              "linear-gradient(116.68deg, rgba(0, 41, 75, 0.32) 0%, rgba(23, 80, 84, 0.32) 11.96%, rgba(41, 110, 91, 0.32) 21.11%, rgba(68, 156, 101, 0.32) 30.52%, rgba(75, 169, 104, 0.32) 33.98%, rgba(83, 182, 107, 0.32) 42.46%, rgba(80, 176, 105, 0.32) 45.83%, rgba(72, 163, 102, 0.32) 52.76%, rgba(46, 120, 93, 0.32) 71.43%, rgba(29, 90, 86, 0.32) 83.59%, rgba(0, 41, 75, 0.32) 97.4%)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 font-nouvelr">
              The ISSF serves as a multi-stakeholder platform for discussing
              online safety and public policy issues.
            </h1>
            <p className="text-gray-700 mt-4  text-sm md:text-base font-lato">
              It emerged from Virtually Safe’s Africa Online Safety Fund
              initiatives in 2022, funded by Impact Amplifier and Google.org.
              This forum fosters collaboration among internet stakeholders to
              address key concerns like cyberthreats, digital well-being, and
              online safety trends.
            </p>
          </div>

          {/* Event Highlights Section */}
          <section className="py-12 px-6  ">
            <div className="max-w-6xl mx-auto">
              {/* Section Heading */}
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10 font-nouvelr">
                Previous Event Highlights
              </h2>

              {/* Event Highlights Cards */}
              <div className="flex flex-wrap justify-center gap-8 font-josefin">
                {/* Highlight 1 */}
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 text-center max-w-xs">
                  <FaMicrophone className="text-4xl text-blue-600 mb-4" />
                  <p className="text-gray-700 text-base md:text-lg">
                    Engaging panel discussions on topics such as online
                    grooming, cyberbullying, and online betting.
                  </p>
                </div>

                {/* Highlight 2 */}
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 text-center max-w-xs">
                  <FaGamepad className="text-4xl text-purple-600 mb-4" />
                  <p className="text-gray-700 text-base md:text-lg">
                    Interactive sessions with Virtually Safe’s Bambi Online
                    Safety Board Game.
                  </p>
                </div>

                {/* Highlight 3 */}
                <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 text-center max-w-xs">
                  <FaBook className="text-4xl text-green-600 mb-4" />
                  <p className="text-gray-700 text-base md:text-lg">
                    Distribution of online safety resources like The Adventures
                    of Chimamanda and Yusuf.
                  </p>
                </div>

                {/* Highlight 4 */}
                <div className="bg-gradient-to-r from-red-100 to-red-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 text-center max-w-xs">
                  <FaHandshake className="text-4xl text-red-600 mb-4" />
                  <p className="text-gray-700 text-base md:text-lg">
                    Networking opportunities with industry leaders and
                    advocates.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {/* Card 1 */}
              <div className="bg-purple-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-3 duration-300">
                <MdLock className="text-purple-600 text-5xl mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-nouvelr">
                  Cyberthreats
                </h3>
                <p className="text-gray-700 text-base md:text-lg font-josefin">
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
                <p className="text-gray-700 text-base md:text-lg font-josefin">
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
                <p className="text-gray-700 text-base md:text-lg font-josefin">
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
              className="w-2/3 md:w-1/2 lg:w-1/3 px-4 py-2 text-sm md:text-base border border-purple-300 rounded-l-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
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
