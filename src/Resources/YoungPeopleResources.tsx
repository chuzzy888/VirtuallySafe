import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // import your Firebase setup
import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import ypr from "../assets/images/DSC_0089.jpg";
import omr from "../assets/images/ypr.jpg";
import gp from "../assets/images/gp.png";
import g2 from "../assets/images/g1.jpg";
import g1 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";
import g4 from "../assets/images/g4.jpg";
import Gallery from "../components/Gallery";

import Layout from "../components/Layout";

// Define the type for resources
interface Resource {
  id: string;
  title: string;
  coverImage: string;
  pdfUrl: string;
}

const images = [
  { src: g1, alt: "Placeholder 1" },
  { src: g2, alt: "Placeholder 2" },
  { src: g3, alt: "Placeholder 3" },
  { src: g4, alt: "Placeholder 4" },
];

export default function YoungPeopleResources() {
  const [resources, setResources] = useState<Resource[]>([]); // Specify the type here

  useEffect(() => {
    // Fetch resources for parents from Firestore
    const fetchResources = async () => {
      try {
        // Query the 'resources' collection where page is 'parent'
        const q = query(
          collection(db, "resources"),
          where("page", "==", "child")
        );
        const querySnapshot = await getDocs(q);

        const resourcesList: Resource[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Resource[]; // Ensure the data is cast to the Resource type

        setResources(resourcesList);
      } catch (error) {
        console.error("Error fetching parent resources:", error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="font-josefin">
      <div
        className="relative h-[300px] md:h-[600px] w-full bg-cover bg-center flex justify-center items-center font-josefin"
        style={{
          backgroundImage: `url(${ypr})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <p className="text-green-400 text-lg md:text-xl font-semibold mb-3">
            Young People Resources
          </p>
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Virtual Safety Resources: Tips and tools for young people to
            navigate and stay safe online.
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
      <section
        className="px-6 md:px-12 py-12 "
        style={{
          background:
            "linear-gradient(116.68deg, rgba(0, 41, 75, 0.32) 0%, rgba(23, 80, 84, 0.32) 11.96%, rgba(41, 110, 91, 0.32) 21.11%, rgba(68, 156, 101, 0.32) 30.52%, rgba(75, 169, 104, 0.32) 33.98%, rgba(83, 182, 107, 0.32) 42.46%, rgba(80, 176, 105, 0.32) 45.83%, rgba(72, 163, 102, 0.32) 52.76%, rgba(46, 120, 93, 0.32) 71.43%, rgba(29, 90, 86, 0.32) 83.59%, rgba(0, 41, 75, 0.32) 97.4%)",
        }}
      >
        {/* <Layout> */}
        <h2 className="text-3xl font-bold text-gray-800  mb-8">
          Explore Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.length > 0 ? (
            resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={resource.coverImage || "fb.png"} // Add a fallback image if no image is available
                  alt={resource.title}
                  className="w-full h-86 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>

                  <a
                    href={resource.pdfUrl}
                    target="_blank"
                    className="block mt-3 text-green-600 hover:underline font-medium flex gap-1 underline "
                  >
                    See More
                    <img src={gp} alt="" className="h-5" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4">Loading resources...</p>
          )}
        </div>
        {/* </Layout> */}
      </section>
      <section className="bg-white  h-20 md:h-30 w-full">
        {/* Content Placeholder */}
        <div className="flex justify-center items-center h-full"></div>
      </section>
      <section className="w-full">
        {/* Mission Statement Section */}
        <div className="bg-[#851FEC] ">
          <Layout>
            <div className="text-white py-12 px-6 md:flex md:justify-around md:items-center">
              <h2 className="text-2xl md:text-5xl font-semibold max-w-3xl">
                Our mission is to improve digital safety for internet users.
              </h2>
              <img
                src={omr}
                alt="Mission banner"
                className="mt-6 md:mt-0 md:w-1/3 rounded-lg shadow-lg"
              />
            </div>
          </Layout>
        </div>
        <h2 className="text-[#61CE70] text-center font-semibold text-lg md:text-xl mb-6 my-5 uppercase tracking-wider underline decoration-2">
          Our gallery
        </h2>{" "}
        <Gallery images={images} />
      </section>
    </div>
  );
}
