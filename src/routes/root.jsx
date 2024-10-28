import "./root.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Root = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <Nav tab="home"></Nav>
      <div className="content__main">
        <Sidebar></Sidebar>
        <section className="text__main">
          <h2>Sacramento Attorney</h2>
          <div className="text__main--section">
            <h3>
              Providing Skillful Advocacy And Results-Oriented Representation
            </h3>
            <p>
              My name is Daphne Z. Xiao, an experienced attorney providing legal
              services to people in the Sacramento, California, area. I am
              committed to protecting the rights of my clients and achieving
              their goals in a timely and cost-effective manner.
            </p>
            <p>
              My law firm focuses on achieving solutions in the areas of{" "}
              <Link className="text__link" to={"/family-law"}>
                family law
              </Link>
              , estate planning, probate and immigration.
            </p>
            <p>
              In the area of family law and{" "}
              <Link className="text__link" to={"/family-law/divorce"}>
                divorce
              </Link>
              , I don’t believe in fighting for the sake of fighting and running
              up my client’s legal bills. My goal when representing you will be
              to resolve your legal problem as quickly as I can. If litigation
              is necessary however, I will work tirelessly to obtain results for
              you while protecting your rights at all times
            </p>
          </div>
          <div className="text__main--section">
            <h3>An Experienced Lawyer and a Strong Advocate</h3>
            <p>
              When you come to my office in Sacramento to discuss your legal
              matter, you can expect:
            </p>
            <p>
              <span className="text__bold">Strong Advocate</span> — I am a
              strong advocate who will work hard to achieve your goals.
            </p>
            <p>
              <span className="text__bold">
                Friendly and compassionate counsel
              </span>{" "}
              — You will meet an attorney who cares about you, your family and
              your future. I will listen to your concerns and respond with
              compassion and concern.
            </p>
            <p>
              <span className="text__bold">Reasonable fees</span> — I believe in
              getting results for my clients in an efficient, timely and
              cost-effective manner. I charge reasonable fees and provide
              extraordinary value for my clients.
            </p>{" "}
            <p>
              <span className="text__bold">Responsive service</span> — I will
              keep you fully informed of important developments in your case and
              respond promptly when you call. From the start of your case to its
              conclusion, you can depend on the Law Office of Daphne Z. Xiao for
              skillful advocacy and results-oriented representation.
            </p>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
