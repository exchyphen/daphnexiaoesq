import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./sitemap.css";

const Sitemap = (props) => {
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
        <h2>{language === "English" ? `Site Map` : `網站地圖`}</h2>
        <div className="text__main--section">
          <ul>
            <li>
              <Link
                className="text__link"
                to={"/about"}
                state={{ language: language }}
              >
                {language === "English" ? `About` : `關於`}
              </Link>
            </li>
            <li>
              <Link
                className="text__link"
                to={"/contact"}
                state={{ language: language }}
              >
                {language === "English" ? `Contact` : `接觸`}
              </Link>
            </li>
            <li>
              <Link
                className="text__link"
                to={"/disclaimer"}
                state={{ language: language }}
              >
                {language === "English" ? `Disclaimer` : `免責聲明`}
              </Link>
            </li>
            <li>
              <Link
                className="text__link"
                to={"/estate"}
                state={{ language: language }}
              >
                {language === "English"
                  ? `Estate Planning & Probate`
                  : `遺產規劃和遺囑認證`}
              </Link>
            </li>
            <li>
              <Link
                className="text__link"
                to={"/family-law"}
                state={{ language: language }}
              >
                {language === "English" ? `Family Law` : `家庭法`}
              </Link>
            </li>
            <ul>
              <li>
                <Link
                  className="text__link"
                  to={"/family-law/child-custody"}
                  state={{ language: language }}
                >
                  {language === "English"
                    ? `Child Custody & Visitation`
                    : `兒童監護和探視`}
                </Link>
              </li>
              <li>
                <Link
                  className="text__link"
                  to={"/family-law/divorce"}
                  state={{ language: language }}
                >
                  {language === "English" ? `Divorce` : `離婚`}
                </Link>
              </li>
            </ul>
            <li>
              <Link
                className="text__link"
                to={"/"}
                state={{ language: language }}
              >
                {language === "English" ? `Home` : `家`}
              </Link>
            </li>
            <li>
              <Link
                className="text__link"
                to={"/immigration"}
                state={{ language: language }}
              >
                {language === "English"
                  ? `Immigration & Naturalization`
                  : `移民與入籍`}
              </Link>
            </li>
            <li>
              <Link
                className="text__link"
                to={"/privacy"}
                state={{ language: language }}
              >
                {language === "English" ? `Privacy` : `隱私`}
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <Footer language={language}></Footer>
    </div>
  );
};

export default Sitemap;
