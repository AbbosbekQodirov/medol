import React, { useState } from "react";
import "./Products.css";
import Title from "../../components/title/Title";
import Button from "../../components/btn/Button";
import { useTranslation } from "react-i18next";
function Products() {
  const [cards, setCards] = useState([
    { img: "./assets/imgs/card_img1.png", title: "Эндоваскулярная хирургия"},
    { img: "./assets/imgs/card_img2.png", title: "Лабораторная диагностика" },
    { img: "./assets/imgs/card_img3.png", title: "Кардиохирургия" },
    { img: "./assets/imgs/card_img4.png", title: "ДИАБЕТ" },
    { img: "./assets/imgs/card_img5.png", title: "ЭНДОУРОЛОГИЯ" },
    { img: "./assets/imgs/card_img6.png", title: "АРИТМОЛОГИЯ" },
  ]);

  const { t } = useTranslation(["common"]);

  return (
    <div className="products">
      <div className="container">
        <Title title={t("ПРОДУКЦИЯ")} />
        <div className="cards">
          {cards?.map((item) => {
            return (
              <div className="card">
                <div className="card_img">
                  <img src={item.img} alt="" />
                </div>
                <h3>{t(item.title).toUpperCase()}</h3>
                <Button name={t("Посмотреть все")} />
              </div>
            );
          })}
          <div className="products_btn">
            {t("Перейти в каталог нашей продукции")}
            <img src="./assets/imgs/product_row.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
