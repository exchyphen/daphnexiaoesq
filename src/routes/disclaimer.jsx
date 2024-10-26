import Footer from "../components/Footer";
import Nav from "../components/Nav";

import "./disclaimer.css";

const Disclaimer = (props) => {
  return (
    <div>
      <Nav></Nav>
      <div>
        <h3>Disclaimer</h3>
        The information you obtain at this site is not, nor is it intended to
        be, legal advice. You should consult an attorney for advice regarding
        your individual situation. We invite you to contact us and welcome your
        calls, letters and electronic mail. Contacting us does not create an
        attorney-client relationship. Please do not send any confidential
        information to us until such time as an attorney-client relationship has
        been established.
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Disclaimer;
