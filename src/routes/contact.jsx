import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import "./contact.css";

const Contact = () => {
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
      <Nav tab="contact"></Nav>
      <div className="content__main">
        <Sidebar></Sidebar>
        <section className="text__main--section">
          <h2>Contact</h2>
          {contactSuccess ? (
            <div>Thank you for contacting me, I will be in touch shortly.</div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div>
                <label className={nameError ? "label--error" : ""}>Name</label>
                <input
                  className={
                    "contact__input" +
                    (nameError ? " contact__input--error" : "")
                  }
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                {nameError ? (
                  <p className="contact__error">Please enter your name.</p>
                ) : null}
              </div>
              <div>
                <label className={emailError ? "label--error" : ""}>
                  Email
                </label>
                <input
                  className={
                    "contact__input" +
                    (emailError ? " contact__input--error" : "")
                  }
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {emailError ? (
                  <p className="contact__error">Please enter a valid email.</p>
                ) : null}
              </div>
              <div>
                <label className={phoneNumberError ? "label--error" : ""}>
                  Phone
                </label>
                <input
                  className={
                    "contact__input" +
                    (phoneNumberError ? " contact__input--error" : "")
                  }
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
                {phoneNumberError ? (
                  <p className="contact__error">
                    Please a valid phone number (only numbers).
                  </p>
                ) : null}
              </div>
              <div>
                <div className={messageError ? "label--error" : ""}>
                  Message
                </div>
                <textarea
                  className={
                    "contact__input--message" +
                    (messageError ? " contact__input--error" : "")
                  }
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {messageError ? (
                  <p className="contact__error">Please provide a message.</p>
                ) : null}
              </div>
              <button
                className="contact__submit"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          )}
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
