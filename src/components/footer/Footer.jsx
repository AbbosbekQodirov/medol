import React, { useTransition } from 'react'
import "./Footer.css"
import Button from '../btn/Button';
import { useTranslation } from 'react-i18next';

function Footer() {
   const { t } = useTranslation(["common"]);
  return (
    <div className="footer">
      <div className="footer_container container">
        <div className="footer_left">
          <div>
            <li>
              <h2>{t("Контакты")}</h2>
            </li>
            <li>
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
                  <img src="./assets/imgs/mail.png" alt="" />
                </div>
                <div>info@medol.uz</div>
              </div>
            </li>
            <li>
              <div>
                <div className="connect_icon">
                  <img src="./assets/imgs/call.png" alt="" />
                </div>
                <div>
                  +998 71 276-62-53 <br /> +998 71 276-62-54
                </div>
              </div>
              <Button name={t("Узнать больше")} />
            </li>
          </div>
          <div className="footer_info">
            <img
              className="footer_logo"
              src="./assets/imgs/footer_logo.png"
              alt=""
            />
            <p>
              {t(
                "Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана."
              )}
            </p>
          </div>
        </div>
        <ul className="footer_right">
          <li>
            <h2>{t("О компании")}</h2>
            <a href="">{t("История")}</a>
            <br />
            <a href="">{t("Партнеры")}</a>
            <br />
            <a href="">{t("Вакансии")}</a>
            <br />
          </li>
          <li>
            <h2>{t("Продукция")}</h2>
            <a href="">{t("Эндоваскулярная хирургия")}</a>
            <br />
            <a href="">{t("Аритмология")}</a>
            <br />
            <a href="">{t("Кардиохирургия")}</a>
            <br />
            <a href="">{t("Лабораторная диагностика")}</a>
            <br />
            <a href="">{t("Хирургия")}</a>
            <br />
            <a href="">{t("Эндоурология")}</a>
            <br />
            <a href="">{t("Нейрохирургия")}</a>
            <br />
            <a href="">{t("Анестезиология и реанимация")}</a>
            <br />
            <a href="">{t("Диабет")}</a>
            <br />
          </li>
          <li>
            <h2>{t("Услуги")}</h2>
            <a href="">{t("Сервис")}</a>
            <br />
            <a href="">{t("Регистрации")}</a>
            <br />
            <a href="">{t("Услуги логистики")}</a>
            <br />
          </li>
        </ul>
      </div>
      <div className="footer_end container">
        <div>© 2021 ООО «Medical Online Services»</div>
        <div>
          {t("сайт готов")}: <span>abbosbekqodirov2501@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer