import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Header.css";

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header">
        <div className="logo">
          <h1>
            {t("site_name")}<span>{t("site_name_span")}</span>
          </h1>
          <p>{t("date_from")}</p>
        </div>
        <div className="button-row">
          <div className="link-container">{t("about")}</div>
          <div className="link-container">{t("payment_systems")}</div>
          <div className="link-container">{t("advantages")}</div>
          <div className="link-container">{t("companies")}</div>
          <div className="link-container">{t("news")}</div>
          <div className="link-container">{t("ratings")}</div>
          <div className="link-container">{t("contacts")}</div>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
