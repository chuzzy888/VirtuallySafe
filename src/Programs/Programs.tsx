import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import pdg from "../assets/images/pdg.png";
import gog from "../assets/images/gog.png";
import lvp from "../assets/images/lvp.png";
import krs from "../assets/images/krs.png";
import tns from "../assets/images/tns.png";
import bmb from "../assets/images/bmb.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

interface Resource {
  id: string;
  title: string;
  coverImage: string;
  pdfUrl: string;
}

export default function Programs() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const q = query(
          collection(db, "resources"),
          where("page", "==", "Advocacy")
        );
        const querySnapshot = await getDocs(q);
        const resourcesList: Resource[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Resource[];
        setResources(resourcesList);
      } catch (error) {
        console.error("Error fetching parent resources:", error);
      }
    };
    fetchResources();
  }, []);

  return (
    <div>
      <section className="relative w-full py-20 h-auto md:py-22 flex items-center justify-center text-center text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Content */}
        <div className="relative max-w-3xl px-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-nouvelr leading-tigh mb-8">
            Program Reports: Insights and Impact
          </h1>

          <p className="mt-2 text-sm md:text-base text-gray-200">
            Our program reports offer a comprehensive overview of our
            initiatives, combining detailed analyses with clear summaries of our
            activities and measurable successes. Each report provides an
            in-depth look at our strategies, progress, and the real-world impact
            of our work, supported by key performance metrics. Explore our
            Programs Report to gain a deeper understanding of how we are driving
            positive change and achieving tangible results.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <a href="#program">
              <button className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-full transition-all duration-300 font-nouvelr shadow-lg">
                View Reports
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[gog, lvp, krs, tns, bmb, pdg].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Logo"
                className="h-10 grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      <div
        className="relative z-10 px-6 py-20  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        id="program"
      >
        <motion.div
          className="bg-white/10 backdrop-blur-xl border border-white/20 max-w-7xl mx-auto rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center font-nouvelr mb-8">
            Explore Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(showAll ? resources : resources.slice(0, 8)).map(
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
          {resources.length > 8 && (
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
      <section className="bg-white h-8 md:h-10 w-full"></section>
    </div>
  );
}
