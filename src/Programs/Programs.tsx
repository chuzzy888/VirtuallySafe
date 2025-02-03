import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // import your Firebase setup
import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import adv from "../assets/images/adc.png";
import Layout from "../components/Layout";
import { MdKeyboardArrowRight } from "react-icons/md";

// Define the type for resources
interface Resource {
  id: string;
  title: string;
  coverImage: string;
  pdfUrl: string;
}
export default function Programs() {
  const [resources, setResources] = useState<Resource[]>([]); // Specify the type here

  useEffect(() => {
    // Fetch resources for parents from Firestore
    const fetchResources = async () => {
      try {
        // Query the 'resources' collection where page is 'parent'
        const q = query(
          collection(db, "resources"),
          where("page", "==", "Advocacy")
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
    <div>
      <div
        className="relative h-[300px] md:h-[500px] w-full bg-cover bg-center flex justify-center items-center font-josefin"
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
            Explore our Programs Report
          </p>

          {/* Title */}
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed lg:leading-tight mb-6 max-w-4xl mx-auto font-lato">
            Virtual Safety Resources: Tips and tools for young people, parents,
            and educators to navigate and stay safe online.
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
      <section className="bg-[#00294B]  h-8 md:h-10 w-full"></section>

      <section className="px-6 md:px-12 py-12 bg-[#F9F9F9] ">
        <Layout>
          <h2 className="text-3xl font-bold text-[#00294B] font-nouvelr mb-8">
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
                      className="text-green-600 font-medium flex items-center mt-4 hover:underline font-nouvelr"
                      target="_blank"
                    >
                      Learn More
                      <MdKeyboardArrowRight size={20} />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-4">Loading resources...</p>
            )}
          </div>
        </Layout>
      </section>
      <section className="bg-white  h-8 md:h-10 w-full"></section>
    </div>
  );
}
