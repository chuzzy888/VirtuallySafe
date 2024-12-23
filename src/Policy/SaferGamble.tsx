import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import gnr from "../assets/images/gnr.png";
import sg1 from "../assets/images/sg1.png";
import sg2 from "../assets/images/sg2.png";
import cutate from "../assets/images/cuate.png";

export default function SaferGamble() {
  return (
    <div className="font-josefin">
      <div
        className="relative h-[500px] md:h-screen w-full bg-cover bg-center flex justify-center items-center font-josefin"
        style={{
          backgroundImage: `url(${gnr})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <p className="text-green-400 text-lg font-semibold mb-2">
            We are creating a culture of responsible gambling and betting to
            ensure compliance, adopt best practice and improve social impact.{" "}
          </p>
          <h1 className="text-white text-xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 px-5">
            Gambling or betting should be a safe, enjoyable activity. People who
            gamble should be in control, they should be self-aware and should
            not be encouraged to play in a way that they may regret.
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
      <section className="bg-white  h-20 md:h-30 w-full">
        {/* Content Placeholder */}
        <div className="flex justify-center items-center h-full"></div>
      </section>
      <section className="bg-[#F9F9F9] py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* First Content Block */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-10">
            <img
              src={sg2}
              alt="Safer Gambling"
              className="w-full lg:w-2/3 rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                Safer Gambling
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Research shows that more than 65 million Nigerians aged between
                18 and 40 bet on various online platforms and this number
                includes vulnerable players who do not gamble for fun. We
                believe that a positive action is required to minimise
                gambling-related harm like addictions and depression by creating
                meaningful conversations that engage all stakeholders:
                regulators, industry players, policymakers, academic experts,
                mental health experts, and the general public on the strategy to
                address the harms of gambling.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Beyond driving safer gambling conversations, we work with
                innovators, change-makers, tech developers to create actual
                tools that can help people gamble safely online. Virtually Safe
                provides a multi-faceted and innovative approach to problem
                gambling prevention through outreach, community education, and
                community awareness activities like community involvement events
                and youth engagement projects.
              </p>
            </div>
          </div>

          {/* Second Content Block */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                Why Should We Care About Gambling Especially Among Young People
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Gambling patterns start as early as 9 years and can be
                established before teens. Young people ages 9-17 years engage in
                legalized and self-organized gambling at home and in school.
                People who gamble at an early age are more likely to have
                gambling problems later on. Gambling and betting has become more
                attractive and accessible to everyone through technology. Young
                people with gambling problems tend to have higher rates of
                substance abuse, depression, anxiety, and suicide. Survey
                conducted says that over 10% of teenagers have gambled online.
              </p>
            </div>
            <img
              src={sg1}
              alt="Youth Gambling"
              className="w-full lg:w-2/3 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-white  h-20 md:h-30 w-full">
        {/* Content Placeholder */}
        <div className="flex justify-center items-center h-full"></div>
      </section>
      <section className="bg-[#F9F9F9] py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Image Section */}
          <div className="flex justify-center">
            <img
              src={cutate}
              alt="Contact Us"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>

          {/* Right Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-purple-600 text-lg font-semibold">
              Contact us
            </h3>
            <h2 className="text-gray-800 text-2xl font-bold mt-2">
              Speak with Experts
            </h2>

            <form className="mt-6 space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your number"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Heading Field */}
              <div>
                <label
                  htmlFor="heading"
                  className="block text-sm font-medium text-gray-700"
                >
                  Heading
                </label>
                <input
                  type="text"
                  id="heading"
                  placeholder="Heading"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Description Field */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Enter message"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
