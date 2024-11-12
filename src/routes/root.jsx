import "./root.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Root = () => {
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
      <Nav tab="home" language={language}></Nav>
      <div className="content__main">
        <Sidebar language={language}></Sidebar>
        <section className="text__main">
          <h2>
            {language === "English" ? "Sacramento Attorney" : "沙加緬度律師"}
          </h2>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? "Providing Skillful Advocacy And Results-Oriented Representation"
                : "提供專業辯護與結果導向的法律服務"}
            </h3>
            <p>
              {language === "English"
                ? `My name is Daphne Z. Xiao, an experienced attorney providing legal
              services to people in the Sacramento, California, area. I am
              committed to protecting the rights of my clients and achieving
              their goals in a timely and cost-effective manner.`
                : `我是蕭澤瑗，一位經驗豐富的律師。一直為加利福尼亞州沙加緬度地區的客
戶提供專業法律服務。我致力於保護客戶的權益，並以高效率和高成本效益
的方式實現他們的目標。`}
            </p>
            <p>
              {language === "English"
                ? `My law firm focuses on achieving solutions in the areas of`
                : `我的律師事務所專注於解決以下領域的法律問題：`}{" "}
              <Link
                className="text__link"
                to={"/family-law"}
                state={{ language: language }}
              >
                {language === "English" ? `family law` : `家庭法`}
              </Link>
              ,{" "}
              <Link
                className="text__link"
                to={"/estate"}
                state={{ language: language }}
              >
                {language === "English"
                  ? `estate planning & probate`
                  : `遺產規劃與遺囑認證`}
              </Link>
              , {language === "English" ? "and " : "以及"}
              <Link
                className="text__link"
                to={"/immigration"}
                state={{ language: language }}
              >
                {language === "English" ? `immigration` : `移民`}
              </Link>
              .
            </p>
            <p>
              {language === "English" ? "" : "在"}
              <Link
                className="text__link"
                to={"/family-law/divorce"}
                state={{ language: language }}
              >
                {language === "English"
                  ? "In the area of family law and divorce"
                  : "家庭法與離婚案件中"}
              </Link>
              {language === "English"
                ? `, I don’t believe in fighting for the sake of fighting and running
              up my client’s legal bills. My goal when representing you will be
              to resolve your legal problem as quickly as I can. If litigation
              is necessary however, I will work tirelessly to obtain results for
              you while protecting your rights at all times`
                : `，我絕不會進行無謂的拖延，以致客戶的法律費用不
                  斷增加。我的目標是盡可能快速地解決您的法律問題。然而，如果必須進行
                  訴訟，我將不懈努力，為您爭取最佳結果，並悍衛您的權益。`}
            </p>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `An Experienced Lawyer and a Strong Advocate`
                : `經驗豐富的律師和優秀的辯護者`}
            </h3>
            <p>
              {language === "English"
                ? `When you come to my office in Sacramento to discuss your legal
              matter, you can expect:`
                : `當您來我位於沙加緬度的辦公室諮詢您的法律問題時，您可以期待：`}
            </p>
            <p>
              <span className="text__bold">
                {language === "English" ? `Strong Advocate` : `優秀的辯護者`}
              </span>
              {language === "English"
                ? ` — I am a
              strong advocate who will work hard to achieve your goals.`
                : `－我是一位出色的辯護者，將竭盡全力實現您的目標。`}
            </p>
            <p>
              <span className="text__bold">
                {language === "English"
                  ? `Friendly and compassionate counsel`
                  : `友善且富有同情心的法律顧問`}
              </span>{" "}
              {language === "English"
                ? `— You will meet an attorney who cares about you, your family and
              your future. I will listen to your concerns and respond with
              compassion and concern.`
                : `－ 您將遇到一位關心您、您的家人和您未來的律師。我將專心傾聽您的憂慮，並帶着同理心回應您的擔憂，為您設想。`}
            </p>
            <p>
              <span className="text__bold">
                {language === "English" ? `Reasonable fees` : `合理的收費`}
              </span>{" "}
              {language === "English"
                ? `— I believe in getting results for my clients in an efficient,
              timely and cost-effective manner. I charge reasonable fees and
              provide extraordinary value for my clients.`
                : `－我相信以高效、及時和符合成本效益的方式，而且收取合理
                  的費用，並為客戶提供卓越的法律服務。`}
            </p>{" "}
            <p>
              <span className="text__bold">
                {language === "English"
                  ? `Responsive service`
                  : `迅速回應的服務`}
              </span>{" "}
              {language === "English"
                ? `— I will keep you fully informed of important developments in your case and
              respond promptly when you call. From the start of your case to its
              conclusion, you can depend on the Law Office of Daphne Z. Xiao for
              skillful advocacy and results-oriented representation.`
                : `－我將確保您始終了解案件的最新進展，並在您來電時及
                  時回應。從案件開始到結束，您都可以信賴蕭澤瑗律師事務所為您提供專業
                  辯護和結果導向的法律服務。`}
            </p>
          </div>
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default Root;
