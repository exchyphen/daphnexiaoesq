import { Link } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./immigration.css";
import Sidebar from "../components/Sidebar";

const Immigration = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <Nav tab="immigration"></Nav>
      <div className="content__main">
        <Sidebar></Sidebar>
        <section className="text__main">
          <h2>Sacramento Immigration Attorney</h2>
          <div className="text__main--section">
            <h3>Efficient And Cost-Effective Immigration Law Services</h3>
            <p>
              Trying to obtain a visa or adjust your immigration status can be
              time-consuming and frustrating. If you make a mistake on a visa
              application or fail to provide needed information, your visa
              application could be returned to you, sending you back to the
              starting point and resulting in further delays. The services of an
              experienced immigration attorney can help you avoid problems and
              expedite your visa application.
            </p>
            <p>
              I am{" "}
              <Link className="text__link" to={"/about"}>
                Daphne Z. Xiao
              </Link>
              , a Sacramento attorney who provides results-oriented
              representation on behalf of people seeking legal residency in the
              U.S. I work hard to achieve my clients’ goals in an efficient,
              timely and cost-effective manner.
            </p>
            <p>My law firm assists people in immigration matters involving:</p>
            <ul>
              <li>Family visas</li>
              <ul>
                <li>Fiancé and fiancée visa (K-1 visa)</li>
                <li>Form I-130 petition for alien family member</li>
              </ul>
            </ul>
            <ul>
              <li>Employment-based visas</li>
              <ul>
                <li>H-1B visa</li>
                <li>International executives (L-1A visa)</li>
                <li>Employees with specialized knowledge (L-1B visa)</li>
                <li>Persons of extraordinary ability (O-1 visa)</li>
              </ul>
            </ul>
            <ul>
              <li>Investor visas</li>
              <ul>
                <li>Treaty trader visa (E-1 visa)</li>
                <li>Investor visa (E-2 visa)</li>
              </ul>
            </ul>
            <ul>
              <li>Green Cards</li>
              <li>Adjustment of status</li>
              <li>U.S. citizenship and naturalization</li>
              <li>Other immigration matters</li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>Doing Things Right The First Time</h3>
            <p>
              The key to getting a visa application approved is to gather the
              information that U.S. Citizenship and Immigration Services
              requires. When I handle your case, I will take care to do things
              right the first time to avoid delays. I will also review your
              situation for potential problems and take measures to resolve
              those problems. As the process moves forward, I will keep you
              informed of important developments and respond promptly when you
              call.
            </p>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Immigration;
