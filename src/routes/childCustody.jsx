import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const ChildCustody = (props) => {
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
      <Nav tab="family" language={language}></Nav>
      <div className="content__main">
        <Sidebar language={language}></Sidebar>
        <section className="text__main">
          <h2>
            {language === "English"
              ? `Sacramento Child Custody Attorney`
              : `薩克拉門托兒童監護律師`}
          </h2>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Helping You Achieve Your Custody And Visitation Goals`
                : `幫助您實現監護和探視目標`}
            </h3>
            <p>
              {language === "English"
                ? `Your children are the focus of your life. You want the best for
              them, including a safe living environment, a good education and a
              promising future.`
                : `您的孩子是您生活的焦點。您希望為他們提供最好的，包括安全的生活環境、良好的教育和光明的未來。`}
            </p>
            <p>
              {language === "English"
                ? `At my law firm, I share your goals. I work diligently to achieve
              child custody and visitation solutions that are in the best
              interest of children and to help my clients be the best parents
              they can be.`
                : `在我的律師事務所，我與您有著共同的目標。我努力工作，以實現符合兒童最大利益的兒童監護和探視解決方案，並幫助我的客戶成為最好的父母。`}
            </p>
            <p>
              {language === "English"
                ? `I represent parents in matters involving:`
                : `我代表家長處理涉及以下事項：`}
            </p>
            <ul>
              <li>{language === "English" ? `Child custody` : `子女監護權`}</li>
              <li>
                {language === "English"
                  ? `Visitation and parenting time arrangements`
                  : `探視及育兒時間安排`}
              </li>
              <li>
                {language === "English"
                  ? `Modifications in custody and visitation`
                  : `羈押與探視的修改`}
              </li>
              <li>
                {language === "English"
                  ? `Proposed child relocations`
                  : `擬議的兒童搬遷`}
              </li>
              <li>
                {language === "English"
                  ? `Enforcement of custody and visitation orders`
                  : `監護和探視令的執行`}
              </li>
              <li>
                {language === "English"
                  ? `Paternity as it relates to custody and visitation rights`
                  : `與監護權和探視權相關的親子關係`}
              </li>
              <li>
                {language === "English"
                  ? `Other issues involving children`
                  : `其他涉及兒童的問題`}
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Creative Child Custody And Parenting Time Solutions`
                : `創意兒童監護和育兒時間解決方案`}
            </h3>
            <p>
              {language === "English"
                ? `In California, there is no standard formula for deciding custody
              or visitation matters. Instead, courts make their decisions based
              on what they perceive to be the “best interest” of the child. This
              means the court can choose from a range of solutions that are
              based on the needs of the child. These solutions can also change
              over time as the child matures and his or her needs change.`
                : `在加州，沒有決定監護權或探視權事宜的標準公式。相反，法院根據他們認為的兒童的“最大利益”做出決定。這意味著法院可以根據兒童的需求從一系列解決方案中進行選擇。隨著孩子的成熟和他或她的需求的變化，這些解決方案也會隨著時間的推移而改變。`}
            </p>
            <p>
              {language === "English"
                ? `Whenever possible, I prefer to settle such matters through
              negotiation rather than litigation. This is better for all parties
              in nearly every case. A negotiated solution can reduce emotional
              conflicts, accommodate the needs of the children and the parents,
              and keep legal costs reasonable. As an experienced `
                : `只要有可能，我更願意透過談判而不是訴訟來解決這類問題。幾乎在所有情況下，這對各方都更好。協商解決可以減少情感衝突，滿足孩子和父母的需求，並將法律費用保持在合理範圍內。作為一名經驗豐富的`}
              <Link
                className="text__link"
                to={"/family-law"}
                state={{ language: language }}
              >
                {language === "English" ? `family law` : `家庭法`}
              </Link>
              {language === "English"
                ? `lawyer, I have helped many clients achieve workable custody and
              visitation arrangements. Let me put my experience and skills to
              work for you.`
                : `律師，我幫助許多客戶實現了可行的監護和探視安排。讓我用我的經驗和技能為您服務。`}
            </p>
          </div>
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default ChildCustody;
