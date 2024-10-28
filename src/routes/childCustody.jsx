import { Link } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const ChildCustody = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <Nav tab="family"></Nav>
      <div className="content__main">
        <Sidebar></Sidebar>
        <section className="text__main">
          <h2>Sacramento Child Custody Attorney</h2>
          <div className="text__main--section">
            <h3>Helping You Achieve Your Custody And Visitation Goals</h3>
            <p>
              Your children are the focus of your life. You want the best for
              them, including a safe living environment, a good education and a
              promising future.
            </p>
            <p>
              At my law firm, I share your goals. I work diligently to achieve
              child custody and visitation solutions that are in the best
              interest of children and to help my clients be the best parents
              they can be.
            </p>
            <p>I represent parents in matters involving:</p>
            <ul>
              <li>Child custody</li>
              <li>Visitation and parenting time arrangements</li>
              <li>Modifications in custody and visitation</li>
              <li>Proposed child relocations</li>
              <li>Enforcement of custody and visitation orders</li>
              <li>Paternity as it relates to custody and visitation rights</li>
              <li>Other issues involving children</li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>Creative Child Custody And Parenting Time Solutions</h3>
            <p>
              In California, there is no standard formula for deciding custody
              or visitation matters. Instead, courts make their decisions based
              on what they perceive to be the “best interest” of the child. This
              means the court can choose from a range of solutions that are
              based on the needs of the child. These solutions can also change
              over time as the child matures and his or her needs change.
            </p>
            <p>
              Whenever possible, I prefer to settle such matters through
              negotiation rather than litigation. This is better for all parties
              in nearly every case. A negotiated solution can reduce emotional
              conflicts, accommodate the needs of the children and the parents,
              and keep legal costs reasonable. As an experienced{" "}
              <Link className="text__link" to={"/family-law"}>
                family law
              </Link>{" "}
              lawyer, I have helped many clients achieve workable custody and
              visitation arrangements. Let me put my experience and skills to
              work for you.
            </p>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ChildCustody;
