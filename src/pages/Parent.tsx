import pim from "../assets/images/pim.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import pdg from "../assets/images/pdg.png";
import wsp from "../assets/images/wsp.png";
export default function Parent() {
  return (
    <div>
      <div
        className="relative h-[500px] md:h-[600px] w-full bg-cover bg-center flex justify-center items-center font-josefin"
        style={{
          backgroundImage: `url(${pim})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <p className="text-green-400 text-lg font-semibold mb-2">Parents</p>
          <h1 className="text-white text-xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 px-5">
            Parents Educating parents to understand the importance of keeping
            their children safe on the internet
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
          We serve Parents
        </h2>
        <p className="text-center text-sm md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-[#00294B] font-black">
          Are you a parent of a child who uses the internet or the parent of a
          child who will start using the internet soon?
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={wsp}
              alt="Children smiling"
              className="rounded-md w-full max-w-[350px] md:max-w-[400px]"
            />
          </div>

          <div className="w-full md:w-2/3 text-sm md:text-base leading-relaxed text-center md:text-start">
            <p className="mb-4 text-[#1E1E1E]">
              If you are, firstly you should know that it is your responsibility
              to make sure that your child stays safe while using the internet.
              Secondly, you should know that the digital world is not optional
              for young people, it is their gateway to education, information,
              entertainment, health services, and mediates their relationships
              and experiences.
            </p>
            <p className="mb-8 text-[#1E1E1E]">
              While we believe that the Internet can be a wonderful place for
              young people to learn, shop, play games, create, be entertained
              and talk to friends, we also know that there are predators,
              identity thieves, and others online who may try to harm vulnerable
              users. Young people can be exposed to harmful content and
              behaviour online, such as cyberbullying, sexual harassment,
              pornography, violence, or self-harm.
            </p>
            <p className="mb-8 text-[#1E1E1E]">
              Virtually Safe wants to ensure that young people have a safe and
              stimulating environment online while engaging with new
              technologies and spending time online by providing efficient
              responses and help to prevent negative consequences for their
              cognitive, social and emotional development. Our goal with young
              people is to provide resources to protect them from harmful and
              illegal online content, conduct and risks as young consumers and
              to improve their well-being online as they explore the digital
              world.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#61CE70] hover:bg-green-600 text-white font-semibold px-6 py-3 md:rounded-md rounded-full shadow-md transition duration-300">
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
