import React, { useState } from "react";
import Title from "../../components/title/Title";
import Button from "../../components/btn/Button";

import "./Service.css";
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation(["common"]);
  const [srvices, setServices] = useState([
    {
      img: "./assets/imgs/service1.png",
      title: "СЕРВИС ОБОРУДОВАНИЯ",
      desc: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей",
    },
    {
      img: "./assets/imgs/service2.png",
      title: "РЕГИСТРАЦИИ",
      desc: "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению",
    },
    {
      img: "./assets/imgs/service3.png",
      title: "УСЛУГИ ЛОГИСТИКИ",
      desc: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей",
    },
  ]);
  return (
    <div>
      <Title title={t("УСЛУГИ")} />
      <div className="services">
        <div className="services_container container">
          {srvices?.map((item) => {
            return (
              <div className="service">
                <img src={item.img} alt="" />
                <h3>{t(item.title)}</h3>
                <p>{t(item.desc)}.....</p>
                <Button name={t("Подробнее")} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;
