import "./Payments.css"
import { useTranslation } from "react-i18next";
import payments from "../../assets/images/payments.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for 
AOS.init();


export default function Payments() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="payments-main" id="payments">
        <h1 data-aos="fade-up" data-aos-duration="1000">{t("page_three.header_text")}</h1>
        <div className="container-row">
          <div className="payment-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="container-header">
              <p>{t("page_three.south_america")}</p>
            </div>
            <img src={payments} alt="Payments" />
          </div>
          <div className="payment-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className="container-header">
              <p>{t("page_three.asia")}</p>
            </div>
            <img src={payments} alt="Payments" />
          </div>
          <div className="payment-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <div className="container-header">
              <p>{t("page_three.europe")}</p>
            </div>
            <img src={payments} alt="Payments" />
          </div>
          <div className="payment-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
            <div className="container-header">
              <p>{t("page_three.cis_countries")}</p>
            </div>
            <img src={payments} alt="Payments" />
          </div>
          <div className="payment-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
            <div className="container-header">
              <p>{t("page_three.russia")}</p>
            </div>
            <img src={payments} alt="Payments" />
          </div>
          <div className="payment-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
            <div className="container-header">
              <p>{t("page_three.africa")}</p>
            </div>
            <img src={payments} alt="Payments" />
          </div>
        </div>
      </div>
    </div>
  )
}