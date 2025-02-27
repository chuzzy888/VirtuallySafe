import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Fade effect for smooth transitions

const Gallery = ({ images }) => {
  return (
    <div className="relative max-w-screen-xl mx-auto h-[500px] md:h-[650px] py-10 px-6 md:px-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0} // No gap for seamless transition
        slidesPerView={1} // One slide at a time for professional look
        effect="fade" // Smooth fade transition
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl"></div>{" "}
              {/* Optional overlay */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
