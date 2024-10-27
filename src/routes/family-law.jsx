import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./family-law.css";

const FamilyLaw = (props) => {
  return (
    <div className="page">
      <Nav tab="family"></Nav>
      <section className="text__main">
        <h2>Sacramento Family Law Attorney</h2>
        <div className="text__main--section">
          <h3>Protecting Your Rights, Achieving Your Goals</h3>
          <p>
            A family law problem affects your life in many ways. Until it is
            resolved, you will not be able to move forward in your life. That is
            why it is important to retain the services of an experienced family
            law attorney.
          </p>
          <p>
            I am Daphne Z. Xiao, an attorney who is dedicated to helping my
            clients achieve positive outcomes in family law matters. I work hard
            to guide people through the divorce process in an efficient and
            timely manner while protecting their rights at all times.
          </p>
          <p>My law firm can assist you in family law matters involving:</p>
          <ul>
            <li>
              <Link className="text__link" to={"divorce"}>
                Divorce
              </Link>
            </li>
            <li>
              <Link className="text__link" to={"child-custody"}>
                Child custody and visitation
              </Link>
            </li>
            <li>Child support</li>
            <li>Spousal support (alimony)</li>
            <li>Division of community property and debts</li>
            <li>Modifications in family law orders</li>
            <li>Paternity and issues facing unmarried parents</li>
            <li>Other family law matters</li>
          </ul>
        </div>
        <div className="text__main--section">
          <h3>Negotiation Versus Litigation</h3>
          <p>
            Whenever possible, I believe in seeking results for my clients
            through negotiation. A negotiated solution can accommodate the needs
            of both parties. It also gives you control over the outcome, not a
            judge. I have successfully negotiated positive outcomes for many
            clients, and I will use my skills seeking the best possible result
            for you.
          </p>
          <p>
            However, there are times when litigation is necessary. In these
            cases, I vigorously represent my clients in court, working hard to
            protect their rights and achieve their goals.
          </p>
        </div>
        <div className="text__main--section">
          <h3>Sacramento Child Support Lawyer</h3>
          <p>
            In California, the amount of child support is governed by statutory
            guidelines. Factors such as the incomes of the parents, the number
            of children, the number of overnights the children spend with each
            parent affect the child support level. I have extensive experience
            in all aspects of child support. Whether you must pay child support
            or are entitled to receive it, I will work diligently to achieve a
            fair child support level for you.
          </p>
          <p>
            If a significant change in circumstances has occurred, I can
            represent you in court seeking a child support modification. In
            routine cases, I can obtain a modification for a reasonable and
            affordable fee.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default FamilyLaw;
