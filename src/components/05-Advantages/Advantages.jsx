import "./Advantages.css"
import { useTranslation } from "react-i18next";
import growth from "../../assets/icons/growth.svg"
import milestone from "../../assets/icons/milestone.svg"
import quality from "../../assets/icons/quality.svg"
import objective from "../../assets/icons/objective.svg"

export default function Advantages() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="advantages-main">
        <h1>{t("page_four.header_text")}</h1>
        <p>{t("page_four.header_sub_text")}</p>
        <div className="advantages-grid">
          <div className="left-grid">
            <div className="innovations">
              <h3>{t("page_four.innovations.header_text")}</h3>
              <p>{t("page_four.innovations.sub_text")} <span>{t("page_four.innovations.sub_text_span")}</span></p>
              <img src={growth} alt="growth" className="icon"/>
            </div>
            <div className="geography">
              <h3>{t("page_four.geography.header_text")}</h3>
              <p>{t("page_four.geography.sub_text")} <span>{t("page_four.geography.sub_text_span")}</span></p>
              <img src={milestone} alt="milestone" className="icon"/>
            </div>
          </div>
          <div className="right-grid">
            <div className="safety">
              <h3>{t("page_four.safety.header_text")}</h3>
              <p>{t("page_four.safety.sub_text")} <span>{t("page_four.safety.sub_text_span")}</span></p>
              <img src={quality} alt="quality" className="icon"/>
            </div>
            <div className="personal_work">
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