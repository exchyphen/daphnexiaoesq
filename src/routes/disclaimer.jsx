import Footer from "../components/Footer";
import Nav from "../components/Nav";

import "./disclaimer.css";

const Disclaimer = (props) => {
  return (
    <div className="page">
      <Nav></Nav>
      <section className="text__main text__main--solo">
        <div className="text__main--section">
          <h2>Disclaimer</h2>
          <p>
            The information you obtain at this site is not, nor is it intended
            to be, legal advice. You should consult an attorney for advice
            regarding your individual situation. We invite you to contact us and
            welcome your calls, letters and electronic mail. Contacting us does
            not create an attorney-client relationship. Please do not send any
            confidential information to us until such time as an attorney-client
            relationship has been established.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Disclaimer;
