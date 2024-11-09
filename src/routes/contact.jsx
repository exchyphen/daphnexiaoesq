import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import "./contact.css";

const Contact = () => {
  const location = useLocation();

  const language =
    location.state && location.state.language
      ? location.state.language
      : "English";

  // states
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const [contactSuccess, setContactSuccess] = useState(false);

  /* helper functions */
  function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
  }

  function isPhoneNumber(input) {
    if (input.length !== 10) {
      return false;
    }

    return !isNaN(input);
  }

  // send data
  const handleSubmit = (event) => {
    event.preventDefault();

    // validation
    if (name.length === 0) {
      setNameError(true);
      return;
    }
    setNameError(false);

    if (!isEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    if (!isPhoneNumber(phoneNumber)) {
      setPhoneNumberError(true);
      return;
    }
    setPhoneNumberError(false);

    if (message.length === 0) {
      setMessageError(true);
      return;
    }
    setMessageError(false);

    const formData = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
    };

    axios
      .post("https://daphnexiaoesq.com//processContact.php", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setContactSuccess(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <Nav tab="contact" language={language}></Nav>
      <div className="content__main">
        <Sidebar language={language}></Sidebar>
        <section className="text__main--section">
          <h2>{language === "English" ? `Contact` : `接觸`}</h2>
          {contactSuccess ? (
            <div>
              {language === "English"
                ? `Thank you for contacting me, I will be in touch shortly.`
                : `感謝您與我聯繫，我會盡快與您聯繫。`}
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div>
                <label className={nameError ? "label--error" : ""}>
                  {language === "English" ? `Name` : `姓名`}
                </label>
                <input
                  className={
                    "contact__input" +
                    (nameError ? " contact__input--error" : "")
                  }
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder={`John Doe`}
                ></input>
                {nameError ? (
                  <p className="contact__error">
                    {language === "English"
                      ? `Please enter your name.`
                      : `請輸入您的姓名。`}
                  </p>
                ) : null}
              </div>
              <div>
                <label className={emailError ? "label--error" : ""}>
                  {language === "English" ? `Email` : `電子郵件`}
                </label>
                <input
                  className={
                    "contact__input" +
                    (emailError ? " contact__input--error" : "")
                  }
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={`example@email.com`}
                ></input>
                {emailError ? (
                  <p className="contact__error">
                    {language === "English"
                      ? `Please enter a valid email.`
                      : `請輸入有效的電子郵件。`}
                  </p>
                ) : null}
              </div>
              <div>
                <label className={phoneNumberError ? "label--error" : ""}>
                  {language === "English" ? `Phone` : `電話`}
                </label>
                <input
                  className={
                    "contact__input" +
                    (phoneNumberError ? " contact__input--error" : "")
                  }
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder={`0123456789`}
                ></input>
                {phoneNumberError ? (
                  <p className="contact__error">
                    {language === "English"
                      ? `Please a valid phone number (only numbers).`
                      : `請提供有效的電話號碼（僅限數字）。`}
                  </p>
                ) : null}
              </div>
              <div>
                <div className={messageError ? "label--error" : ""}>
                  {language === "English" ? `Message` : `訊息`}
                </div>
                <textarea
                  className={
                    "contact__input--message" +
                    (messageError ? " contact__input--error" : "")
                  }
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Some message.`}
                ></textarea>
                {messageError ? (
                  <p className="contact__error">
                    {language === "English"
                      ? `Please provide a message.`
                      : `請留言。`}
                  </p>
                ) : null}
              </div>
              <button
                className="contact__submit"
                type="submit"
                onClick={handleSubmit}
              >
                {language === "English" ? `Submit` : `提交`}
              </button>
            </form>
          )}
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default Contact;
