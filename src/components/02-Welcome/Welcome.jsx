import { useTranslation } from "react-i18next"
import "./Welcome.css";
import card from "../../assets/images/card.svg";

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <div className="welcome-page">
      <div className="container">
        <div className="welcome-main">
          <div className="text-container">
            <h1><span>{t("page_one.welcome_span")}</span><br />{t("page_one.welcome")}</h1>
            <h3>{t("page_one.bridge")}</h3>
            <p>{t("page_one.small_desc")}</p>
            <button>{t("submit_text")}</button>
          </div>
          <div className="photo-container">
            <img src={card} alt="Card Example" className="card-1"/>
            <img src={card} alt="Card Example" className="card-2"/>
          </div>
        </div>
      </div>
    </div>
  )
}