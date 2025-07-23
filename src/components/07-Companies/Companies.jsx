import "./Companies.css"
import { useTranslation } from "react-i18next";
import joystick from "../../assets/images/joystick.svg"
import laptop from "../../assets/images/laptop2.svg"
import graph from "../../assets/images/graph.svg"
import dice from "../../assets/images/dice.svg"

export default function Companies() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="companies-main">
        <h1>{t("page_six.header_text")}</h1>
        <div className="companies-grid">
          <div className="left-c-grid">
            <div className="digital-products">
              <h3>{t("page_six.digital_products.header_text")}</h3>
              <p>{t("page_six.digital_products.sub_text")}</p>
              <img src={joystick} alt="joystick" />
            </div>
          </div>
          <div className="right-c-grid">
            <div className="upper-grid">
              <div className="dating-sites">
                <h3>{t("page_six.dating_sites.header_text")}</h3>
                <p className="desc">{t("page_six.dating_sites.sub_text")}</p>
                <p className="logo-c">{t("site_name")}<span>{t("site_name_span")}</span></p>
                <img src={laptop} alt="laptop" />
              </div>
              <div className="investing-projects">
                <h3>{t("page_six.investing_projects.header_text")}</h3>
                <p>{t("page_six.investing_projects.sub_text")}</p>
                <img src={graph} alt="graph" />
              </div>
            </div>
            <div className="else">
              <h3>{t("page_six.else.header_text")}</h3>
              <div className="list-grid">
                <ul className="first">
                  <li>{t("page_six.else.ul_one.one")}</li>
                  <li>{t("page_six.else.ul_one.two")}</li>
                  <li>{t("page_six.else.ul_one.three")}</li>
                  <li>{t("page_six.else.ul_one.four")}</li>
                  <li>{t("page_six.else.ul_one.five")}</li>
                  <li>{t("page_six.else.ul_one.six")}</li>
                </ul>
                <ul className="second">
                  <li>{t("page_six.else.ul_two.one")}</li>
                  <li>{t("page_six.else.ul_two.two")}</li>
                  <li>{t("page_six.else.ul_two.three")}</li>
                  <li>{t("page_six.else.ul_two.four")}</li>
                  <li>{t("page_six.else.ul_two.five")}</li>
                  <li>{t("page_six.else.ul_two.six")}</li>
                </ul>
                <ul className="third">
                  <li>{t("page_six.else.ul_three.one")}</li>
                  <li>{t("page_six.else.ul_three.two")}</li>
                  <li>{t("page_six.else.ul_three.three")}</li>
                  <li>{t("page_six.else.ul_three.four")}</li>
                  <li>{t("page_six.else.ul_three.five")}</li>
                  <li>{t("page_six.else.ul_three.six")}</li>
                </ul>
              </div>
              <p>{t("page_six.else.sub_text")}</p>
              <img src={dice} alt="dice" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}