import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Header.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Button from "../btn/Button";
import { useTranslation } from "react-i18next";

export default function Header() {

  const { t, i18n } = useTranslation(["common"]);

  const [info, setInfo] = useState([{title:"Анализатор"}, {title:"Анализатор"}, {title:"Анализатор"}])

  return (
    <div className="container ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {info?.map((item)=>{
          return (
            <SwiperSlide>
              <div className="header">
                <div className="header_info">
                  <h1>
                    {t("Анализатор")}
                    <br /> ABL800 FLEX
                  </h1>
                  <p>
                    {t(
                      "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии"
                    )}
                  </p>
                  <Button name={t("Подробнее")} />
                </div>
                <div className="header_img">
                  <img src="./assets/imgs/header_img1.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        
        
      </Swiper>
    </div>
  );
}
