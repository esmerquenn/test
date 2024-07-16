import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { usePostContactMutation } from "../api/slices/postContact";

function Contact() {
  const { t } = useTranslation();
  const [post] = usePostContactMutation();
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    text: "",
  });
  function takeFormValues(e) {
    const {name, value}= e.target
    setData((prev) => ({ ...prev, [name]: value }));
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    try {
      const response = await post(data);
      console.log("Contact form submitted:", response);
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };
  return (
    <section className="main-width form_width">
      <form className="contact_form" onSubmit={handleSubmit}>
        <span>
          <label htmlFor="ad">{t("name")}</label>
          <input
            onChange={takeFormValues}
            name="name"
            value={data.name}
            required
            pattern="[A-Za-z\s]+"
            title={t("check_name")}
            placeholder={t("nameMessage")}
            type="text"
          />
        </span>
        <span>
          <label htmlFor="mail">{t("email")}</label>
          <input
            onChange={takeFormValues}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title={t("check_mail")}
            name="email"
            value={data.email}
            required
            placeholder={t("emailMessage")}
            type="text"
          />
        </span>
        <span>
          <label htmlFor="phone">{t("phone")}</label>
          <input
            onChange={takeFormValues}
            pattern="\d{10,15}"
            title={t("check_phone")}
            name="phone"
            value={data.phone}
            required
            placeholder={t("phoneMessage")}
            type="text"
          />
        </span>
        <span>
          <label htmlFor="message"> {t("message")}</label>
          <input onChange={takeFormValues} name="text" value={data.text} required placeholder={t("messageMessage")} type="text" />
        </span>

        <button type="submit" className="contact_button">
          {t("request")}
        </button>
      </form>
    </section>
  );
}

export default Contact;
