import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import gnr from "../assets/images/ct.png";
import aee from "../assets/images/aee.png";
import mc from "../assets/images/mc.png";
import ase from "../assets/images/ase.png";
import bp from "../assets/images/bp.png";
import image1 from "../assets/images/fim.png";
import image2 from "../assets/images/sim.png";
import image3 from "../assets/images/tim.png";
import image4 from "../assets/images/atc.png";

export default function ISSC() {
  return (
    <div>
      <div
        className="relative h-[300px] md:h-[500px] w-full bg-cover bg-center flex justify-center items-center font-josefin"
        style={{
          backgroundImage: `url(${gnr})`,
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 lg:px-16">
          {/* Subtitle */}
          <p className="text-green-400 text-sm md:text-lg lg:text-xl font-medium tracking-wide mb-4  uppercase">
            Internet Safety School Clubs
          </p>

          {/* Title */}
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-snug lg:leading-tight mb-6 max-w-4xl mx-auto font-lato">
            Virtually Safe School Club: Empowering students to become champions
            of online safety within their school communities.
          </h1>
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
      <div
        className="bg-gradient-to-r from-[#00294b52] via-[#17505452] to-[#00294b52] py-16 px-5 "
        style={{
          background:
            "linear-gradient(116.68deg, rgba(0, 41, 75, 0.32) 0%, rgba(23, 80, 84, 0.32) 11.96%, rgba(41, 110, 91, 0.32) 21.11%, rgba(68, 156, 101, 0.32) 30.52%, rgba(75, 169, 104, 0.32) 33.98%, rgba(83, 182, 107, 0.32) 42.46%, rgba(80, 176, 105, 0.32) 45.83%, rgba(72, 163, 102, 0.32) 52.76%, rgba(46, 120, 93, 0.32) 71.43%, rgba(29, 90, 86, 0.32) 83.59%, rgba(0, 41, 75, 0.32) 97.4%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-2 md:px-8 lg:px-10 py-12">
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#00294B] mb-12 font-nouvelr">
            Here's What the Club Typically Involves
          </h2>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-josefin">
            {/* Card 1 */}
            <div className="bg-white shadow-lg hover:shadow-xl rounded-xl p-6 text-center transform transition-transform hover:-translate-y-2 duration-300">
              <img
                src={aee}
                alt="Education & Awareness"
                className="rounded-lg w-full mb-6 object-cover h-40"
              />
              <h3 className="text-lg font-semibold text-[#00294B] mb-4 font-nouvelr">
                Education & Awareness
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Members learn about various online safety topics like
                cyberbullying, online privacy, and responsible digital
                citizenship.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg hover:shadow-xl rounded-xl p-6 text-center transform transition-transform hover:-translate-y-2 duration-300">
              <img
                src={mc}
                alt="Creative Projects"
                className="rounded-lg w-full mb-6 object-cover h-40"
              />
              <h3 className="text-lg font-semibold text-[#00294B] mb-4 font-nouvelr">
                Creative Projects
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clubs often engage in creative projects like designing posters
                and presentations, which can be shared with the wider school
                community.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg hover:shadow-xl rounded-xl p-6 text-center transform transition-transform hover:-translate-y-2 duration-300">
              <img
                src={ase}
                alt="Advocacy & Action"
                className="rounded-lg w-full mb-6 object-cover h-40"
              />
              <h3 className="text-lg font-semibold text-[#00294B] mb-4 font-nouvelr">
                Advocacy & Action
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clubs run campaigns to promote online safety practices and
                organize workshops, presentations, or events to educate peers.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg hover:shadow-xl rounded-xl p-6 text-center transform transition-transform hover:-translate-y-2 duration-300">
              <img
                src={bp}
                alt="Peer-to-Peer Support"
                className="rounded-lg w-full mb-6 object-cover h-40"
              />
              <h3 className="text-lg font-semibold text-[#00294B] mb-4 font-nouvelr">
                Peer-to-Peer Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clubs create a safe space for students to discuss concerns and
                seek help, making members resources for their peers.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-[#F9F9F9] px-6 md:px-10 lg:px-20 py-12">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#00294B] mb-10 font-nouvelr">
            Benefits of School Clubs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center md:flex-row gap-6 text-center md:text-left">
              <img
                src={image1}
                alt="Empowers Students"
                className="w-full md:w-32 lg:w-40 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#00294B] mb-2 font-nouvelr">
                  Empowers Students
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  By actively engaging in online safety initiatives, students
                  develop critical thinking and problem-solving skills.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center md:flex-row gap-6 text-center md:text-left">
              <img
                src={image2}
                alt="Creates a Safer School Environment"
                className="w-full md:w-32 lg:w-40 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#00294B] mb-2 font-nouvelr">
                  Creates a Safer School Environment
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  By raising awareness and promoting responsible online
                  behavior, clubs contribute to a safer and more positive school
                  environment.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center md:flex-row gap-6 text-center md:text-left">
              <img
                src={image3}
                alt="Fosters a Sense of Community"
                className="w-full md:w-32 lg:w-40 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#00294B] mb-2 font-nouvelr">
                  Fosters a Sense of Community
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Clubs provide a platform for students to connect, collaborate,
                  and work together towards a common goal.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center md:flex-row gap-6 text-center md:text-left">
              <img
                src={image4}
                alt="Enhances Leadership Skills"
                className="w-full md:w-32 lg:w-40 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#00294B] mb-2 font-nouvelr">
                  Enhances Leadership Skills
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  By taking on leadership roles within clubs, students develop
                  valuable skills such as teamwork, communication, and
                  decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
