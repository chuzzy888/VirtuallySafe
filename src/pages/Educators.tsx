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
        className="relative h-[300px] md:h-[600px] w-full bg-cover bg-center flex justify-center items-center font-josefin"
        style={{
          backgroundImage: `url(${pmo})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-8">
          <p className="text-green-400 text-base md:text-5xl font-semibold mb-4">
            Educators
          </p>
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight mb-6">
            Educating and equipping teachers to teach young people how to be
            safe online.
          </h1>
          <button className="bg-green-500 hover:bg-green-600 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
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
      <section className="bg-[#F9F9F9] text-[#1E1E1E] px-6 md:px-12 py-10 md:py-16 font-josefin">
        <h2 className="text-[#00294B] text-center font-semibold text-lg md:text-xl mb-4 underline decoration-2">
          We Serve Educators
        </h2>
        <p className="text-center text-sm md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-[#00294B]">
          As an organization, we are passionate about providing digital skills,
          including ensuring children have the right to be safe online and
          guiding all stakeholders on securing that right.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={lgt}
              alt="Educators teaching"
              className="rounded-md w-full max-w-[350px] h-[300px] object-cover md:h-[350px] md:max-w-[400px] shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/3 text-sm md:text-base leading-relaxed text-center md:text-start">
            <p className="mb-6">
              One of the most effective ways to provide this education is
              through teachers. This is why our work with educators is so
              important to us. We host Teacher’s Hangouts annually to discuss
              online safety and share resources with teachers on how to
              safeguard young people. Many of our educators have even started
              Online Safety Clubs in their schools.
            </p>
            <p className="mb-6">
              With the numerous challenges and risks in the digital environment,
              online safety is essential as students navigate their digital
              world. At Virtually Safe, we aim to empower students to identify
              common issues and stay safe online.
            </p>
            <p className="mb-8">
              To achieve this, we collaborate with all stakeholders, including
              educators, teachers, and schools. These groups play a pivotal role
              in shaping young people and ensuring safe internet usage at school
              and home. Schools and teachers can significantly contribute to
              keeping young people safe online.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#61CE70] hover:bg-[#4CAF50] text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
                Explore Our Programs Report
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  h-20 md:h-30 w-full">
        {/* Content Placeholder */}
        <div className="flex justify-center items-center h-full"></div>
      </section>
    </div>
  );
}
