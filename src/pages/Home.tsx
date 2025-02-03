// Hero.tsx
import React, { useEffect, useState } from "react";
import heroImg from "../assets/images/heroImg.png";
import img1 from "../assets/images/ec.jpg";
import img2 from "../assets/images/wsc.jpg";
import img3 from "../assets/images/ct.jpg";
import img4 from "../assets/images/awc.jpg";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import pdg from "../assets/images/pdg.png";
import abtImg from "../assets/images/abt.jpg";
import og from "../assets/images/og.png";
import cri from "../assets/images/cri.png";
import cs1 from "../assets/images/cs1.png";
import cs2 from "../assets/images/cs2.png";
import cs3 from "../assets/images/cs3.png";
import ord from "../assets/images/ord.png";
import ctc from "../assets/images/ctc.png";
// import blob from "../assets/images/blob.svg";
import { FaArrowRight } from "react-icons/fa";
import { FaUsers, FaShieldAlt, FaHandsHelping } from "react-icons/fa";
import Layout from "../components/Layout";

const slides = [
  "Creating a better internet for young people",
  "Empowering youth with safe online spaces ",
  "Building innovative useful tools for online safety ",
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000); // Auto-rotate slides every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div>
      <div className="relative h-[500px] md:min-h-[620px] 2xl:h-screen w-full flex items-center justify-center text-center px-6 md:px-12 py-10 md:py-16">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImg})`,
            filter: "brightness(20%)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.2] md:leading-loose tracking-tight mb-6 md:mb-8 font-nouvelr animate-fade-in">
            {slides[currentSlide]}
          </h1>

          {/* Carousel Dots */}
          <div className="flex justify-center space-x-2 mb-6 md:mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-green-500 scale-125"
                    : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center ">
            <button className="bg-green-500 font-nouvelr hover:bg-green-600 text-white px-8 py-3 sm:px-10 sm:py-4 text-lg sm:text-xl font-semibold rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl flex items-center gap-3 group">
              Explore Our Programs
              <FaArrowRight className="text-white text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1" />
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
      <section
        className=" py-10"
        style={{
          background:
            "linear-gradient(116.68deg, rgba(0, 41, 75, 0.32) 0%, rgba(23, 80, 84, 0.32) 11.96%, rgba(41, 110, 91, 0.32) 21.11%, rgba(68, 156, 101, 0.32) 30.52%, rgba(75, 169, 104, 0.32) 33.98%, rgba(83, 182, 107, 0.32) 42.46%, rgba(80, 176, 105, 0.32) 45.83%, rgba(72, 163, 102, 0.32) 52.76%, rgba(46, 120, 93, 0.32) 71.43%, rgba(29, 90, 86, 0.32) 83.59%, rgba(0, 41, 75, 0.32) 97.4%)",
        }}
      >
        <div className="container mx-auto px-4">
          {/* Section Title */}

          <h2 className="text-[#00294B] text-center font-semibold text-lg md:text-2xl mb-5 uppercase tracking-wider leading-tight underline decoration-2 font-nouvelr decoration-2">
            What we do
          </h2>

          {/* Content */}
          <div className="space-y-12 ">
            {/* Item 1: Image on the Left, Text on the Right */}
            <div className="flex  flex-col lg:flex-row items-center items-center justify-center md:gap-20">
              <img
                src={img1}
                alt="Support Young People"
                className="   object-cover h-80 w-full lg:w-auto"
              />
              <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
                <h3 className="md:text-3xl text-xl font-bold font-nouvelr text-[#00294B]">
                  Support Young people, parents and Educators
                </h3>
                <p className="text-gray-700 mt-2 max-w-lg md:text-3xl  font-lato">
                  To fully protect young people from online harm or exposure to
                  unacceptable online risk.
                </p>
              </div>
            </div>

            {/* Item 2: Text on the Left, Image on the Right */}
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center md:gap-20">
              <img
                src={img2}
                alt="Advocacy Policy"
                className="object-cover h-80 w-full lg:w-auto"
              />
              <div className="mt-6 md:mt-0 md:mr-8 text-center md:text-left">
                <h3 className="md:text-3xl text-xl font-bold font-nouvelr text-[#00294B]">
                  Advocacy Policy
                </h3>
                <p className="text-gray-700 mt-2 max-w-lg md:text-3xl font-lato">
                  We understand that an education-based approach alone will not
                  be entirely effective; we need expert knowledge grounded in
                  research.
                </p>
              </div>
            </div>

            {/* Item 3: Image on the Left, Text on the Right */}
            <div className="flex flex-col lg:flex-row items-center justify-center md:gap-20">
              <img
                src={img3}
                alt="Create Tools"
                className=" object-cover h-80 w-full lg:w-auto"
              />
              <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
                <h3 className="md:text-3xl text-xl font-bold font-nouvelr text-[#00294B]">
                  Create Tools
                </h3>
                <p className="text-gray-700 mt-2 max-w-lg md:text-3xl font-lato">
                  Invest in strengthening systems, building capacities, and
                  innovative technology solutions to tackle online harms.
                </p>
              </div>
            </div>

            {/* Item 4: Text on the Left, Image on the Right */}
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center md:gap-20">
              <img
                src={img4}
                alt="Awareness and Campaigns"
                className=" object-cover h-80 w-full lg:w-auto"
              />
              <div className="mt-6 md:mt-0 md:mr-8 text-center md:text-left">
                <h3 className="md:text-3xl text-xl font-bold font-nouvelr text-[#00294B]">
                  Awareness and Campaigns
                </h3>
                <p className="text-gray-700 mt-2 max-w-lg md:text-3xl font-lato">
                  Our goal is to keep young people safe online. We achieve this
                  through multiple campaigns and awareness programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#00294B] to-[#001F3A] text-white px-6 md:px-16 py-12 md:py-20 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <h2 className="text-[#61CE70] text-center font-semibold text-lg md:text-2xl mb-5 uppercase tracking-wider leading-tight underline decoration-2 font-nouvelr decoration-[#61CE70]">
            About Us
          </h2>

          {/* Section Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mt-10">
            {/* Image Section */}
            <div className="flex justify-center md:order-2">
              <img
                src={abtImg} // Replace with your image path
                alt="Children smiling"
                className="md:h-[300px] w-full object-cover rounded-lg shadow-2xl transform transition-transform hover:-translate-y-2 duration-300"
              />
            </div>

            {/* Text Section */}
            <div className="space-y-8 md:space-y-10">
              {/* Paragraph 1 with Icon */}
              <div className="flex items-start space-x-4">
                <div className="text-[#61CE70] h-10 text-2xl">
                  <FaUsers className="mt-1" /> {/* Icon */}
                </div>
                <p className="text-base md:text-lg leading-relaxed text-[#F9F9F9] font-lato">
                  We believe that the issues young people face online impact
                  families, schools, communities, and the nation at large.
                </p>
              </div>

              {/* Paragraph 2 with Icon */}
              <div className="flex items-start space-x-4">
                <div className="text-[#61CE70] text-2xl">
                  <FaShieldAlt className="mt-1" /> {/* Icon */}
                </div>
                <p className="text-base md:text-lg leading-relaxed text-[#F9F9F9] font-lato">
                  Record levels of bullying, depression, self-harm, and identity
                  theft affect everyone, not just those directly involved.
                </p>
              </div>

              {/* Paragraph 3 with Icon */}
              <div className="flex items-start space-x-4">
                <div className="text-[#61CE70] text-2xl">
                  <FaHandsHelping className="mt-1" /> {/* Icon */}
                </div>
                <p className="text-base md:text-lg leading-relaxed text-[#F9F9F9] font-lato">
                  Protecting children is a shared responsibility. Together, we
                  can ensure a safe future for all, both online and offline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full px-4 md:px-8 lg:px-16 py-8 font-josefin"
        style={{
          background:
            "linear-gradient(116.68deg, rgba(0, 41, 75, 0.32) 0%, rgba(23, 80, 84, 0.32) 11.96%, rgba(41, 110, 91, 0.32) 21.11%, rgba(68, 156, 101, 0.32) 30.52%, rgba(75, 169, 104, 0.32) 33.98%, rgba(83, 182, 107, 0.32) 42.46%, rgba(80, 176, 105, 0.32) 45.83%, rgba(72, 163, 102, 0.32) 52.76%, rgba(46, 120, 93, 0.32) 71.43%, rgba(29, 90, 86, 0.32) 83.59%, rgba(0, 41, 75, 0.32) 97.4%)",
        }}
      >
        <Layout>
          {/* Our Goal */}
          <h2 className="text-[#174F66] text-center font-semibold text-lg md:text-2xl mb-5 uppercase tracking-wider leading-tight underline decoration-2 font-nouvelr decoration-2">
            Our Goal
          </h2>

          {/* Main Section Container */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Left Side: Goal Text */}
            <div className="lg:w-1/2 text-gray-800 ">
              <h3 className="text-lg md:text-3xl 2xl:text-5xl font-semibold leading-snug md:max-w-lg 2xl:max-w-6xl text-center md:text-start">
                Virtually Safe is working towards creating a safer internet for
                young people
              </h3>
            </div>

            {/* Right Side: Image */}
            <div className="lg:w-1/2">
              <img
                src={og}
                alt="Safer Internet"
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          {/* Vision and Mission Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Vision Box */}
            <div className="bg-[#00294B] p-6 rounded-lg shadow-md text-white">
              <h4 className="text-lg font-semibold mb-3  border-b-4">
                Our Vision
              </h4>
              <p className="text-lg leading-relaxed">
                A safer digital world that is free from all forms of abuse,
                exploitations and violence, one that prepares young people to
                thrive in the digital space.
              </p>
            </div>

            {/* Mission Box */}
            <div className="bg-[#851FEC] p-6 rounded-lg shadow-md text-white">
              <h4 className="text-lg font-semibold mb-3  border-b-4">
                Our Mission
              </h4>
              <p className="text-lg leading-relaxed">
                To improve digital safety for internet users, support parents,
                educators and young people in their digital wellbeing while
                promoting the positive and enriching use of digital technology.
              </p>
            </div>
          </div>
        </Layout>
      </section>
      <section className="bg-[#851FEC] text-white py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden ">
        {/* Content Wrapper */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-center font-semibold text-lg md:text-2xl mb-5 uppercase tracking-wider leading-tight underline decoration-2 font-nouvelr  text-[#FFFFFF]">
            Children's Rights
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed font-nouvelr mb-4">
            The rights of every child must be respected, protected and fulfilled
            in the digital space.
            <a
              href="#"
              className="text-white underline text-sm ml-2 hover:text-gray-200"
            >
              see more...
            </a>
          </h2>
        </div>

        {/* Image Section */}
        <div className="relative max-w-lg mx-auto mt-8 z-10">
          <div className="bg-[#f8d888] rounded-lg p-4 relative">
            <img
              src={cri}
              alt="Children Rights"
              className="rounded-lg w-full max-w-sm mx-auto object-cover"
            />
          </div>
        </div>

        {/* Decorative Shapes */}
        {/* <img
          src={blob}
          alt=""
          className="absolute top-[-30px] left-[-40px] w-24 h-24 md:w-96 md:h-96 "
        />

        <img
          src={blob}
          alt=""
          className="absolute bottom-[-30px] right-[-40px] w-28 h-28 md:w-48 md:h-48 "
        /> */}
      </section>
      <section className="bg-[#F9F9F9] py-12 px-4 md:px-8 lg:px-16">
        {/* Header Content */}
        <div className="text-center mb-8">
          <a
            href="#"
            className="text-[#00294B] text-center font-semibold text-lg md:text-2xl mb-5 uppercase tracking-wider leading-tight underline font-nouvelr decoration-2 "
          >
            Need Resources?
          </a>
          <h2 className="text-2xl  md:text-3xl font-semibold mt-2 text-[#1E1E1E] font-nouvelr">
            We Provide a range of free resources for Parents, <br /> teachers
            and young people.
          </h2>
        </div>

        {/* Resource Cards */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          {/* Image 1 */}
          <div className="max-w-xs md:max-w-sm">
            <img
              src={cs3}
              alt="Spot a Phishing Email"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Image 2 */}
          <div className="max-w-xs md:max-w-sm">
            <img
              src={cs2}
              alt="Internet Safety Tips"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Image 3 */}

          <div className="max-w-xs md:max-w-sm">
            <img
              src={cs1}
              alt="Know Your Rights"
              className="rounded-lg shadow-lg w-full  "
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full">
          {/* Top Section */}
          <div
            className=" p-4 md:p-8 lg:p-12 flex justify-center items-center"
            style={{
              background:
                "linear-gradient(116.68deg, rgba(0, 41, 75, 0.32) 0%, rgba(23, 80, 84, 0.32) 11.96%, rgba(41, 110, 91, 0.32) 21.11%, rgba(68, 156, 101, 0.32) 30.52%, rgba(75, 169, 104, 0.32) 33.98%, rgba(83, 182, 107, 0.32) 42.46%, rgba(80, 176, 105, 0.32) 45.83%, rgba(72, 163, 102, 0.32) 52.76%, rgba(46, 120, 93, 0.32) 71.43%, rgba(29, 90, 86, 0.32) 83.59%, rgba(0, 41, 75, 0.32) 97.4%)",
            }}
          >
            {/* Centered Image */}
            <div className="flex justify-center items-center w-full">
              <img
                src={ord} // Replace with actual image link
                alt="Promotional Content"
                className="w-full max-w-lg md:max-w-3xl h-auto shadow-lg"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-[#00294B] text-white py-10 px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-around  font-nouvelr">
            <div>
              <h3 className="text-3xl font-bold mb-2 max-w-lg ">
                Download our programs <br className="md:block hidden" /> report
              </h3>
            </div>
            <div>
              <p className="text-gray-300 max-w-md mb-8">
                Young People’s Understanding and perspective of Online Safety in
                Nigeria.
              </p>
              <button className="bg-[#61CE70] hover:bg-green-600 text-white py-2 px-6 rounded-md shadow-md transition duration-300 underline">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-[#F9F9F9] px-4 py-8 md:py-16 font-josefin">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <p className="text-[#00294B] font-semibold mb-5 ">
              Reach Out to Us! We Are here to help you
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Talking helps! We're here for <br /> you. <br /> No problem is{" "}
              <span className="underline">too big</span> or small.
            </h2>
            <a
              href="tel:+2347072634282"
              className="text-[#8E3DFF] text-lg font-semibold underline hover:text-purple-700 transition duration-300"
            >
              Call our cyber360 helpline (toll free)
            </a>
            <p className="text-[#8E3DFF] text-2xl font-bold mt-2">
              +2347072634282
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={ctc}
              alt="Cyber360 HelpLine"
              className="w-full max-w-md h-auto "
            />
          </div>
        </div>
      </div>
      <section className="bg-white  h-20 md:h-30 w-full">
        {/* Content Placeholder */}
        <div className="flex justify-center items-center h-full"></div>
      </section>
    </div>
  );
};

export default Home;
