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
            {language === "English" ? "Sacramento Attorney" : "薩克拉門托律師"}
          </h2>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? "Providing Skillful Advocacy And Results-Oriented Representation"
                : "提供熟練的宣傳和以結果為導向的代表"}
            </h3>
            <p>
              {language === "English"
                ? `My name is Daphne Z. Xiao, an experienced attorney providing legal
              services to people in the Sacramento, California, area. I am
              committed to protecting the rights of my clients and achieving
              their goals in a timely and cost-effective manner.`
                : `我叫達芙妮‧肖 (Daphne Z. Xiao)，是一位經驗豐富的律師，為加州薩克拉門托地區的人們提供法律服務。我致力於保護客戶的權利並及時且經濟高效地實現他們的目標。`}
            </p>
            <p>
              {language === "English"
                ? `My law firm focuses on achieving solutions in the areas of`
                : `我的律師事務所專注於在`}{" "}
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
                  : `遺產規劃和遺囑認證`}
              </Link>
              , {language === "English" ? "and " : "和"}
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
              <Link
                className="text__link"
                to={"/family-law/divorce"}
                state={{ language: language }}
              >
                {language === "English"
                  ? "In the area of family law and divorce"
                  : "在家庭法和離婚"}
              </Link>
              {language === "English"
                ? `, I don’t believe in fighting for the sake of fighting and running
              up my client’s legal bills. My goal when representing you will be
              to resolve your legal problem as quickly as I can. If litigation
              is necessary however, I will work tirelessly to obtain results for
              you while protecting your rights at all times`
                : `領域，我不相信為了戰鬥而戰鬥，也不會增加客戶的法律費用。我代表您的目標是盡快解決您的法律問題。但如果需要訴訟，我將不懈努力，為您爭取結果，同時始終保護您的權利`}
            </p>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `An Experienced Lawyer and a Strong Advocate`
                : `經驗豐富的律師和強大的倡導者`}
            </h3>
            <p>
              {language === "English"
                ? `When you come to my office in Sacramento to discuss your legal
              matter, you can expect:`
                : `當您來到我位於薩克拉門託的辦公室討論您的法律事務時，您可以期待：`}
            </p>
            <p>
              <span className="text__bold">
                {language === "English"
                  ? `Strong Advocate`
                  : `強而有力的倡導者`}
              </span>
              {language === "English"
                ? ` — I am a
              strong advocate who will work hard to achieve your goals.`
                : `－我是一個強而有力的倡導者，我將努力實現你的目標。`}
            </p>
            <p>
              <span className="text__bold">
                {language === "English"
                  ? `Friendly and compassionate counsel`
                  : `友好而富有同情心的律師`}
              </span>{" "}
              {language === "English"
                ? `— You will meet an attorney who cares about you, your family and
              your future. I will listen to your concerns and respond with
              compassion and concern.`
                : `－ 您將遇到一位關心您、您的家人和您的未來的律師。我會傾聽您的擔憂，並以同情和關心的態度回應。`}
            </p>
            <p>
              <span className="text__bold">
                {language === "English" ? `Reasonable fees` : `合理的費用`}
              </span>{" "}
              {language === "English"
                ? `— I believe in getting results for my clients in an efficient,
              timely and cost-effective manner. I charge reasonable fees and
              provide extraordinary value for my clients.`
                : `－—我相信以高效、及時和具有成本效益的方式為我的客戶獲得結果。我收取合理的費用並為我的客戶提供非凡的價值。`}
            </p>{" "}
            <p>
              <span className="text__bold">
                {language === "English" ? `Responsive service` : `響應式服務`}
              </span>{" "}
              {language === "English"
                ? `— I will keep you fully informed of important developments in your case and
              respond promptly when you call. From the start of your case to its
              conclusion, you can depend on the Law Office of Daphne Z. Xiao for
              skillful advocacy and results-oriented representation.`
                : `－我將讓您充分了解案件的重要進展，並在您致電時及時回覆。從您的案件開始到結束，您都可以信賴肖志律師事務所提供熟練的辯護和注重結果的代理服務。`}
            </p>
          </div>
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default Root;
