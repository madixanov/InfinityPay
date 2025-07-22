import { useTranslation } from "react-i18next";
import "./About.css"

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
      </div>
    </div>
  )
}