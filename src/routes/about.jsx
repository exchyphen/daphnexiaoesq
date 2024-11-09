import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./about.css";
import Sidebar from "../components/Sidebar";

const About = (props) => {
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
      <Nav tab="about" language={language}></Nav>
      <div className="content__main">
        <Sidebar language={language}></Sidebar>
        <section className="text__main">
          <h2>Daphne Z. Xiao</h2>
          <div className="text__main--section about__profile-container">
            <div className="text__main--section">
              <p>
                {language === "English" ? "Sole Practitioner" : "個體從業者"}
              </p>
              <div>
                <h4>{language === "English" ? "Location" : "地點"}</h4>
                <p>
                  {language === "English" ? `Sacramento, CA` : `加州薩克拉門托`}
                </p>
              </div>
              <div>
                <h4>{language === "English" ? "Phone" : "電話"}</h4>
                <a className="text__link" href="tel:+1-916-453-0356">
                  (916) 456-0356
                </a>
              </div>
              <div>
                <h4>{language === "English" ? "Email" : "電子郵件"}</h4>
                <Link
                  className="text__link"
                  to={"/contact"}
                  state={{ language: language }}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <img src="\src\assets\xiao_daphne_z.webp"></img>
            </div>
          </div>
          <div className="text__main--section">
            <p>
              {language === "English"
                ? `I earned my B.A. from the University of California, Davis and my
              law degree from Lincoln Law School in Sacramento.`
                : `我在加州大學戴維斯分校獲得學士學位，並在薩克拉門託林肯法學院獲得法學學位。`}
            </p>
            <p>
              {language === "English"
                ? `I have 10 years of legal experience as a legal assistant and
              attorney. Having worked in a small law firm while going to law
              school, I saw the value of working one-on-one with clients. This
              enables the attorney to learn about each client’s concerns and
              goals — and to respond with solutions tailored to the client’s
              needs.`
                : `我作為法律助理和律師擁有 10 年的法律經驗。在就讀法學院期間，我曾在一家小型律師事務所工作過，因此我看到了與客戶一對一工作的價值。這使律師能夠了解每個客戶的擔憂和目標，並根據客戶的需求量身定制解決方案。`}
            </p>
            <p>
              {language === "English"
                ? `You can depend on the Law Office of Daphne Z. Xiao at all times
              for compassionate advice, responsive service and vigorous
              representation.`
                : `您可以隨時信賴肖志律師事務所的富有同情心的建議、積極響應的服務和積極的代理。`}
            </p>
          </div>
          <div className="text__main--section">
            <h3>{language === "English" ? `Areas of Practice` : `實踐領域`}</h3>
            <ul>
              <li>
                <Link
                  className="text__link"
                  to={"/family-law"}
                  state={{ language: language }}
                >
                  {language === "English" ? `Family Law` : `家庭法`}
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
                  to={"/immigration"}
                  state={{ language: language }}
                >
                  {language === "English" ? `Immigration` : `移民`}
                </Link>
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>{language === "English" ? `Education` : `教育`}</h3>
            <ul>
              <li>
                <span className="text__bold">
                  {language === "English" ? `Lincoln Law School` : `林肯法學院`}
                </span>
                {", "}
                {language === "English"
                  ? `Sacramento, California`
                  : `加州薩克拉門托`}
                <ul className="list__no-style">
                  <li>J.D. - 2000</li>
                </ul>
              </li>
              <li>
                <span className="text__bold">
                  {language === "English" ? `UC Davis` : `加州大學戴維斯分校`}
                </span>
                {", "}
                {language === "English" ? `Davis, California` : `加州戴維斯`}
                <ul className="list__no-style">
                  <li>
                    {language === "English" ? `B.A.S 1994` : `會計學士 1994`}
                  </li>
                  <li>
                    {language === "English"
                      ? `Major: Biochemistry`
                      : `專業：生物化學`}
                  </li>
                  <li>
                    {language === "English" ? `Major: English` : `專業：英語`}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Professional Associations and Memberships`
                : `專業協會和會員資格`}
            </h3>
            <ul>
              <li>
                {language === "English"
                  ? `State Bar, Member, 2008 to Present`
                  : `州律師協會會員，2008 年至今`}
              </li>
              <li>
                {language === "English"
                  ? `Sacramento County Bar, Member, 2008 to Present`
                  : `薩克拉門託縣律師協會，會員，2008 年至今`}
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Past Employment Positions`
                : `過去的就業職位`}
            </h3>
            <ul>
              <li>
                {language === "English"
                  ? `Law Office of Donna L. Reed, Legal Assistant, 2004 to 2008`
                  : `Donna L. Reed 律師事務所，法律助理，2004 年至 2008 年`}
              </li>
              <li>
                {language === "English"
                  ? `Law Office of Donna L. Reed, Attorney/partner, 2008 to 2010`
                  : `Donna L. Reed 律師事務所，律師/合夥人，2008 年至 2010 年`}
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English" ? `Pro Bono Activities` : `公益活動`}
            </h3>
            <ul>
              <li>
                {language === "English"
                  ? `Board member for Newstar Chinese School at Davis, CA, 2010 to
                2011`
                  : `2010年至2011年，加州戴維斯市新星中文學校董事會成員`}
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>{language === "English" ? `Languages` : `語言`}</h3>
            <ul>
              <li>{language === "Engliish" ? `English` : `英語`}</li>
              <li>{language === "English" ? `Chinese` : `中文`}</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default About;
