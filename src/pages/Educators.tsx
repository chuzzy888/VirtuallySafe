import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
export default function Educators() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <section className="relative py-16">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center h-[400px] md:h-[450px] lg:h-[350px]"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/karotcloud/image/upload/v1740597943/Rectangle_1_ksazjz.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 -mt-[120px] container mx-auto px-6 flex justify-center">
          <div className=" bg-[#F9F9F9] rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start w-full md:max-w-4xl mt-40 md:mt-52 lg:mt-60">
            {/* Image */}
            <img
              src="https://res.cloudinary.com/karotcloud/image/upload/v1740598162/IMG_1691_llb7ij.jpg"
              alt="Event"
              className="w-full h-full md:w-1/3 rounded-lg object-cover"
            />

            {/* Text Content */}
            <div className="md:ml-6 mt-6 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#00294B] font-nouvelr">
                We Serve Educators{" "}
              </h2>
              <p className="mt-4 text-gray-600  leading-relaxed">
                Teachers play a crucial role in shaping the digital habits of
                young people. As students increasingly rely on the internet for
                learning, communication, and entertainment, it is essential that
                educators are equipped with the knowledge and tools to teach
                online safety effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

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
      <section className="relative py-16 bg-[#851FEC] flex justify-center items-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Image Container */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/karotcloud/image/upload/v1740598161/IMG_1692_wwzt7p.jpg"
                alt="Young People Learning"
                className="w-full max-w-md md:max-w-lg rounded-lg shadow-xl transform rotate-3"
              />
              <div className="absolute inset-0 border-4 border-green-400 rounded-lg transform -rotate-6"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 text-white md:text-left text-center px-1 md:px-8">
            <h2 className="text-xl md:text-4xl font-extrabold font-nouvelr md:max-w-lg">
              Why Online Safety Education Matters for Teachers
            </h2>

            <p className="mt-4 text-white leading-relaxed text-sm md:text-lg ">
              Many young people are unaware of the risks they face online, such
              as cyberbullying, identity theft, misinformation, and exposure to
              inappropriate content. Teachers can help bridge this gap by
              integrating online safety lessons into their curriculum, ensuring
              students develop responsible digital habits from an early age.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
