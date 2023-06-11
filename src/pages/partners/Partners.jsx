import React, { useState } from "react";
import "./Partners.css";
import Title from "../../components/title/Title";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, FreeMode, Navigation, Mousewheel, Keyboard } from "swiper";
import Button from "../../components/btn/Button";
import { useTranslation } from "react-i18next";

function Partners() {
  const { t } = useTranslation(["common"]);
  const [news, setNews] = useState([{
    one: "./assets/imgs/partner1.png",
    two: "./assets/imgs/partner2.png"
  }, {
    one: "./assets/imgs/partner3.png",
    two: "./assets/imgs/partner4.png"
  }, {
    one: "./assets/imgs/partner5.png",
    two: "./assets/imgs/partner6.png"
  }, {
    one: "./assets/imgs/partner7.png",
    two: "./assets/imgs/partner8.png"
  }, {
    one: "./assets/imgs/partner1.png",
    two: "./assets/imgs/partner2.png"
  }, {
    one: "./assets/imgs/partner3.png",
    two: "./assets/imgs/partner4.png"
  }, {
    one: "./assets/imgs/partner5.png",
    two: "./assets/imgs/partner6.png"
  }, {
    one: "./assets/imgs/partner7.png",
    two: "./assets/imgs/partner8.png"
  }]);
  return (
    <div className="partners">
      <Title title={t("ПАРТНЕРЫ")} />
      <div className="container">
        <Swiper
          slidesPerView={4}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination, Keyboard]}
          className="mySwiper"
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
        >
          {news?.map((item) => {
            return (
              <SwiperSlide>
                <div className="partners_slide">
                  <div className="partner">
                    <img src={item.one} alt="" />
                  </div>
                  <div className="partner">
                    <img src={item.two} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Partners;
