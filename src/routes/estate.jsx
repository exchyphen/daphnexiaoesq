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
              : `薩克拉門托遺產規劃律師`}
          </h2>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Experience You Can Depend On`
                : `您可以信賴的經驗`}
            </h3>
            <p>
              {language === "English"
                ? `An estate plan and supporting documents can accomplish many goals.
              An estate plan can protect your assets. It can reduce the
              possibility of family strife. An estate plan can give you peace of
              mind and the satisfaction of knowing that you have taken care of
              your family.`
                : `遺產規劃和支持文件可以實現許多目標。遺產規劃可以保護您的資產。它可以減少家庭紛爭的可能性。遺產規劃可以讓您安心並滿足於知道您已經照顧好您的家人。`}
            </p>
            <p>
              {language === "English"
                ? `My name is Daphne Z. Xiao, an experienced estate planning and
              probate lawyer. I help people make sound estate planning
              decisions, and provide efficient probate and estate administration
              services. I can assist you with these estate law matters:`
                : `我叫 Daphne Z. Xiao，一位經驗豐富的遺產規劃和遺囑認證律師。我幫助人們做出合理的遺產規劃決策，並提供高效率的遺囑認證和遺產管理服務。我可以協助您處理以下遺產法事宜：`}
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
                  : `預先醫療照護指示`}
              </li>
              <li>
                {language === "English"
                  ? `Living trusts and other types of trusts`
                  : `生前信託及其他類型的信託`}
              </li>
              <li>{language === "English" ? `Guardianships` : `監護權`}</li>
              <li>
                {language === "English"
                  ? `Probate administration`
                  : `遺囑認證管理`}
              </li>
              <li>
                {language === "English"
                  ? `Other estate law matters`
                  : `其他遺產法事宜`}
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Developing A Customized Estate Plan`
                : `制定客製化的遺產計劃`}
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
                : `當您來到我位於薩克拉門託的辦公室討論您的需求時，我會仔細聆聽您描述您的情況、您的家庭和您的目標。根據這些因素，我將起草旨在幫助您實現這些目標的遺產文件。這至少應包括遺囑、授權書和預立醫療保健指示。您生活中的重大事件，例如結婚、孩子的出生或離婚，應該會促使您重新審視您的遺產規劃。當需要時，我可以以合理的費用起草新文件。`}
            </p>
          </div>
          <div className="text__main--section">
            <h3>
              {language === "English"
                ? `Probate And Estate Administration Services`
                : `遺囑認證和遺產管理服務`}
            </h3>
            <p>
              {language === "English"
                ? `Wrapping up the affairs of an estate can be a complex undertaking.
              At my law firm, I provide cost-effective probate administration
              services. I can:`
                : `結束遺產事務可能是一項複雜的任務。在我的律師事務所，我提供具成本效益的遺囑認證管理服務。我可以：`}
            </p>
            <ul>
              <li>
                {language === "English"
                  ? `Advise the personal representative (executor) of his or her
                duties`
                  : `告知個人代表（遺囑執行人）其職責`}
              </li>
              <li>
                {language === "English"
                  ? `Obtain the Letters Testamentary or Letters of Administration
                that empower the personal representative to conduct the probate
                or estate administration process`
                  : `取得遺囑書或遺產管理書，授權個人代表進行遺囑認證或遺產管理程序`}
              </li>
              <li>
                {language === "English"
                  ? `Assist the personal representative in identifying estate assets
                and debts`
                  : `協助個人代表識別遺產資產和債務`}
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
                : `我的目標是幫助個人代表避免問題和延誤，以便將遺產資產盡快分配給受益人和繼承人。`}
            </p>
          </div>
        </section>
      </div>
      <Footer language={language}></Footer>
    </div>
  );
};

export default Estate;
