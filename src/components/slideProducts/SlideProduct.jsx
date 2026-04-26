import React from "react";
import Product from "./Product";
import "../../css/slideProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1], // smooth cubic bezier
    },
  },
};
function SlideProduct({ data, title }) {
  return (
    <div className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p></p>
        </div>
        <Swiper
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide>
                <motion.div variants={itemVariants}>
                  <Product item={item} />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
