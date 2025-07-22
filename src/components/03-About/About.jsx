import { useTranslation } from "react-i18next";
import "./About.css"
import laptop from "../../assets/images/laptop.svg";
import progress from "../../assets/images/progress.svg";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="about-main">
        <h1>
          {t("page_two.header_text1")}{" "}
          <span className="header-span">{t("page_two.header_span")}</span>{" "}
          {t("page_two.header_text2")}
        </h1>
        <p className="header-sub-text">{t("page_two.header_sub_text")}</p>
        <div className="offer-text-container">
          <div className="line"></div>
          <div className="offer-text-column">
            <p className="offer-text">{t("page_two.offer_text")}</p>
            <p className="offer-sub-text">{t("page_two.offer_sub_text")}</p>
          </div>
        </div>
        <div className="facts-container">
          <h1>{t("page_two.main_facts_header")}</h1>
          <img src={progress} alt="Progress" className="progress"/>
          <p className="schedule">24/7 <br/> <span>{t("page_two.time_schedule")}</span></p>
          <p className="experts">15+ <br/><span>{t("page_two.experts_count")}</span></p>
          <p className="countries"><span><span>89</span> {t("page_two.countries_count_1")}<br />{t("page_two.countries_count_2")}</span></p>
          <p className="projects"><span><span>&gt;100 </span>{t("page_two.projects_count")}<br/>{t("page_two.projects_count_2")}</span></p>
          <p className="years"><span>{t("page_two.years_1")} <span>2022</span> {t("page_two.years_2")}<br /></span><span>{t("page_two.years_3")}</span></p>
          <p className="logo-text">{t("site_name")}<span>{t("site_name_span")}</span></p>
          <img src={laptop} alt="Laptop" className="laptop"/>
        </div>
      </div>
    </div>
  )
}