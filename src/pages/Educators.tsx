import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import pmo from "../assets/images/pmo.jpg";
import lgt from "../assets/images/ppo.jpg";
export default function Educators() {
  return (
    <div>
      <div
        className="relative h-[350px] md:h-[500px] lg:h-[600px] w-full bg-cover bg-center flex justify-center items-center font-josefin"
        style={{
          backgroundImage: `url(${pmo})`,
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl">
          {/* Subheading */}
          <p className="text-green-400 text-lg md:text-2xl font-semibold tracking-wide mb-4 uppercase font-nouvelr">
            Empowering Educators
          </p>

          {/* Heading */}
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl  font-bold leading-tight mb-10 font-nouvelr">
            Equipping teachers with the knowledge to guide young people in
            staying safe online.
          </h1>
          {/* Button */}
          <button className="bg-green-400 hover:bg-green-500 text-white font-medium text-sm md:text-lg px-5 py-3 rounded-lg shadow-lg  font-nouvelr">
            Explore Our Programs Report
          </button>
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
      <section className="bg-[#F9F9F9] text-[#1E1E1E] px-6 md:px-16 py-12 md:py-20 font-josefin">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-[#00294B] font-bold text-xl md:text-3xl mb-4 font-nouvelr">
            We Serve Educators
          </h2>
          <p className="text-sm md:text-lg leading-relaxed text-[#00294B] font-lato">
            We are passionate about providing digital skills, ensuring children
            have the right to be safe online, and guiding all stakeholders on
            securing that right.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center md:items-start gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={lgt}
              alt="Educators teaching"
              className="rounded-xl w-full lg:max-w-[400px] h-[350px] md:h-[400px] object-cover shadow-lg"
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 text-center md:text-start space-y-6">
            <p className="text-base md:text-lg font-lato">
              One of the most effective ways to provide this education is
              through teachers. That’s why our work with educators is so
              important to us. We host Teacher’s Hangouts annually to discuss
              online safety and share resources with teachers on safeguarding
              young people. Many of our educators have even started Online
              Safety Clubs in their schools.
            </p>
            <p className="text-base md:text-lg font-lato">
              With the numerous challenges and risks in the digital environment,
              online safety is essential as students navigate their digital
              world. At Virtually Safe, we empower students to identify common
              issues and stay safe online.
            </p>
            <p className="text-base md:text-lg font-lato">
              We collaborate with all stakeholders, including educators,
              teachers, and schools. These groups play a pivotal role in shaping
              young people and ensuring safe internet usage both at school and
              home.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start mt-4">
              <button className="bg-green-400 hover:bg-green-500 text-white font-medium text-sm md:text-lg px-5 py-3 rounded-lg shadow-lg w-full md:w-auto font-nouvelr">
                Explore Our Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  h-10 w-full"></section>
    </div>
  );
}
