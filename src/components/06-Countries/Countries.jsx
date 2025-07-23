import "./Countries.css";
import { useTranslation } from "react-i18next";

import russia from "../../assets/flags/russia.svg";
import usa from "../../assets/flags/usa.svg";
import uk from "../../assets/flags/uk.svg";
import germany from "../../assets/flags/germany.svg";
import china from "../../assets/flags/china.svg";
import france from "../../assets/flags/france.svg";
import thailand from "../../assets/flags/thailand.svg";
import spain from "../../assets/flags/spain.svg";
import vietnam from "../../assets/flags/vietnam.svg";
import chile from "../../assets/flags/chile.svg";
import singapore from "../../assets/flags/singapore.svg";
import columbia from "../../assets/flags/columbia.svg";
import canada from "../../assets/flags/canada.svg";

export default function Countries() {
  const { t } = useTranslation();

  const firstRow = [
    { key: "russia", src: russia },
    { key: "usa", src: usa },
    { key: "uk", src: uk },
    { key: "germany", src: germany },
    { key: "china", src: china },
    { key: "france", src: france },
    { key: "japan", custom: true },
  ];

  const secondRow = [
    { key: "thailand", src: thailand },
    { key: "spain", src: spain },
    { key: "vietnam", src: vietnam },
    { key: "chile", src: chile },
    { key: "singapore", src: singapore },
    { key: "columbia", src: columbia },
    { key: "canada", src: canada },
  ];

  const renderRow = (row) =>
  [...row, ...row, ...row, ...row, ...row].map((country, index) => ( // 3 копии вместо 2
    <div className="country" key={`${country.key}-${index}`}>
      {country.custom ? (
        <div className="japan">
          <div className="inner-circle"></div>
        </div>
      ) : (
        <img src={country.src} alt={country.key} />
      )}
      <p>{t(`page_five.countries.${country.key}`)}</p>
    </div>
  ));

  return (
    <div className="countries-main">
      <div className="container">
        <div className="countries-text">
          <h1>{t("page_five.header_text")}</h1>
          <h3>{t("page_five.header_sub_text")}</h3>
          <p>
            {t("page_five.secondary_text")}{" "}
            <span>{t("page_five.secondary_text_span")}</span>
          </p>
        </div>
      </div>

      <div className="countries-scroll-container">
        <div className="scroll-wrapper scroll-left">
          <div className="countries-row">{renderRow(firstRow)}</div>
        </div>
        <div className="scroll-wrapper scroll-right">
          <div className="countries-row">{renderRow(secondRow)}</div>
        </div>
        <div className="scroll-wrapper scroll-left">
          <div className="countries-row">{renderRow(firstRow)}</div>
        </div>
        <div className="scroll-wrapper scroll-right">
          <div className="countries-row">{renderRow(secondRow)}</div>
        </div>
      </div>
    </div>
  );
}
