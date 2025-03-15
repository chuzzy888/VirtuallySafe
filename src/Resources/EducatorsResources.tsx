import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // import your Firebase setup

import { motion } from "framer-motion";

import { MdKeyboardArrowRight } from "react-icons/md";
import Logo from "../components/Logo";

// Define the type for resources
interface Resource {
  id: string;
  title: string;
  coverImage: string;
  pdfUrl: string;
}

export default function EducatorsResources() {
  const [resources, setResources] = useState<Resource[]>([]); // Specify the type here
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Fetch resources for parents from Firestore
    const fetchResources = async () => {
      try {
        // Query the 'resources' collection where page is 'parent'
        const q = query(
          collection(db, "resources"),
          where("page", "==", "Educator")
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
      <section className="relative bg-gray-900 text-white py-20">
        <div className=" mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg">
              <img
                src="https://res.cloudinary.com/karotcloud/image/upload/v1740598943/IMG_1697_le3hpb.jpg"
                alt="Mission banner"
                className="w-full rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 border-4 border-green-400 rounded-lg transform -rotate-6"></div>

              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-lg"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 max-w-xl">
            <p className="text-green-400 text-sm md:text-2xl font-semibold uppercase tracking-wide font-nouvelr">
              Educators Resources
            </p>
            <h1 className="text-xl md:text-2xl  leading-tight font-nouvelr">
              Virtual safety resources tips and tools for educators to navigate
              and stay safe online.{" "}
            </h1>
            <p className="text-gray-300 text-lg font-lato">
              Access expert advice, online safety tips, and essential tools to
              help teachers and educators navigate the digital world safely.
            </p>
            <div>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-5 rounded-xl shadow-lg transition-all hover:scale-105 font-lato">
                Explore Resources
              </button>
            </div>
          </div>
        </div>
      </section>
      <Logo />

      <div
        className="relative z-10 px-6 py-5  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        id="program"
      >
        <motion.div
          className=" max-w-7xl mx-auto rounded-2xl  md:p-12 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center font-nouvelr mb-8">
            Explore Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(showAll ? resources : resources.slice(0, 4)).map(
              (resource, index) => (
                <motion.div
                  key={index}
                  className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={resource.coverImage}
                    alt={resource.title}
                    className="h-40 w-full object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2 truncate">
                    {resource.title.length > 30
                      ? `${resource.title.slice(0, 30)}...`
                      : resource.title}
                  </h3>
                  {resource.title.length > 20 && (
                    <button
                      className="text-blue-300 hover:text-blue-400 font-semibold text-sm mb-2"
                      onClick={() => alert(resource.title)}
                    >
                      See More
                    </button>
                  )}
                  <div className="mt-auto flex justify-center">
                    <motion.a
                      href={resource.pdfUrl}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                      <MdKeyboardArrowRight size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              )
            )}
          </div>
          {resources.length > 4 && (
            <div className="mt-6 flex justify-center">
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="bg-white/30 hover:bg-white/40 text-white font-semibold py-2 px-6 rounded-full transition-all shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAll ? "Show Less" : "View All"}
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
