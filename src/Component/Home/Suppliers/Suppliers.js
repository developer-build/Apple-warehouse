import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Suppliers.css";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  console.log(suppliers);
  useEffect(() => {
    fetch("faceData.json")
      .then((res) => res.json())
      .then((data) => setSuppliers(data));
  }, []);
  return (
    <div className="suppliers">
      <h2 className="text-center pb-5">Our best supplier of 2022</h2>
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 6,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
        >
          {suppliers.map((items) => (
            <SwiperSlide>
              <img src={items?.img} alt="" />
              <h4>{items?.name}</h4>
              <p>{items?.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Suppliers;
