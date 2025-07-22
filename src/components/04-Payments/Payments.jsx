import "./Payments.css"
import { useTranslation } from "react-i18next";
import payments from "../../assets/images/payments.svg"

export default function Payments() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="payments-main">
        <h1>{t("page_three.header_text")}</h1>
        <div className="container-row">
          <div className="payment-container">
            <div className="container-header">
              <p>{t("page_three.south_america")}</p>
            </div>
            <img src={payments} alt="Payments" />
          </div>
          <div className="payment-container">
            <div className="container-header">
              <p>{t("page_three.asia")}</p>
            </div>
            <img src={payments} alt="Payments" />
          </div>
          <div className="payment-container">
            <div className="container-header">
              <p>{t("page_three.europe")}</p>
            </div>
            <img src={payments} alt="Payments" />
          </div>
          <div className="payment-container">
            <div className="container-header">
              <p>{t("page_three.cis_countries")}</p>
            </div>
            <img src={payments} alt="Payments" />
          </div>
          <div className="payment-container">
            <div className="container-header">
              <p>{t("page_three.russia")}</p>
            </div>
            <img src={payments} alt="Payments" />
          </div>
          <div className="payment-container">
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