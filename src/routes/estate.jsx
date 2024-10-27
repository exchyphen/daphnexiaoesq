import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./estate.css";

const Estate = (props) => {
  return (
    <div className="page">
      <Nav tab="estate"></Nav>
      <section className="text__main">
        <h2>Sacramento Estate Planning Attorney</h2>
        <div className="text__main--section">
          <h3>Experience You Can Depend On</h3>
          <p>
            An estate plan and supporting documents can accomplish many goals.
            An estate plan can protect your assets. It can reduce the
            possibility of family strife. An estate plan can give you peace of
            mind and the satisfaction of knowing that you have taken care of
            your family.
          </p>
          <p>
            My name is Daphne Z. Xiao, an experienced estate planning and
            probate lawyer. I help people make sound estate planning decisions,
            and provide efficient probate and estate administration services. I
            can assist you with these estate law matters:
          </p>
          <ul>
            <li>Wills</li>
            <li>Durable powers of attorney</li>
            <li>Advance health care directives</li>
            <li>Living trusts and other types of trusts</li>
            <li>Guardianships</li>
            <li>Probate administration</li>
            <li>Other estate law matters</li>
          </ul>
        </div>
        <div className="text__main--section">
          <h3>Developing A Customized Estate Plan</h3>
          <p>
            When you come to my office in Sacramento to discuss your needs, I
            will listen carefully as you describe your situation, your family
            and your goals. Based on these factors, I will then draft estate
            documents designed to help you achieve those goals. At a minimum,
            this should include a will, power of attorney and an advance health
            care directive. A significant event in your life, such as marriage,
            the birth of a child or divorce, should cause you to revisit your
            estate plan. As the need arises, I can draft new documents for a
            reasonable fee.
          </p>
        </div>
        <div className="text__main--section">
          <h3>Probate And Estate Administration Services</h3>
          <p>
            Wrapping up the affairs of an estate can be a complex undertaking.
            At my law firm, I provide cost-effective probate administration
            services. I can:
          </p>
          <ul>
            <li>
              Advise the personal representative (executor) of his or her duties
            </li>
            <li>
              Obtain the Letters Testamentary or Letters of Administration that
              empower the personal representative to conduct the probate or
              estate administration process
            </li>
            <li>
              Assist the personal representative in identifying estate assets
              and debts
            </li>
            <li>Prepare and file probate papers with the court</li>
          </ul>
          <p>
            My goal will be to help the personal representative avoid problems
            and delays so that the estate’s assets can be distributed to
            beneficiaries and heirs as quickly as possible.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Estate;
