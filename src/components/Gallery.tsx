import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Image = {
  src: string;
  alt: string;
};

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="max-w-7xl mx-auto mx-5 mt-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center h-80 md:h-[500px] bg-gray-100 rounded-md shadow-md"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover rounded-md transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
