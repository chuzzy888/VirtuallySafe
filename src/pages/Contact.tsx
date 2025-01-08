import cutate from "../assets/images/cuate.png";
import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";

export default function Contact() {
  return (
    <div>
      <section className="bg-[#F9F9F9] py-12 px-6 lg:px-20 font-josefin">
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
      <section className="bg-white  h-20 md:h-30 w-full">
        {/* Content Placeholder */}
        <div className="flex justify-center items-center h-full"></div>
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
      <section className="bg-white  h-20 md:h-30 w-full">
        {/* Content Placeholder */}
        <div className="flex justify-center items-center h-full"></div>
      </section>
    </div>
  );
}
