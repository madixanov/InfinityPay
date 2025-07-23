import "./Contacts.css"
import { useTranslation } from "react-i18next";
import phone from "../../assets/images/phone.svg"

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="contacts-page">
      <div className="container">
        <div className="contacts-main">
          <div className="c-text-container">
            <h1>{t("page_seven.header_text")}</h1>
            <p className="sub-text">{t("page_seven.sub_text")}</p>
            <p className="sub-text-span">{t("page_seven.sub_text_span")}</p>
            <div className="fields-row">
              <div className="name">
                <span>{t("page_seven.name_field")}</span>
                <input type="text" placeholder="Павел"/>
              </div>
              <div className="username">
                <span>{t("page_seven.tg_name")}</span>
                <input type="text" placeholder="@InfinityPay"/>
              </div>
            </div>
            <span className="email-label">{t("page_seven.email")}</span>
            <input type="email" placeholder="infinitypay@gmail.com" className="email"/>
            <button className="submit-btn">{t("page_seven.submit")}</button>
            <p className="rules">{t("page_seven.instructions_text")}</p>
          </div>
          <img src={phone} alt="phone" className="phone"/>
        </div>
      </div>
    </div>
  )
}