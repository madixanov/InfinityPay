import "./Footer.css"
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 100; // пиксели отступа сверху
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

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
              <p onClick={() => scrollTo("about")}>{t("about")}</p>
              <p onClick={() => scrollTo("payments")}>{t("payment_systems")}</p>
              <p onClick={() => scrollTo("advantages")}>{t("advantages")}</p>
            </div>
            <div className="right-cont">
              <p onClick={() => scrollTo("companies")}>{t("companies")}</p>
              <p onClick={() => scrollTo("countries")}>{t("news")}</p>
              <p onClick={() => scrollTo("ratings")}>{t("ratings")}</p>
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