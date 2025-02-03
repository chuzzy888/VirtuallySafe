import pim from "../assets/images/Cyber Space-30.jpg";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import pdg from "../assets/images/pdg.png";
import wsp from "../assets/images/ssd.jpg";
export default function Parent() {
  return (
    <div>
      <div
        className="relative h-auto py-20 md:h-[620px] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${pim})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl">
          {/* Subheading */}
          <p className="text-[#61CE70] text-lg md:text-2xl font-semibold uppercase tracking-widest mb-3 font-nouvelr">
            Empowering Parents
          </p>

          {/* Heading */}
          <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-boldleading-tight md:mb-10 mb-5 font-nouvelr">
            Helping Parents Protect <br /> Their Children Online
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
      <section className="bg-[#F9F9F9] text-[#00294B] px-6 md:px-16 py-12 md:py-20 font-josefin">
        {/* Section Heading */}
        <h2 className="text-center font-bold text-2xl md:text-4xl mb-6 text-[#00294B] font-nouvelr">
          We Support Parents in Keeping Their Children Safe Online
        </h2>

        {/* Introductory Text */}
        <p className="text-center text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-[#1E1E1E] font-medium font-nouvelr">
          Are you a parent of a child who uses the internet or will start using
          it soon? Your role in ensuring their safety online is more important
          than ever.
        </p>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={wsp}
              alt="Happy family using the internet"
              className="rounded-2xl shadow-xl w-full md:h-[400px] max-w-[350px] md:max-w-[500px] object-cover"
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-1/2 text-base md:text-lg leading-relaxed text-center md:text-left font-lato">
            <p className="mb-5 text-[#1E1E1E]">
              As a parent, it is your responsibility to ensure that your child
              stays safe while exploring the digital world. The internet is no
              longer optional for young people; it is their gateway to
              education, entertainment, social interactions, and essential
              services.
            </p>
            <p className="mb-5 text-[#1E1E1E]">
              While the internet offers incredible opportunities, it also
              presents risks such as cyberbullying, identity theft, and exposure
              to harmful content. Young people must be protected from
              inappropriate online behavior and threats like sexual harassment,
              violence, and exploitation.
            </p>
            <p className="mb-8 text-[#1E1E1E]">
              At Virtually Safe, we are committed to providing the right tools
              and resources to help parents create a safer online environment
              for their children. Our mission is to empower you with knowledge,
              strategies, and digital solutions to ensure their well-being in
              the digital age.
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

      <section className="bg-white  h-10 w-full"></section>
    </div>
  );
}
