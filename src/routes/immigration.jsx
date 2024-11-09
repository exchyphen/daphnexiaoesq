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
              : `薩克拉門托移民律師`}
          </h2>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Efficient And Cost-Effective Immigration Law Services`
                : `高效率且具成本效益的移民法律服務`}
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
                : `嘗試獲得簽證或調整您的移民身份可能既耗時又令人沮喪。如果您在簽證申請中犯了錯誤或未能提供所需信息，您的簽證申請可能會被退回，從而使您返回出發地並導致進一步的延誤。經驗豐富的移民律師的服務可以幫助您避免問題並加快您的簽證申請。`}
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
                : `薩克拉門託的一名律師，為尋求美國合法居留權的人士提供以結果為導向的代理服務。`}
            </p>
            <p>
              {language === "English"
                ? `My law firm assists people in immigration matters involving:`
                : `我的律師事務所協助人們處理移民事務，涉及：`}
            </p>
            <ul>
              <li>{language === "English" ? `Family visas` : `家庭簽證`}</li>
              <ul>
                <li>
                  {language === "English"
                    ? `Fiancé and fiancée visa (K-1 visa)`
                    : `未婚夫及未婚妻簽證（K-1 簽證）`}
                </li>
                <li>
                  {language === "English"
                    ? `Form I-130 petition for alien family member`
                    : `外籍家屬 I-130 表格申請`}
                </li>
              </ul>
            </ul>
            <ul>
              <li>
                {language === "English" ? `Employment-based visas` : `就業簽證`}
              </li>
              <ul>
                <li>{language === "English" ? `H-1B visa` : `H-1B 簽證`}</li>
                <li>
                  {language === "English"
                    ? `International executives (L-1A visa)`
                    : `國際高階主管（L-1A簽證）`}
                </li>
                <li>
                  {language === "English"
                    ? `Employees with specialized knowledge (L-1B visa)`
                    : `具有專業知識的員工（L-1B簽證）`}
                </li>
                <li>
                  {language === "English"
                    ? `Persons of extraordinary ability (O-1 visa)`
                    : `傑出人才（O-1簽證）`}
                </li>
              </ul>
            </ul>
            <ul>
              <li>
                {language === "English" ? `Investor visas` : `投資者簽證`}
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
                    : `投資者簽證（E-2簽證）`}
                </li>
              </ul>
            </ul>
            <ul>
              <li>{language === "English" ? `Green Cards` : `綠卡`}</li>
              <li>
                {language === "English" ? `Adjustment of status` : `狀態調整`}
              </li>
              <li>
                {language === "English"
                  ? `U.S. citizenship and naturalization`
                  : `美國公民身份和入籍`}
              </li>
              <li>
                {language === "English"
                  ? `Other immigration matters`
                  : `其他移民事宜`}
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Doing Things Right The First Time`
                : `第一次就把事情做好`}
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
                : `簽證申請獲得批准的關鍵是收集美國公民及移民服務局所需的資訊。當我處理您的案件時，我會注意第一時間把事情做好，以免延誤。我還將審查您的情況是否有潛在問題，並採取措施解決這些問題。隨著流程的進展，我將隨時向您通報重要進展，並在您致電時及時回覆。`}
            </p>
          </div>
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default Immigration;
