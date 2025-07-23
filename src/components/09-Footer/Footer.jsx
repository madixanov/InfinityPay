import "./Footer.css"
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="nav-links-container">
            <div className="logo-container">
              <p className="logo-f">{t("site_name")}<span>{t("site_name_span")}</span></p>
              <p className="logo-f2">{t("sub_text")}</p>
            </div>
            <div className="left-cont">
              <p>{t("about")}</p>
              <p>{t("payment_systems")}</p>
              <p>{t("advantages")}</p>
            </div>
            <div className="right-cont">
              <p>{t("companies")}</p>
              <p>{t("news")}</p>
              <p>{t("ratings")}</p>
            </div>
            <div className="contact-cont">
              <button>{t("submit_text")}</button>
              <p>{t("email")}</p>
            </div>
          </div>
          <div className="rules-container">
            <p>{t("conditions")}</p>
            <p className="company-name">{t("company_name")}</p>
            <p>{t("rules")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}