import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

const Divorce = (props) => {
  return (
    <div className="page">
      <Nav tab="family"></Nav>
      <div className="content__main">
        <Sidebar></Sidebar>
        <section className="text__main">
          <h2>Sacramento Divorce Attorney</h2>
          <div className="text__main--section">
            <h3>Guiding You To A Better Future</h3>
            <p>
              A divorce marks a turning point in your life. The decisions you
              make now will affect you for years to come, so you need sound
              advice and effective legal representation.
            </p>
            <p>
              I am Daphne Z. Xiao, a Sacramento{" "}
              <Link className="text__link" to="/family-law">
                family law
              </Link>{" "}
              lawyer who works hard to help my clients deal successfully with
              the emotional, practical and financial effects of divorce. My goal
              is to complete the divorce process as efficiently as possible
              while protecting my clients’ rights. I want to help you make a
              successful transition to life after divorce.
            </p>
          </div>
          <div className="text__main--section">
            <h3>Obtaining The Best Possible Divorce Settlement</h3>
            <p>
              Your family situation is unique, so you need divorce
              representation that reflects that fact. When advising and
              representing you, I will take time to understand you and your
              goals. This will enable me to learn what is important to you and
              where you want to be in your life one year, three years and five
              years from now. I will then develop a legal strategy designed to
              achieve your divorce in an efficient manner.
            </p>
            <p>
              Usually, this involves negotiating a settlement that resolves
              issues involving children, support and property in the best manner
              possible — a settlement that allows you to move forward in your
              life. However, I am also a strong advocate who works hard to
              protect my clients’ rights and interests. If necessary, I will
              vigorously represent you in court if a settlement cannot be
              reached through negotiation or mediation.
            </p>
          </div>
          <div className="text__main--section">
            <h3>Division Of Community Property And Debts</h3>
            <p>
              After{" "}
              <Link className="text__link" to={"/family-law/child-custody"}>
                child custody and visitation
              </Link>{" "}
              matters, property division usually looms as the most important
              issue in a divorce. Since California is a community property
              state, this means that property and debts must be identified and
              valued, and then divided on an equal basis. I have extensive
              experience in this critical aspect of divorce, and I will work
              diligently to protect your rights and interests regarding your
              property.
            </p>
            <p>
              You will have confidence knowing that an experienced divorce
              attorney is working hard to achieve a positive outcome for you.
            </p>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Divorce;
