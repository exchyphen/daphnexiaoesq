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
              : `家庭法`}
          </h2>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Protecting Your Rights, Achieving Your Goals`
                : `保護您的權益，實現您的目標`}
            </h3>
            <p>
              {language === "English"
                ? `A family law problem affects your life in many ways. Until it is
              resolved, you will not be able to move forward in your life. That
              is why it is important to retain the services of an experienced
              family law attorney.`
                : `家庭法律問題會對您的生活產生多方面的影響。在問題解決之前，您都受到
                  掣肘，難以開展新的一章。因此，聘請一位具備豐富經驗的家庭法律師至關
                  重要。`}
            </p>
            <p>
              {language === "English"
                ? `I am Daphne Z. Xiao, an attorney who is dedicated to helping my
              clients achieve positive outcomes in family law matters. I work
              hard to guide people through the divorce process in an efficient
              and timely manner while protecting their rights at all times.`
                : `我是蕭澤瑗律師，一位致力於協助客戶在家庭法律事務中取得正面成果的律
                  師。我竭力以高效且迅速的方式，協助客戶完成離婚程序，同時悍衛他們的
                  權益。`}
            </p>
            <p>
              {language === "English"
                ? `My law firm can assist you in family law matters involving:`
                : `我的律師事務所可協助處理以下家庭法律事務：`}
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
                    : `子女監護權與探視權`}
                </Link>
              </li>
              <li>{language === "English" ? `Child support` : `子女撫養費`}</li>
              <li>
                {language === "English"
                  ? `Spousal support (alimony)`
                  : `配偶贍養費`}
              </li>
              <li>
                {language === "English"
                  ? `Division of community property and debts`
                  : `共同財產與債務的分割`}
              </li>
              <li>
                {language === "English"
                  ? `Modifications in family law orders`
                  : `家庭法令的修改`}
              </li>
              <li>
                {language === "English"
                  ? `Paternity and issues facing unmarried parents`
                  : `親子關係確認及未婚父母面臨的問題`}
              </li>
              <li>
                {language === "English"
                  ? `Other family law matters`
                  : `其他家庭法律事務`}
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Negotiation Versus Litigation`
                : `談判與訴訟的抉擇`}
            </h3>
            <p>
              {language === "English"
                ? `Whenever possible, I believe in seeking results for my clients
              through negotiation. A negotiated solution can accommodate the
              needs of both parties. It also gives you control over the outcome,
              not a judge. I have successfully negotiated positive outcomes for
              many clients, and I will use my skills seeking the best possible
              result for you.`
                : `只要情況許可，我傾向透過談判為客戶尋求解決方案。透過談判協議，不僅
                  可滿足雙方需求，還讓您掌控結果，而非將決策權交給法官。我已成功為許
                  多客戶談判達成積極成果，我會發揮所長，為您爭取最佳的結果。`}
            </p>
            <p>
              {language === "English"
                ? `However, there are times when litigation is necessary. In these
              cases, I vigorously represent my clients in court, working hard to
              protect their rights and achieve their goals.`
                : `然而，訴訟有時也是無可避免的。在這些情況下，我將積極地在法庭上為我
                的客戶辯護，致力於保護其權益並達成其目標。`}
            </p>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Sacramento Child Support Lawyer`
                : `沙加緬度子女撫養費律師`}
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
                : `在加州，子女撫養費的數目是由法定標準決定。父母收入、子女人數，以及
                  子女與每位父母同住的過夜天數等因素，都會影響撫養費多寡。我在處理子
                  女撫養費方面積累了豐富的經驗。無論您是需支付撫養費的一方，還是有權
                  獲得撫養費的一方，我都將全力為您爭取合理的撫養費。`}
            </p>
            <p>
              {language === "English"
                ? `If a significant change in circumstances has occurred, I can
              represent you in court seeking a child support modification. In
              routine cases, I can obtain a modification for a reasonable and
              affordable fee.`
                : `如果您的生活面對重大變化，我可以在法庭上為您申請撫養費調整。在一般
                  常規的案件中，我收取合理且可負擔的服務費用。`}
            </p>
          </div>
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default FamilyLaw;
