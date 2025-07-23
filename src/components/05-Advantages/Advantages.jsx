import "./Advantages.css"
import { useTranslation } from "react-i18next";
import growth from "../../assets/icons/growth.svg"
import milestone from "../../assets/icons/milestone.svg"
import quality from "../../assets/icons/quality.svg"
import objective from "../../assets/icons/objective.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for 
AOS.init();

export default function Advantages() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="advantages-main" id="advantages">
        <h1 data-aos="fade-up" data-aos-duration="1000">{t("page_four.header_text")}</h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">{t("page_four.header_sub_text")}</p>
        <div className="advantages-grid">
          <div className="left-grid">
            <div className="innovations" data-aos="fade-down-right" data-aos-duration="1000" data-aos-delay="200">
              <h3>{t("page_four.innovations.header_text")}</h3>
              <p>{t("page_four.innovations.sub_text")} <span>{t("page_four.innovations.sub_text_span")}</span></p>
              <img src={growth} alt="growth" className="icon"/>
            </div>
            <div className="geography" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="300">
              <h3>{t("page_four.geography.header_text")}</h3>
              <p>{t("page_four.geography.sub_text")} <span>{t("page_four.geography.sub_text_span")}</span></p>
              <img src={milestone} alt="milestone" className="icon"/>
            </div>
          </div>
          <div className="right-grid">
            <div className="safety" data-aos="fade-down-left" data-aos-duration="1000" data-aos-delay="400">
              <h3>{t("page_four.safety.header_text")}</h3>
              <p>{t("page_four.safety.sub_text")} <span>{t("page_four.safety.sub_text_span")}</span></p>
              <img src={quality} alt="quality" className="icon"/>
            </div>
            <div className="personal_work" data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="500">
              <h3>{t("page_four.personal_work.header_text")}</h3>
              <p>{t("page_four.personal_work.sub_text")} <span>{t("page_four.personal_work.sub_text_span")}</span></p>
              <img src={objective} alt="objective" className="icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}