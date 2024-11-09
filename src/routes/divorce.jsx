import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

const Divorce = (props) => {
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
              ? `Sacramento Divorce Attorney`
              : `薩克拉門托離婚律師`}
          </h2>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Guiding You To A Better Future`
                : `引導您邁向更美好的未來`}
            </h3>
            <p>
              {language === "English"
                ? `A divorce marks a turning point in your life. The decisions you
              make now will affect you for years to come, so you need sound
              advice and effective legal representation.`
                : `離婚標誌著你人生的轉捩點。您現在做出的決定將影響您未來幾年，因此您需要合理的建議和有效的法律代表。`}
            </p>
            <p>
              {language === "English"
                ? `I am Daphne Z. Xiao, a Sacramento `
                : `我是 Daphne Z. Xiao，薩克拉門託的一名`}
              <Link
                className="text__link"
                to={"/family-law"}
                state={{ language: language }}
              >
                {language === "English" ? `family law` : `家庭法`}
              </Link>
              {language === "English"
                ? ` lawyer who works hard to help my clients deal successfully with
              the emotional, practical and financial effects of divorce. My goal
              is to complete the divorce process as efficiently as possible
              while protecting my clients’ rights. I want to help you make a
              successful transition to life after divorce.`
                : `律師，我努力幫助我的客戶成功應對離婚帶來的情感、實際和經濟影響。我的目標是盡可能有效率地完成離婚程序，同時保護客戶的權利。我想幫助您成功過渡到離婚後的生活。`}
            </p>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Obtaining The Best Possible Divorce Settlement`
                : `獲得最佳離婚解決方案`}
            </h3>
            <p>
              {language === "English"
                ? `Your family situation is unique, so you need divorce
              representation that reflects that fact. When advising and
              representing you, I will take time to understand you and your
              goals. This will enable me to learn what is important to you and
              where you want to be in your life one year, three years and five
              years from now. I will then develop a legal strategy designed to
              achieve your divorce in an efficient manner.`
                : `您的家庭狀況很獨特，因此您需要反映這一事實的離婚代表。在為您提供建議和代表您時，我會花時間了解您和您的目標。這將使我能夠了解什麼對您來說是重要的，以及一年、三年和五年後您希望在生活中處於什麼位置。然後，我將制定一項法律策略，旨在以有效的方式實現您的離婚。`}
            </p>
            <p>
              {language === "English"
                ? `Usually, this involves negotiating a settlement that resolves
              issues involving children, support and property in the best manner
              possible — a settlement that allows you to move forward in your
              life. However, I am also a strong advocate who works hard to
              protect my clients’ rights and interests. If necessary, I will
              vigorously represent you in court if a settlement cannot be
              reached through negotiation or mediation.`
                : `通常，這涉及透過談判達成和解協議，以盡可能最好的方式解決涉及兒童、贍養費和財產的問題——這樣的和解協議可以讓您在生活中繼續前進。然而，我也是一名堅定的倡議者，努力保護客戶的權益。如有必要，如果透過談判或調解無法達成和解，我將極力代表您出庭。`}
            </p>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Division Of Community Property And Debts`
                : `共同財產和債務的分割`}
            </h3>
            <p>
              {language === "English" ? `After ` : ""}
              <Link
                className="text__link"
                to={"/family-law/child-custody"}
                state={{ language: language }}
              >
                {language === "English"
                  ? `child custody and visitation`
                  : `在孩子監護權和探視權`}
              </Link>
              {language === "English"
                ? ` matters, property division usually looms as the most important
              issue in a divorce. Since California is a community property
              state, this means that property and debts must be identified and
              valued, and then divided on an equal basis. I have extensive
              experience in this critical aspect of divorce, and I will work
              diligently to protect your rights and interests regarding your
              property.`
                : `問題之後，財產分割通常是離婚中最重要的問題。由於加州是一個共有財產州，這意味著財產和債務必須被識別和估價，然後在平等的基礎上分配。我在離婚這一關鍵方面擁有豐富的經驗，我將努力保護您的財產權益。`}
            </p>
            <p>
              {language === "English"
                ? `You will have confidence knowing that an experienced divorce
              attorney is working hard to achieve a positive outcome for you.`
                : `您將充滿信心，知道經驗豐富的離婚律師正在努力為您取得積極的結果。`}
            </p>
          </div>
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default Divorce;
