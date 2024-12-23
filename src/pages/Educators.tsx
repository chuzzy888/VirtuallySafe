import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import pmo from "../assets/images/pmo.png";
import lgt from "../assets/images/lgt.png";
export default function Educators() {
  return (
    <div>
      <div
        className="relative h-[500px] md:h-[600px] w-full bg-cover bg-center flex justify-center items-center font-josefin"
        style={{
          backgroundImage: `url(${pmo})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <p className="text-green-400 text-lg font-semibold mb-2">Educators</p>
          <h1 className="text-white text-xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 px-5">
            Educators Educating and equipping teachers to teach young people how
            to be safe online.
          </h1>
          <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 md:rounded-md rounded-full transition duration-300 shadow-md">
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
      <section className="bg-[#F9F9F9] text-white px-6 md:px-12 py-10 md:py-16 font-josefin">
        <h2 className="text-[#00294B] text-center font-semibold text-lg md:text-lg mb-4 underline decoration-1 font-josefin ">
          We serve Educators
        </h2>
        <p className="text-center text-sm md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-[#00294B] font-black">
          As an organization we are passionate about providing digital skills,
          including the right of children to be safe online and what all
          stakeholders can do to secure that right.
        </p>

        <div className="flex flex-col md:flex-row items-center  gap-6 md:gap-12">
          <div className="w-full md:w-1/3 ">
            <img
              src={lgt}
              alt="Children smiling"
              className="rounded-md w-full  max-w-[350px] md:max-w-[400px]"
            />
          </div>

          <div className="w-full md:w-2/3 text-sm md:text-base leading-relaxed text-center md:text-start">
            <p className="mb-4 text-[#1E1E1E]">
              And one of the easiest ways to provide this education is through
              teachers.This is why our work with educators is important to us,
              we host Teacher’s hangouts annually to talk about online safety
              and share resources with teachers on how to help safeguard young
              people, some of our teachers have gone on to start Online Safety
              Clubs in their schools.
            </p>
            <p className="mb-8 text-[#1E1E1E]">
              With so many challenges and risks around the digital environment,
              online safety is important as students navigate their digital
              world. At Virtually Safe, we want students to be able to identify
              these common issues and stay safe while online.
            </p>
            <p className="mb-8 text-[#1E1E1E]">
              And to achieve this, it is important we work with all stakeholders
              including educators, teachers and schools, as these group play a
              huge role in what young people turn out to be in life and we
              believe there are several things that schools and educators can do
              to ensure safe usage of the internet by their students while
              they’re at school or at home. Teachers and schools can play a key
              role in helping to keep young people safe online.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#61CE70] hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full md:rounded-md shadow-md transition duration-300">
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
