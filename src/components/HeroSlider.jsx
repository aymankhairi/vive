import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/heroslider.css";
function Heroslider() {
  const slides = [
    {
      id: 1,
      subtitle: "Introducing The New",
      title: "Vive Fashion",
      desc: "Style That Defines Your Personality",
      img: "/src/img/banner_Hero11.jpg",
    },
    {
      id: 2,
      subtitle: "Upgrade Your Look",
      title: "Premium Accessories",
      desc: "Details Makes The Difference",
      img: "/src/img/product1.jpg",
    },
    {
      id: 3,
      subtitle: "Feel The Comfort",
      title: "Modern Wear",
      desc: "Designed For Everyday Life",
      img: "/src/img/banner_Hero33.jpg",
    },
  ];
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="slide_wrapper">
                  {/* TEXT */}
                  <motion.div
                    className="contentos"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.h4
                      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {slide.subtitle}
                    </motion.h4>

                    <motion.h3
                      initial={{ opacity: 0, y: 30, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.35 }}
                    >
                      {slide.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {slide.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <Link to="/" className="btn">
                        Shop Now
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* IMAGE */}
                  <div className="image_wrapper">
                    <img src={slide.img} alt={slide.title} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <div className="content">
                <h4>Intorducing the new</h4>
                <h3>Vive Store</h3>
                <p>It's a Life not Just a Style</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_Hero11.jpg" alt="SliderHero1"></img>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Intorducing the new</h4>
                <h3>Vive Store</h3>
                <p>It's a Life not Just a Style</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/product1.jpg" alt="SliderHero2"></img>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Intorducing the new</h4>
                <h3>Vive Store</h3>
                <p>It's a Life not Just a Style</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_Hero33.jpg" alt="SliderHero3"></img>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Heroslider;
