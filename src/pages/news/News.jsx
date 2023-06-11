import React, { useState } from "react";
import "./News.css";
import Title from "../../components/title/Title";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {
  Pagination,
  Autoplay,
  FreeMode,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper";
import Button from "../../components/btn/Button";
import { useTranslation } from "react-i18next";

function News() {
  const { t } = useTranslation(["common"]);
  const [news, setNews] = useState([{}, {}, {}, {}]);
  return (
    <div className="news">
      <Title title={t("НОВОСТИ")} />
      <div className="news_container container">
        <>
          <Swiper
            slidesPerView={3}
            // cssMode={true}
            navigation={true}
            // pagination={true}
            modules={[Autoplay, Navigation, Pagination, Keyboard]}
            className="mySwiper"
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            // slidesPerView={3}
            // spaceBetween={30}
            // freeMode={true}
            // navigation={true}
            // pagination={{
            //   clickable: true,
            // }}
            // modules={[FreeMode, Pagination, Navigation]}
            // className="mySwiper"
          >
            {news?.map(() => {
              return (
                <SwiperSlide>
                  <div className="new">
                    <img src="./assets/imgs/new_img.png" alt="" />
                    <h3>
                      {t(
                        "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича"
                      )}
                    </h3>
                    <b>26.07.2021</b>
                    <p>
                      {t(
                        "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении"
                      )}
                      ...
                    </p>
                    <Button name={t("Подробнее")} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="btns">
            <div className="slider_btn">
              {t("Посмотреть все новости")}{" "}
              <img src="./assets/imgs/row.png" alt="" />
            </div>
            <div className="slider_btn">
              {t("Подписаться на новости")}{" "}
              <img src="./assets/imgs/row2.png" alt="" />
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default News;
