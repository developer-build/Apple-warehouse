import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Suppliers.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import facebookIcon from "../../../Assets/Icons/facebook.png";
import instagramIcon from "../../../Assets/Icons/instragram.png";
import twitterIcon from "../../../Assets/Icons/twitter.png";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  console.log(suppliers);
  useEffect(() => {
    fetch(" https://intense-dusk-83706.herokuapp.com/supplier")
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
              <p>
                {items?.description}
                <div className="d-flex justify-content-center align-items-center">
                  <img style={{ width: "20px" }} src={facebookIcon} alt="" />
                  <img
                    className="mx-2"
                    style={{ width: "20px" }}
                    src={instagramIcon}
                    alt=""
                  />

                  <img style={{ width: "20px" }} src={twitterIcon} alt="" />
                </div>
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Suppliers;
