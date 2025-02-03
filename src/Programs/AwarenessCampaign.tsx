import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import adv from "../assets/images/adc.png";
export default function AwarenessCampaign() {
  return (
    <div>
      <div>
        <div
          className="relative h-auto py-8 md:h-[500px] w-full bg-cover bg-center flex justify-center items-center font-josefin"
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
              Awareness and campaign
            </p>

            {/* Title */}
            <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed lg:leading-tight mb-6 max-w-4xl mx-auto font-lato">
              Virtually Safe organizes competitions to drive young people's
              participation which includes <br className="hidden md:block" />{" "}
              (Debate, Skit competition, Art Challenge).
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
      </div>
    </div>
  );
}
