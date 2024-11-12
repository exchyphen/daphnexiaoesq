import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./immigration.css";
import Sidebar from "../components/Sidebar";

const Immigration = (props) => {
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
      <Nav tab="immigration" language={language}></Nav>
      <div className="content__main">
        <Sidebar language={language}></Sidebar>
        <section className="text__main">
          <h2>
            {language === "English"
              ? `Sacramento Immigration Attorney`
              : `沙加緬度移民律師`}
          </h2>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Efficient And Cost-Effective Immigration Law Services`
                : `高效且具成本效益的移民法律服務`}
            </h3>
            <p>
              {language === "English"
                ? `Trying to obtain a visa or adjust your immigration status can be
              time-consuming and frustrating. If you make a mistake on a visa
              application or fail to provide needed information, your visa
              application could be returned to you, sending you back to the
              starting point and resulting in further delays. The services of an
              experienced immigration attorney can help you avoid problems and
              expedite your visa application.`
                : `申請簽證或調整移民身份的過程，漫長又令人沮喪。若您在申請簽證期間出
                錯，或未提供所需資訊，您的簽證申請可能會被退回，導致要重新開始，並
                延誤進度。經驗豐富的移民律師可以幫助您避免問題，並加快簽證申請的進
                度。`}
            </p>
            <p>
              {language === "English" ? `I am` : `我是`}{" "}
              <Link
                className="text__link"
                to={"/about"}
                state={{ language: language }}
              >
                Daphne Z. Xiao
              </Link>
              {`, `}
              {language === "English"
                ? `a Sacramento attorney who provides results-oriented
              representation on behalf of people seeking legal residency in the
              U.S. I work hard to achieve my clients’ goals in an efficient,
              timely and cost-effective manner.`
                : `我是在沙加緬度執業的蕭澤瑗律師，一位為尋求美國合法居留的客戶提供結
                果導向的律師。我致力於以高效、及時且具成本效益的方式幫助客戶實現目
                標。`}
            </p>
            <p>
              {language === "English"
                ? `My law firm assists people in immigration matters involving:`
                : `我的律師事務所提供以下移民事務服務：`}
            </p>
            <ul>
              <li>{language === "English" ? `Family visas` : `家庭簽證`}</li>
              <ul>
                <li>
                  {language === "English"
                    ? `Fiancé and fiancée visa (K-1 visa)`
                    : `未婚夫/妻簽證（K-1簽證）`}
                </li>
                <li>
                  {language === "English"
                    ? `Form I-130 petition for alien family member`
                    : `I-130外籍親屬移民申請`}
                </li>
              </ul>
            </ul>
            <ul>
              <li>
                {language === "English" ? `Employment-based visas` : `工作簽證`}
              </li>
              <ul>
                <li>{language === "English" ? `H-1B visa` : `H-1B簽證`}</li>
                <li>
                  {language === "English"
                    ? `International executives (L-1A visa)`
                    : `國際高管（L-1A簽證）`}
                </li>
                <li>
                  {language === "English"
                    ? `Employees with specialized knowledge (L-1B visa)`
                    : `具有專業知識的員工（L-1B簽證）`}
                </li>
                <li>
                  {language === "English"
                    ? `Persons of extraordinary ability (O-1 visa)`
                    : `具備傑出才能人士（O-1簽證）`}
                </li>
              </ul>
            </ul>
            <ul>
              <li>
                {language === "English" ? `Investor visas` : `投資人簽證`}
              </li>
              <ul>
                <li>
                  {language === "English"
                    ? `Treaty trader visa (E-1 visa)`
                    : `條約貿易商簽證（E-1簽證）`}
                </li>
                <li>
                  {language === "English"
                    ? `Investor visa (E-2 visa)`
                    : `投資人簽證（E-2簽證）`}
                </li>
              </ul>
            </ul>
            <ul>
              <li>{language === "English" ? `Green Cards` : `綠卡`}</li>
              <li>
                {language === "English" ? `Adjustment of status` : `身份調整`}
              </li>
              <li>
                {language === "English"
                  ? `U.S. citizenship and naturalization`
                  : `美國公民及入籍`}
              </li>
              <li>
                {language === "English"
                  ? `Other immigration matters`
                  : `其他移民事務`}
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Doing Things Right The First Time`
                : `從一開始就做好準備`}
            </h3>
            <p>
              {language === "English"
                ? `The key to getting a visa application approved is to gather the
              information that U.S. Citizenship and Immigration Services
              requires. When I handle your case, I will take care to do things
              right the first time to avoid delays. I will also review your
              situation for potential problems and take measures to resolve
              those problems. As the process moves forward, I will keep you
              informed of important developments and respond promptly when you
              call.`
                : `成功獲得簽證批准的關鍵在於收集美國公民與移民服務局所要求的完整資訊
                。當我代理您的案件時，我將以嚴謹的態度從一開始就確保文件準確無誤，
                以避免延誤。我還會審查您的情況，以排查潛在問題，並儘早採取措施解決
                問題。在過程中，我將隨時通知您重要進展，並在您需要時及時回覆您的詢
                問。`}
            </p>
          </div>
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default Immigration;
