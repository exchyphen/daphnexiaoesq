import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

import "./disclaimer.css";

const Disclaimer = (props) => {
  const location = useLocation();

  const language =
    location.state && location.state.language
      ? location.state.language
      : "English";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <Nav language={language}></Nav>
      <section className="text__main text__main--solo">
        <div className="text__main--section">
          <h2>{language === "English" ? `Disclaimer` : `免責聲明`}</h2>
          <p>
            {language === "English"
              ? `The information you obtain at this site is not, nor is it intended
            to be, legal advice. You should consult an attorney for advice
            regarding your individual situation. We invite you to contact us and
            welcome your calls, letters and electronic mail. Contacting us does
            not create an attorney-client relationship. Please do not send any
            confidential information to us until such time as an attorney-client
            relationship has been established.`
              : `您在本網站獲得的資訊不是、也無意成為法律建議。您應該諮詢律師，以獲取有關您個人情況的建議。我們邀請您與我們聯繫，並歡迎您的來電、來信和電子郵件。聯繫我們並不建立律師與客戶的關係。在建立律師與客戶關係之前，請勿向我們發送任何機密資訊。`}
          </p>
        </div>
      </section>
      <Footer language={language}></Footer>
    </div>
  );
};

export default Disclaimer;
