import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./family-law.css";
import Sidebar from "../components/Sidebar";

const FamilyLaw = (props) => {
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
              ? `Sacramento Family Law Attorney`
              : `薩克拉門托家庭律師`}
          </h2>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Protecting Your Rights, Achieving Your Goals`
                : `保護您的權利，實現您的目標`}
            </h3>
            <p>
              {language === "English"
                ? `A family law problem affects your life in many ways. Until it is
              resolved, you will not be able to move forward in your life. That
              is why it is important to retain the services of an experienced
              family law attorney.`
                : `家庭法問題會在許多方面影響您的生活。在問題解決之前，你的生活將無法前進。這就是為什麼保留經驗豐富的家庭法律律師的服務很重要。`}
            </p>
            <p>
              {language === "English"
                ? `I am Daphne Z. Xiao, an attorney who is dedicated to helping my
              clients achieve positive outcomes in family law matters. I work
              hard to guide people through the divorce process in an efficient
              and timely manner while protecting their rights at all times.`
                : `我是 Daphne Z. Xiao，律師，致力於幫助我的客戶在家庭法事務上取得積極成果。我努力指導人們有效率、及時地完成離婚程序，同時始終保護他們的權利。`}
            </p>
            <p>
              {language === "English"
                ? `My law firm can assist you in family law matters involving:`
                : `我的律師事務所可以協助您處理家事法事務，涉及：`}
            </p>
            <ul>
              <li>
                <Link
                  className="text__link"
                  to={"divorce"}
                  state={{ language: language }}
                >
                  {language === "English" ? `Divorce` : `離婚`}
                </Link>
              </li>
              <li>
                <Link
                  className="text__link"
                  to={"child-custody"}
                  state={{ language: language }}
                >
                  {language === "English"
                    ? `Child custody and visitation`
                    : `兒童監護權和探視權`}
                </Link>
              </li>
              <li>{language === "English" ? `Child support` : `子女扶養費`}</li>
              <li>
                {language === "English"
                  ? `Spousal support (alimony)`
                  : `配偶贍養費（贍養費）`}
              </li>
              <li>
                {language === "English"
                  ? `Division of community property and debts`
                  : `共同財產和債務的分割`}
              </li>
              <li>
                {language === "English"
                  ? `Modifications in family law orders`
                  : `家庭法命令的修改`}
              </li>
              <li>
                {language === "English"
                  ? `Paternity and issues facing unmarried parents`
                  : `親子關係和未婚父母面臨的問題`}
              </li>
              <li>
                {language === "English"
                  ? `Other family law matters`
                  : `其他家庭法事宜`}
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Negotiation Versus Litigation`
                : `談判與訴訟`}
            </h3>
            <p>
              {language === "English"
                ? `Whenever possible, I believe in seeking results for my clients
              through negotiation. A negotiated solution can accommodate the
              needs of both parties. It also gives you control over the outcome,
              not a judge. I have successfully negotiated positive outcomes for
              many clients, and I will use my skills seeking the best possible
              result for you.`
                : `只要有可能，我相信透過談判為我的客戶尋求結果。協商解決方案可以滿足雙方的需求。它還讓您可以控制結果，而不是法官。我已經成功地為許多客戶爭取了積極的結果，我將利用我的技能為您尋求最好的結果。`}
            </p>
            <p>
              {language === "English"
                ? `However, there are times when litigation is necessary. In these
              cases, I vigorously represent my clients in court, working hard to
              protect their rights and achieve their goals.`
                : `然而，有時也需要提起訴訟。在這些案件中，我在法庭上積極代表我的客戶，努力保護他們的權利並實現他們的目標。`}
            </p>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Sacramento Child Support Lawyer`
                : `薩克拉門托兒童撫養律師`}
            </h3>
            <p>
              {language === "English"
                ? `In California, the amount of child support is governed by
              statutory guidelines. Factors such as the incomes of the parents,
              the number of children, the number of overnights the children
              spend with each parent affect the child support level. I have
              extensive experience in all aspects of child support. Whether you
              must pay child support or are entitled to receive it, I will work
              diligently to achieve a fair child support level for you.`
                : `在加州，子女扶養費的金額受法定準則管轄。父母的收入、孩子的數量、孩子與父母雙方一起度過的過夜次數等因素都會影響子女扶養費水準。我在子女撫養的各個方面都有豐富的經驗。無論您必須支付子女撫養費還是有權獲得子女撫養費，我都會努力為您實現公平的子女撫養費水平。`}
            </p>
            <p>
              {language === "English"
                ? `If a significant change in circumstances has occurred, I can
              represent you in court seeking a child support modification. In
              routine cases, I can obtain a modification for a reasonable and
              affordable fee.`
                : `如果情況發生重大變化，我可以代表您出庭尋求子女扶養費修改。在常規情況下，我可以以合理且負擔得起的費用獲得修改。`}
            </p>
          </div>
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default FamilyLaw;
