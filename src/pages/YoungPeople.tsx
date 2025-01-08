import yp from "../assets/images/abts.jpg";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import pdg from "../assets/images/pdg.png";
import ypg from "../assets/images/DSC_0089.jpg";
export default function YoungPeople() {
  return (
    <div>
      <div
        className="relative h-[300px] md:h-[700px] w-full bg-cover bg-center flex justify-center items-center spacefont"
        style={{
          backgroundImage: `url(${yp})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-green-400 text-base md:text-xl font-semibold tracking-wide uppercase mb-4">
            Young People
          </p>
          <h1 className="text-white text-xl md:text-5xl lg:text-6xl font-extrabold leading-snug md:leading-tight mb-8">
            Educating and equipping the <br /> upcoming generation.
          </h1>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 md:text-lg font-semibold md:px-8 text-sm py-4 rounded-ful shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
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
      <section className="bg-gradient-to-b from-[#851FEC] to-[#6B14BF] text-white px-6 md:px-16 py-12 md:py-20 font-josefin">
        {/* Header Section */}
        <h2 className="text-white text-center font-semibold text-2xl md:text-3xl mb-6 underline decoration-2">
          We Serve Young People
        </h2>
        <p className="text-center text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-10 font-medium md:font-bold">
          One out of three internet users is a young person below the age of 18
          years. They are spending more and more of their time on the Internet,
          learning, playing online games, browsing social media, creating
          content, and using mobile apps.
        </p>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={ypg}
              alt="Children smiling"
              className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-[500px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-sm md:text-base leading-relaxed text-center md:text-left">
            <p className="mb-6 text-[#F9F9F9] md:font-medium">
              While we believe that the Internet can be a wonderful place for
              young people to learn, shop, play games, create, be entertained,
              and talk to friends, we also know that there are predators,
              identity thieves, and others online who may try to harm vulnerable
              users. Young people can be exposed to harmful content and behavior
              online, such as cyberbullying, sexual harassment, pornography,
              violence, or self-harm.
            </p>
            <p className="mb-8 text-[#F9F9F9] md:font-medium">
              Virtually Safe wants to ensure that young people have a safe and
              stimulating environment online while engaging with new
              technologies. Our goal is to provide resources to protect them
              from harmful and illegal online content and risks while improving
              their well-being as they explore the digital world.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#61CE70] hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
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
