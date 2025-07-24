import { useTranslation } from "react-i18next";
import "./About.css"
import laptop from "../../assets/images/laptop.svg";
import progress from "../../assets/images/progress.svg";
import dot from "../../assets/icons/dot.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for 
AOS.init();


export default function About() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="about-main" id="about">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          {t("page_two.header_text1")}{" "}
          <span className="header-span">{t("page_two.header_span")}</span>{" "}
          {t("page_two.header_text2")}
        </h1>
        <p className="header-sub-text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">{t("page_two.header_sub_text")}</p>
        <div className="offer-text-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <div className="line"></div>
          <div className="offer-text-column">
            <p className="offer-text">{t("page_two.offer_text")}</p>
            <p className="offer-sub-text">{t("page_two.offer_sub_text")}</p>
          </div>
        </div>
        <div className="facts-container">
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">{t("page_two.main_facts_header")}</h1>
          <img src={progress} alt="Progress" className="progress" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500"/>
          <div className="facts-row">
            <div className="schedule" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="dot-outter">
                <img src={dot} alt="bullet" />
              </div>
              <p className="schedule-text" >24/7 <br/> <span>{t("page_two.time_schedule")}</span></p>
            </div>
            <div className="experts" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <div className="dot-outter">
                <img src={dot} alt="bullet" />
              </div>
              <p className="experts" >15+ <br/><span>{t("page_two.experts_count")}</span></p>
            </div>
            <div className="countries" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <div className="dot-outter">
                <img src={dot} alt="bullet" />
              </div>
              <p className="countries" ><span><span>89</span> {t("page_two.countries_count_1")}<br />{t("page_two.countries_count_2")}</span></p>
            </div>
            <div className="projects" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
              <div className="dot-outter">
                <img src={dot} alt="bullet" />
              </div>
              <p className="projects" ><span><span>&gt;100 </span>{t("page_two.projects_count")}<br/>{t("page_two.projects_count_2")}</span></p>
            </div>
            <div className="years" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
              <div className="dot-outter">
                <img src={dot} alt="bullet" />
              </div>
              <p className="years-text" ><span>{t("page_two.years_1")} <span>2022</span> {t("page_two.years_2")}<br /></span><span>{t("page_two.years_3")}</span></p>
            </div>
          </div>
          <p className="logo-text">{t("site_name")}<span>{t("site_name_span")}</span></p>
          <img src={laptop} alt="Laptop" className="laptop"/>
        </div>
      </div>
    </div>
  )
}