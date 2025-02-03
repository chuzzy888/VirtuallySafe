import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import gnr from "../assets/images/pm.png";
import rs1 from "../assets/images/rs1.jpg";
import rs2 from "../assets/images/rs2.jpg";
import rs3 from "../assets/images/rs3.jpg";
import rs4 from "../assets/images/rs4.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
const resources = [
  {
    image: rs1,
    title: "Internet Safety Checklist",
    description: "For Parents & Students",
    link: "https://drive.google.com/file/d/1fp8xDlR0duJyM1SlyjG0MB9A2RjMpp1U/view?usp=sharing",
  },
  {
    image: rs2,
    title: "Navigating The Digital World",
    description:
      "A teen's guide to setting screen time limits for a balanced lifestyle",
    link: "https://drive.google.com/file/d/1KUPlTWk5kMlXKH_BiD93hvwQrWA99iT4/view?usp=sharing",
  },
  {
    image: rs3,
    title: "Online Challenge And Young People",
    description:
      "Explore online challenges and their impact on young individuals",
    link: "https://drive.google.com/file/d/1qTj_wy9PaGqCEcL_mfVB10LNMUgLEHv3/view?usp=sharing",
  },
  {
    image: rs4,
    title: "Protecting Our Precious Ones",
    description: "A comprehensive guide to combating online predators",
    link: "https://drive.google.com/file/d/1Fu8Othum9WT-PttrKe0-J-QPo32zEhys/view?usp=sharing",
  },
];
export default function Research() {
  return (
    <div>
      <div
        className="relative h-[400px] md:h-[600px] w-full bg-cover bg-center flex justify-center items-center font-josefin"
        style={{
          backgroundImage: `url(${gnr})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 lg:px-16">
          {/* Subtitle */}
          <p className="text-green-400 text-base md:text-xl lg:text-2xl font-medium tracking-wide mb-4 ">
            RESEARCH
          </p>

          {/* Title */}
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed lg:leading-tight mb-6 max-w-3xl mx-auto font-lato">
            Virtual Safety Resources: Tips and tools for young people, parents,
            and educators to navigate and stay safe online.
          </h1>

          {/* Optional CTA */}
          <div className="mt-4">
            {/* Button */}
            <button className="bg-green-400 hover:bg-green-500 text-white font-medium text-sm md:text-lg px-5 py-3 rounded-lg shadow-lg  font-nouvelr">
              Explore Our Programs Research
            </button>
          </div>
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
      <section
        className=" py-12"
        style={{
          background:
            "linear-gradient(116.68deg, rgba(0, 41, 75, 0.32) 0%, rgba(23, 80, 84, 0.32) 11.96%, rgba(41, 110, 91, 0.32) 21.11%, rgba(68, 156, 101, 0.32) 30.52%, rgba(75, 169, 104, 0.32) 33.98%, rgba(83, 182, 107, 0.32) 42.46%, rgba(80, 176, 105, 0.32) 45.83%, rgba(72, 163, 102, 0.32) 52.76%, rgba(46, 120, 93, 0.32) 71.43%, rgba(29, 90, 86, 0.32) 83.59%, rgba(0, 41, 75, 0.32) 97.4%)",
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#00294B] mb-6 font-nouvelr">
            Explore Resources
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#00294B]">
                    {resource.title}
                  </h3>

                  <a
                    href={resource.link}
                    className="text-green-600 font-medium flex items-center mt-4 hover:underline font-nouvelr"
                    target="_blank"
                  >
                    Learn More
                    <MdKeyboardArrowRight size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
