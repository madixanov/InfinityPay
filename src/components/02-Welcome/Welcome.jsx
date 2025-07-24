import { useTranslation } from "react-i18next"
import "./Welcome.css";
import card from "../../assets/images/card.svg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for 
AOS.init();


export default function Welcome() {
  const { t } = useTranslation();

  return (
    <div className="card-container">
      <div className="welcome-page" id="welcome">
        <div className="container">
          <div className="welcome-main">
            <div className="text-container">
              <h1 data-aos="fade-up" data-aos-duration="1000"><span>{t("page_one.welcome_span")}</span><br />{t("page_one.welcome")}</h1>
              <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">{t("page_one.bridge")}</h3>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">{t("page_one.small_desc")}</p>
              <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">{t("submit_text")}</button>
            </div>
            <div className="photo-container">
            </div>
          </div>
        </div>
      </div>
      <div className="cards-wrapper">
        <img src={card} alt="Card Example" className="card-1"/>
        <img src={card} alt="Card Example" className="card-2"/>
      </div>
    </div>
  )
}