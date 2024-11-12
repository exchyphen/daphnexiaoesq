import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import "./estate.css";

const Estate = (props) => {
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
      <Nav tab="estate" language={language}></Nav>
      <div className="content__main">
        <Sidebar language={language}></Sidebar>
        <section className="text__main">
          <h2>
            {language === "English"
              ? `Sacramento Estate Planning Attorney`
              : `遺產規劃和遺囑認證`}
          </h2>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Experience You Can Depend On`
                : `值得信賴的經驗`}
            </h3>
            <p>
              {language === "English"
                ? `An estate plan and supporting documents can accomplish many goals.
              An estate plan can protect your assets. It can reduce the
              possibility of family strife. An estate plan can give you peace of
              mind and the satisfaction of knowing that you have taken care of
              your family.`
                : `遺產規劃及相關文件可以實現多項目標。透過遺產規劃，您不但可以保護資
                  產，也可以減少家庭糾紛，讓您可以放心家人將得到妥善安排和照顧。`}
            </p>
            <p>
              {language === "English"
                ? `My name is Daphne Z. Xiao, an experienced estate planning and
              probate lawyer. I help people make sound estate planning
              decisions, and provide efficient probate and estate administration
              services. I can assist you with these estate law matters:`
                : `我是蕭澤瑗律師，一位經驗豐富的遺產規劃與遺囑認證律師。我協助客戶做
                出明智的遺產規劃決策，並提供高效的遺囑認證及遺產管理服務。我可以在
                以下遺產法律事務中為您提供協助：`}
            </p>
            <ul>
              <li>{language === "English" ? `Wills` : `遺囑`}</li>
              <li>
                {language === "English"
                  ? `Durable powers of attorney`
                  : `持久授權書`}
              </li>
              <li>
                {language === "English"
                  ? `Advance health care directives`
                  : `醫護事宜預立醫囑`}
              </li>
              <li>
                {language === "English"
                  ? `Living trusts and other types of trusts`
                  : `生前信託及其他類型的信託`}
              </li>
              <li>{language === "English" ? `Guardianship` : `監護權`}</li>
              <li>{language === "English" ? `Conservatorship` : `保護監管`}</li>
              <li>
                {language === "English"
                  ? `Probate administration`
                  : `遺囑認證管理`}
              </li>
              <li>
                {language === "English"
                  ? `Other estate law matters`
                  : `其他遺產法律事務`}
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Developing A Customized Estate Plan`
                : `量身定做遺產計劃`}
            </h3>
            <p>
              {language === "English"
                ? `When you come to my office in Sacramento to discuss your needs, I
              will listen carefully as you describe your situation, your family
              and your goals. Based on these factors, I will then draft estate
              documents designed to help you achieve those goals. At a minimum,
              this should include a will, power of attorney and an advance
              health care directive. A significant event in your life, such as
              marriage, the birth of a child or divorce, should cause you to
              revisit your estate plan. As the need arises, I can draft new
              documents for a reasonable fee.`
                : `當您前來我位於沙加緬度的辦公室商討需求時，我會仔細傾聽您描述您的家
                庭、現況及目標。我會根據這些因素，擬訂能夠幫助您實現目標的遺產文件
                。基本上，我會為您提供包括遺囑、授權書及醫療指示書的方案。不同的人
                生大事中，例如結婚、生子或離婚，都應促使您重新檢視您的遺產計劃，我
                可以根據您不同的需要起草新文件，並收取合理的費用。`}
            </p>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Probate And Estate Administration Services`
                : `遺囑認證及遺產管理服務`}
            </h3>
            <p>
              {language === "English"
                ? `Wrapping up the affairs of an estate can be a complex undertaking.
              At my law firm, I provide cost-effective probate administration
              services. I can:`
                : `處理遺產相關的事務可能是一項艱辛的任務。在我的律師事務所，我提供符
              合成本效益的遺囑認證管理服務。我可以：`}
            </p>
            <ul>
              <li>
                {language === "English"
                  ? `Advise the personal representative (executor) of his or her
                duties`
                  : `向遺產管理人（執行人）提供其職責的建議`}
              </li>
              <li>
                {language === "English"
                  ? `Obtain the Letters Testamentary or Letters of Administration
                that empower the personal representative to conduct the probate
                or estate administration process`
                  : `取得授權書，以便遺產管理人能夠執行遺囑認證或遺產管理程序`}
              </li>
              <li>
                {language === "English"
                  ? `Assist the personal representative in identifying estate assets
                and debts`
                  : `協助遺產管理人識別遺產資產與債務`}
              </li>
              <li>
                {language === "English"
                  ? `Prepare and file probate papers with the court`
                  : `準備並向法院提交遺囑認證文件`}
              </li>
            </ul>
            <p>
              {language === "English"
                ? `My goal will be to help the personal representative avoid problems
              and delays so that the estate’s assets can be distributed to
              beneficiaries and heirs as quickly as possible.`
                : `我的目標是協助遺產管理人避免問題和延誤，盡可能迅速地將遺產資產分配
              給受益人和繼承人。`}
            </p>
          </div>
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default Estate;
