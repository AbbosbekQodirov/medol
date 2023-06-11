import React from "react";
import Title from "../../components/title/Title";
import "./Company.css";
import Button from "../../components/btn/Button";
import { useTranslation } from "react-i18next";

function Company() {
  const { t } = useTranslation(["common"]);
  return (
    <div className="company">
      <Title title={t("О КОМПАНИИ")} />
      <div className=" container">
        <div className=" company_container">
          <div className="company_img">
            <img src="./assets/imgs/company_img.png" alt="" />
          </div>
          <div>
            {t(
              "Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО 'Medical Online Services'. Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан."
            )}
            <div className="company_btn">{t("Узнать больше")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
