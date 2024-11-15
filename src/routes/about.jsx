import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./about.css";
import Sidebar from "../components/Sidebar";

const About = (props) => {
  const location = useLocation();

  const handleYearsOfExp = () => {
    return new Date().getFullYear() - 2008;
  };

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
          <h2>{language === "English" ? `Daphne Z. Xiao` : `蕭澤瑗`}</h2>
          <div className="text__main--section about__profile-container">
            <div className="text__main--section">
              <p>
                {language === "English" ? "Sole Practitioner" : "個體從業者"}
              </p>
              <div>
                <h4>{language === "English" ? "Location" : "地點"}</h4>
                <p>
                  {language === "English"
                    ? `Sacramento, CA`
                    : `沙加緬度，加利福尼亞州`}
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
                : `我畢業於加州大學戴維斯分校，並於沙加緬度的林肯法學院取得法學學位。`}
            </p>
            <p>
              {language === "English"
                ? `I have been practicing for ${handleYearsOfExp()} years. Having worked in a small law firm while going to law
              school, I saw the value of working one-on-one with clients. This
              enables the attorney to learn about each client’s concerns and
              goals — and to respond with solutions tailored to the client’s
              needs.`
                : `我已從事法律工作${handleYearsOfExp()}年。於法律學院期間，我曾在一間小型律師事務所工作
              ，使我深刻體會到與客戶一對一服務的價值。這種工作方式讓律師能夠深入
              了解每位客戶的關注與目標，並提供針對客戶需求的專屬解決方案。`}
            </p>
            <p>
              {language === "English"
                ? `You can depend on the Law Office of Daphne Z. Xiao at all times
              for compassionate advice, responsive service and vigorous
              representation.`
                : `您可以隨時依賴蕭澤瑗律師事務所，享有富有同理心的建議、迅速回應的服
                  務，以及積極的代理。`}
            </p>
          </div>
          <div className="text__main--section">
            <h3>{language === "English" ? `Areas of Practice` : `業務範疇`}</h3>
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
                    : `遺產規劃與遺囑認證`}
                </Link>
              </li>
              <li>
                <Link
                  className="text__link"
                  to={"/immigration"}
                  state={{ language: language }}
                >
                  {language === "English" ? `Immigration` : `移民法`}
                </Link>
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>{language === "English" ? `Education` : `學歷`}</h3>
            <ul>
              <li>
                <span className="text__bold">
                  {language === "English" ? `Lincoln Law School` : `林肯法學院`}
                </span>
                {", "}
                {language === "English"
                  ? `Sacramento, California`
                  : `沙加緬度，加利福尼亞州`}
                <ul className="list__no-style">
                  <li>
                    {language === "English"
                      ? `J.D. - 2000`
                      : `法學博士 (J.D.) - 2000年`}
                  </li>
                </ul>
              </li>
              <li>
                <span className="text__bold">
                  {language === "English" ? `UC Davis` : `加州大學戴維斯分校`}
                </span>
                {", "}
                {language === "English"
                  ? `Davis, California`
                  : `加利福尼亞州戴維斯市`}
                <ul className="list__no-style">
                  <li>
                    {language === "English"
                      ? `B.A.S 1994`
                      : `學士學位 - 1994年`}
                  </li>
                  <li>
                    {language === "English"
                      ? `Major: Biochemistry`
                      : `主修：生物化學`}
                  </li>
                  <li>
                    {language === "English" ? `Major: English` : `主修：英文`}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Professional Associations and Memberships`
                : `專業協會與會員資格`}
            </h3>
            <ul>
              <li>
                {language === "English"
                  ? `State Bar, Member, 2008 to Present`
                  : `州律師協會，會員，2008年至今`}
              </li>
              <li>
                {language === "English"
                  ? `Sacramento County Bar, Member, 2008 to Present`
                  : `沙加緬度郡律師協會，會員，2008年至今`}
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Past Employment Positions`
                : `過去職位`}
            </h3>
            <ul>
              <li>
                {language === "English"
                  ? `Law Office of Donna L. Reed, Legal Assistant, 2004 to 2008`
                  : `Donna L. Reed律師事務所，法律助理，2004年至2008年`}
              </li>
              <li>
                {language === "English"
                  ? `Law Office of Donna L. Reed, Attorney/partner, 2008 to 2010`
                  : `Donna L. Reed律師事務所，律師/合夥人，2008年至2010年`}
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
                  : `擔任戴維斯市新星中文學校董事會成員，2010年至2011年`}
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>{language === "English" ? `Languages` : `語言能力`}</h3>
            <ul>
              <li>{language === "English" ? `English` : `英語`}</li>
              <li>{language === "English" ? `Chinese` : `廣東話`}</li>
              {language === "English" ? null : <li>{`普通話`}</li>}
            </ul>
          </div>
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default About;
