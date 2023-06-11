import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css"
import { useTranslation } from "react-i18next";

function Navbar() {

   const { t, i18n } = useTranslation(["common"]);

  const handleSubmit = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("i18nextLng", e.target.value);
  };

  
 


  return (
    <div className="navbar container">
      <div className="nav">
        <div className="connect">
          <div>
            <div className="connect_icon">
              <img src="./assets/imgs/location.png" alt="" />
            </div>
            <div>
              {t("г.Ташкент, Чиланзар")} <br /> {t("10 квартал, дом")} 3/1
            </div>
          </div>
          <div>
            <div className="connect_icon">
              <img src="./assets/imgs/call.png" alt="" />
            </div>
            <div>
              +998 71 276-62-53 <br /> +998 71 276-62-54
            </div>
          </div>
        </div>
        <div className="logo">
          <img src="./assets/imgs/site_logo.png" alt="" />
        </div>
        <div className="form">
          <div>
            <img src="./assets/imgs/search_icon.png" alt="" />
          </div>
          <div>
            <img src="./assets/imgs/facebook_icon.png" alt="" />
            {t("Мы на Facebook")}
          </div>
          <div>
            {localStorage.getItem("i18nextLng") == "ru" && (
              <img src="./assets/imgs/rus_icon.png" alt="" />
            )}
            {localStorage.getItem("i18nextLng") == "uz" && (
              <img src="./assets/imgs/uz_icon.png" alt="" />
            )}

            <select
              onChange={handleSubmit}
              value={localStorage.getItem("i18nextLng")}
              name=""
              id=""
            >
              <option value="uz">uzbek</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </div>
      <div className="links">
        <NavLink to="/">{t("МАГАЗИН")}</NavLink>
        <NavLink to="/company">{t("О КОМПАНИИ")}</NavLink>
        <NavLink to="/products">{t("ПРОДУКЦИЯ")}</NavLink>
        <NavLink to="/service">{t("УСЛУГИ")}</NavLink>
        <NavLink to="/news">{t("АКЦИИ И НОВОСТИ")}</NavLink>
        <NavLink to="/feedback">{t("ОБРАТНАЯ СВЯЗЬ")}</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
