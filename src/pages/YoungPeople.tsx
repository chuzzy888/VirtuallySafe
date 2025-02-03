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
        className="relative h-auto py-20 md:h-[620px] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${yp})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl">
          {/* Subtitle */}
          <p className="text-green-400 text-lg md:text-2xl font-semibold tracking-wider uppercase mb-5 font-nouvelr">
            Young People
          </p>

          {/* Title */}
          <h1 className="text-white text-xl md:text-5xl lg:text-6xl font-bold leading-tight md:mb-10 mb-5 font-nouvelr">
            Educating and equipping the upcoming generation.
          </h1>

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
      <section className="bg-gradient-to-b from-[#851FEC] to-[#6B14BF] text-white px-6 md:px-12 lg:px-20 py-16 md:py-24 font-josefin">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight mb-4 font-nouvelr">
            We Serve Young People
          </h2>
          <p className="text-base md:text-lg leading-relaxed font-medium font-nouvelr">
            One out of three internet users is a young person below the age of
            18. They are spending more time online—learning, playing games,
            browsing social media, creating content, and using mobile apps.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={ypg}
              alt="Children smiling"
              className=" shadow-2xl w-full max-w-[450px] md:max-w-[450px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-10">
            <p className="text-[#F9F9F9] text-base md:text-lg leading-relaxed font-lato">
              The Internet offers young people an exciting space to learn, shop,
              create, and connect. However, they are also vulnerable to risks
              such as cyberbullying, exploitation, and exposure to harmful
              content.
            </p>
            <p className="text-[#F9F9F9] text-base md:text-lg leading-relaxed font-lato">
              Virtually Safe is committed to providing a secure and enriching
              online environment. We equip young users with the resources they
              need to stay safe and thrive in the digital space.
            </p>
            {/* Button */}
            <div className="flex justify-center md:justify-start">
              <button className="bg-green-400 hover:bg-green-500 text-white font-medium text-sm md:text-lg px-5 py-3 rounded-lg shadow-lg w-full md:w-auto font-nouvelr">
                Explore Our Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  h-10  w-full"></section>
    </div>
  );
}
