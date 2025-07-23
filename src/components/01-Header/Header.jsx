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
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header">
        <div className="logo">
          <h1>
            {t("site_name")}<span>{t("site_name_span")}</span>
          </h1>
          <p>{t("date_from")}</p>
        </div>
        <div className="button-row">
          <div className="link-container" onClick={() => scrollTo("about")}>{t("about")}</div>
          <div className="link-container" onClick={() => scrollTo("payments")}>{t("payment_systems")}</div>
          <div className="link-container" onClick={() => scrollTo("advantages")}>{t("advantages")}</div>
          <div className="link-container" onClick={() => scrollTo("companies")}>{t("companies")}</div>
          <div className="link-container" onClick={() => scrollTo("countries")}>{t("news")}</div>
          <div className="link-container" onClick={() => scrollTo("ratings")}>{t("ratings")}</div>
          <div className="link-container" onClick={() => scrollTo("contacts")}>{t("contacts")}</div>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
