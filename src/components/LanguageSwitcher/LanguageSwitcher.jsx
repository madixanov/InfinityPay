import { useTranslation } from "react-i18next";
import "../01-Header/Header.css"

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng) => {
    if (currentLang !== lng) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <div className="lang-container">
      <div
        className={`lang-item ${currentLang === "ru" ? "active" : ""}`}
        onClick={() => changeLanguage("ru")}
      >
        RU
      </div>
      <div className="divider">|</div>
      <div
        className={`lang-item ${currentLang === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </div>
    </div>
  );
};

export default LanguageSwitcher;
