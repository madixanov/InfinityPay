import "./Contacts.css"
import { useTranslation } from "react-i18next";
import phone from "../../assets/images/phone.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for 
AOS.init();

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="contacts-page" id="contacts">
      <div className="container">
        <div className="contacts-main">
          <div className="c-text-container">
            <h1 data-aos="fade-up" data-aos-duration="1000">{t("page_seven.header_text")}</h1>
            <p className="sub-text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">{t("page_seven.sub_text")}</p>
            <p className="sub-text-span" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">{t("page_seven.sub_text_span")}</p>
            <div className="fields-row">
              <div className="name" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <span>{t("page_seven.name_field")}</span>
                <input type="text" placeholder="Павел"/>
              </div>
              <div className="username" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <span>{t("page_seven.tg_name")}</span>
                <input type="text" placeholder="@InfinityPay"/>
              </div>
            </div>
            <span className="email-label" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">{t("page_seven.email")}</span>
            <input type="email" placeholder="infinitypay@gmail.com" className="email" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"/>
            <button className="submit-btn" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">{t("page_seven.submit")}</button>
            <p className="rules" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">{t("page_seven.instructions_text")}</p>
          </div>
          <div className="phone-container">
            <div className="inner-p-container"></div>
            <img src={phone} alt="phone" className="phone"/>
          </div>
        </div>
      </div>
    </div>
  )
}