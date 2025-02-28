import { motion } from "framer-motion";

import scts from "../assets/images/abts.jpg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/swiper-bundle.css";

const banners = [
  {
    id: 1,
    url: "https://res.cloudinary.com/karotcloud/image/upload/v1740664273/MacBook_Pro_14__-_21_z9y0w3.png",
    alt: "Banner 1",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/karotcloud/image/upload/v1740664275/MacBook_Pro_14__-_22_f40ufs.png",
    alt: "Banner 2",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/karotcloud/image/upload/v1740664278/MacBook_Pro_14__-_24_abraie.png",
    alt: "Banner 3",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/karotcloud/image/upload/v1740664279/MacBook_Pro_14__-_23_jd5jpu.png",
    alt: "Banner 4",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/karotcloud/image/upload/v1740664279/MacBook_Pro_14__-_23_jd5jpu.png",
    alt: "Banner 5",
  },
];

import Gallery from "../components/Gallery";
export default function AwarenessCampaign() {
  const [activeBanner, setActiveBanner] = useState(banners[0].url);

  const images = [
    "https://res.cloudinary.com/karotcloud/image/upload/v1740603287/IMG_1273_rjwfqu.jpg",
    scts,
  ];
  return (
    <div>
      <div className="bg-white text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 mb-10 bg-gradient-to-br from-[#4B0082] via-[#00294B] to-[#61CE70] overflow-hidden">
          {/* Animated Background Shapes */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute top-20 left-20 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-2xl"
              animate={{
                x: [0, 20, 0],
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-2xl"
              animate={{
                x: [0, -20, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.div>

          {/* Content Container */}
          <div className="max-w-7xl mx-auto px-6 text-center relative z-20">
            <motion.h1
              className="text-5xl md:text-6xl font-bold font-nouvelr mb-6 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Awareness and Campaigns
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 font-lato max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Protecting Young Minds Online
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-200 font-lato max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Virtually Safe, our core mission is to drive awareness and
              campaigns that educate young people on navigating the digital
              world safely. Join us in fostering a safer internet where young
              minds can thrive without fear.
            </motion.p>
            <motion.a
              href="#get-involved"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl text-lg font-nouvelr whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
            </motion.a>
          </div>
        </section>
        <section className="w-full flex flex-col items-center py-10 relative">
          {/* Main Banner */}
          <div className="relative w-full max-w-7xl mx-5 md:mx-10 lg:mx-20">
            <div className="absolute inset-0 border-8 md:border-12 border-white/20 rounded-3xl pointer-events-none"></div>
            <div className="relative overflow-hidden ">
              <img
                src={activeBanner}
                alt="Selected Banner"
                className="w-full h-auto max-h-[500px] object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <Swiper
            modules={[Navigation, Thumbs]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            className="w-full max-w-7xl mt-6"
          >
            {banners.map(banner => (
              <SwiperSlide
                key={banner.id}
                onClick={() => setActiveBanner(banner.url)}
              >
                <img
                  src={banner.url}
                  alt={banner.alt}
                  className="w-full h-42 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <div className="bg-gray-900">
          <motion.h2
            className="text-3xl font-semibold pt-8 font-nouvelr text-[#61CE70] text-center "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Highlights{" "}
          </motion.h2>
          <Gallery images={images} />
        </div>
      </div>
    </div>
  );
}
