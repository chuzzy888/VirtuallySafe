import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import adv from "../assets/images/adc.png";
import cmp from "../assets/images/cmp.png";
import cms from "../assets/images/cms.png";
import atc from "../assets/images/atc.png";

export default function Competition() {
  return (
    <div>
      <div>
        <div
          className="relative h-auto py-14 md:h-[500px] w-full bg-cover bg-center flex justify-center items-center font-josefin"
          style={{
            backgroundImage: `url(${adv})`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 lg:px-12">
            {/* Subtitle */}
            <p className="text-green-400 text-base md:text-lg lg:text-xl font-medium tracking-wide mb-4 uppercase">
              competition
            </p>

            {/* Title */}
            <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed lg:leading-tight mb-6 max-w-4xl mx-auto font-lato">
              Virtually Safe organizes competitions to drive young people's
              participation which includes <br /> (Debate, Skit competition, Art
              Challenge).
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
        <section className="bg-white  h-10  w-full"></section>
        <section className="bg-[#F9F9F9] py-8 w-full">
          {/* Debate Section */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-6 bg-[#851FEC] items-center rounded-lg p-5 mx-5 md:p-8 lg:p-12 md:mx-20 my-10">
            <div className="md:w-1/2">
              <img
                src={cmp}
                alt="Debate Competition"
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 flex flex-col space-y-5 lg:space-y-8">
              <h2 className="text-[#FFFFFF] font-semibold text-3xl md:text-4xl font-nouvelr">
                Debate
              </h2>
              <p className="text-[#FFFFFF] font-lato text-base lg:text-lg leading-relaxed">
                Debate Competition is an exciting event that encourages young
                people to engage in critical thinking and public speaking on the
                topic of online safety. Teams of students from different schools
                compete against each other, presenting arguments and
                counterarguments on various issues related to online safety,
                such as cyberbullying, privacy, and digital citizenship. The
                competition aims to raise awareness of online safety issues and
                empower young people to become advocates for a safer digital
                world.
              </p>
            </div>
          </div>

          {/* Skit Section */}
          <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-6 bg-[#00294B] items-center rounded-lg p-5 mx-5 md:p-8 lg:p-12 md:mx-20 my-10">
            <div className="md:w-1/2 flex flex-col space-y-5 lg:space-y-8">
              <h2 className="text-[#FFFFFF] font-semibold text-3xl md:text-4xl font-nouvelr">
                Skit
              </h2>
              <p className="text-[#FFFFFF] font-lato text-base lg:text-lg leading-relaxed">
                The Skit Challenge is a fun and easy way for young people to
                show their audience positive ways of dealing with difficult
                online situations through a short film. Students will pick a
                skit prompt from the Teens Can Code website or brainstorm their
                own scenario to start writing their script. The Skit Challenge
                is at school level, teams will submit their skit to represent
                their school and winning schools will be rewarded.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={cms} alt="Skit Challenge" className="w-full h-auto" />
            </div>
          </div>

          {/* Art Competition Section */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-6 bg-[#61CE70] items-center rounded-lg p-5 mx-5 md:p-8 lg:p-12 md:mx-20 my-10">
            <div className="md:w-1/2">
              <img src={atc} alt="Art Competition" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2 flex flex-col space-y-5 lg:space-y-8">
              <h2 className="text-[#FFFFFF] font-semibold text-3xl md:text-4xl font-nouvelr">
                Art Competition
              </h2>
              <p className="text-[#FFFFFF] font-lato text-base lg:text-lg leading-relaxed">
                 Art Competition is a creative platform that encourages young
                people to express their understanding of online safety through
                visual art. Students are invited to create artwork that reflects
                their interpretation of online safety concepts, such as
                cyberbullying, digital citizenship, or online privacy.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-white  h-10  w-full"></section>
    </div>
  );
}
