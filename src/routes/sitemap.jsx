import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./sitemap.css";

const Sitemap = (props) => {
  return (
    <div className="page">
      <Nav></Nav>
      <section className="text__main">
        <h2>Site Map</h2>
        <div className="text__main--section">
          <ul>
            <li>
              <Link className="text__link" to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="text__link" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="text__link" to={"/disclaimer"}>
                Disclaimer
              </Link>
            </li>
            <li>
              <Link className="text__link" to={"/estate"}>
                Estate Planning & Probate
              </Link>
            </li>
            <li>
              <Link className="text__link" to={"/family-law"}>
                Family Law
              </Link>
            </li>
            <ul>
              <li>
                <Link className="text__link" to={"/family-law/child-custody"}>
                  Child Custody & Visitation
                </Link>
              </li>
              <li>
                <Link className="text__link" to={"/family-law/divorce"}>
                  Divorce
                </Link>
              </li>
            </ul>
            <li>
              <Link className="text__link" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text__link" to={"/immigration"}>
                Immigration & Naturalization
              </Link>
            </li>
            <li>
              <Link className="text__link" to={"/privacy"}>
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Sitemap;
