import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "The Cyber Space Conference gave me the confidence to explore tech as a career. The hackathon was a game-changer for me.",
      author: "Chinonye, Online Safety Fellow",
    },
    {
      quote:
        "As a parent, I found the workshop invaluable. I learned how to guide my kids in using technology responsibly.",
      author: "Mrs. Okonkwo, Parent",
    },
    {
      quote:
        "Our school gained so much from the exhibition and workshops. The resources shared have transformed how we approach digital education.",
      author: "Mr. Adeyemi, Educator",
    },
    {
      quote:
        "The Cyber Space Conference gave me the confidence to explore tech as a career. The hackathon was a game-changer for me.",
      author: "Chinonye, Online Safety Fellow",
    },
    {
      quote:
        "As a parent, I found the workshop invaluable. I learned how to guide my kids in using technology responsibly.",
      author: "Mrs. Okonkwo, Parent",
    },
    {
      quote:
        "Our school gained so much from the exhibition and workshops. The resources shared have transformed how we approach digital education.",
      author: "Mr. Adeyemi, Educator",
    },
    {
      quote:
        "The Cyber Space Conference gave me the confidence to explore tech as a career. The hackathon was a game-changer for me.",
      author: "Chinonye, Online Safety Fellow",
    },
    {
      quote:
        "As a parent, I found the workshop invaluable. I learned how to guide my kids in using technology responsibly.",
      author: "Mrs. Okonkwo, Parent",
    },
    {
      quote:
        "Our school gained so much from the exhibition and workshops. The resources shared have transformed how we approach digital education.",
      author: "Mr. Adeyemi, Educator",
    },
    // Add more testimonials as needed
  ];

  return (
    <section
      className="py-20 bg-white"
      //   style={{
      //     background:
      //       "linear-gradient(116.68deg, rgba(0, 41, 75, 0.32) 0%, rgba(23, 80, 84, 0.32) 11.96%, rgba(41, 110, 91, 0.32) 21.11%, rgba(68, 156, 101, 0.32) 30.52%, rgba(75, 169, 104, 0.32) 33.98%, rgba(83, 182, 107, 0.32) 42.46%, rgba(80, 176, 105, 0.32) 45.83%, rgba(72, 163, 102, 0.32) 52.76%, rgba(46, 120, 93, 0.32) 71.43%, rgba(29, 90, 86, 0.32) 83.59%, rgba(0, 41, 75, 0.32) 97.4%)",
      //   }}
    >
      <div className="max-w-7xl mx-auto px-6 ">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-nouvelr text-center mb-8 text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Attendees Say
        </motion.h2>

        {/* Swiper for Horizontal Auto-Scroll */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Show 1 testimonial at a time on mobile
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll every 3 seconds
          loop={true} // Enable infinite loop
          breakpoints={{
            // Responsive breakpoints
            640: {
              slidesPerView: 2, // Show 2 testimonials on tablets
            },
            1024: {
              slidesPerView: 3, // Show 3 testimonials on desktops
            },
          }}
          className="w-full "
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-50 p-6 rounded- shadow-lg mb-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <p className="text-gray-600 font-lato mb-4">"{item.quote}"</p>
                <p className="text-purple-500 font-semibold">— {item.author}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
