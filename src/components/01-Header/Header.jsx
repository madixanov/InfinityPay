import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Header.css";

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false); // Закрыть меню после перехода
    }
  };

  useEffect(() => {
        if (mobileMenuOpen) {
            document.body.classList.add("no-scroll");
            document.documentElement.classList.add("no-scroll"); // <html>
        } else {
            document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
        };
    }, [mobileMenuOpen]);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="container">
              <div className="header">
                <div className="logo">
                  <h1>
                    {t("site_name")}<span>{t("site_name_span")}</span>
                  </h1>
                  <p>{t("date_from")}</p>
                </div>

                {/* Десктопная навигация */}
                <div className="button-row desktop-only">
                  <div className="link-container" onClick={() => scrollTo("about")}>{t("about")}</div>
                  <div className="link-container" onClick={() => scrollTo("payments")}>{t("payment_systems")}</div>
                  <div className="link-container" onClick={() => scrollTo("advantages")}>{t("advantages")}</div>
                  <div className="link-container" onClick={() => scrollTo("companies")}>{t("companies")}</div>
                  <div className="link-container" onClick={() => scrollTo("countries")}>{t("news")}</div>
                  <div className="link-container" onClick={() => scrollTo("ratings")}>{t("ratings")}</div>
                  <div className="link-container" onClick={() => scrollTo("contacts")}>{t("contacts")}</div>
                </div>
                <LanguageSwitcher />

                {/* Мобильная часть */}
                <div className="mobile-controls mobile-only">
                  <div className="burger-menu" onClick={() => setMobileMenuOpen(prev => !prev)}>
                    <span className={mobileMenuOpen ? "open" : ""}></span>
                    <span className={mobileMenuOpen ? "open" : ""}></span>
                    <span className={mobileMenuOpen ? "open" : ""}></span>
                  </div>
                </div>
              </div>

              {/* Мобильное выпадающее меню */}
              {mobileMenuOpen && (
                <div className="mobile-menu mobile-only">
                  <div onClick={() => scrollTo("about")}>{t("about")}</div>
                  <div onClick={() => scrollTo("payments")}>{t("payment_systems")}</div>
                  <div onClick={() => scrollTo("advantages")}>{t("advantages")}</div>
                  <div onClick={() => scrollTo("companies")}>{t("companies")}</div>
                  <div onClick={() => scrollTo("countries")}>{t("news")}</div>
                  <div onClick={() => scrollTo("ratings")}>{t("ratings")}</div>
                  <div onClick={() => scrollTo("contacts")}>{t("contacts")}</div>
                </div>
              )}
      </div>
    </header>
  );
}
