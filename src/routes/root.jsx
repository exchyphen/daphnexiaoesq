import { Link } from "react-router-dom";
import "./root.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="home">
      <Nav></Nav>
      <div className="hero-img-container">
        <img
          className="hero-img"
          src="\src\assets\pexels-pixabay-160994.jpg"
        ></img>
      </div>
      <section className="main-text">
        <h2>Sacramento Attorney</h2>
        <div>
          <h3>
            Providing Skillful Advocacy And Results-Oriented Representation
          </h3>
          My name is Daphne Z. Xiao, an experienced attorney providing legal
          services to people in the Sacramento, California, area. I am committed
          to protecting the rights of my clients and achieving their goals in a
          timely and cost-effective manner. My law firm focuses on achieving
          solutions in the areas of family law, estate planning, probate and
          immigration. In the area of family law and divorce, I don’t believe in
          fighting for the sake of fighting and running up my client’s legal
          bills. My goal when representing you will be to resolve your legal
          problem as quickly as I can. If litigation is necessary however, I
          will work tirelessly to obtain results for you while protecting your
          rights at all times
        </div>
        <div>
          <h3>An Experienced And Committed Lawyer</h3> When you come to my
          office in Sacramento to discuss your legal matter, you can expect: My
          complete commitment to your case — I am a strong advocate who will
          work hard to achieve your goals. Friendly and compassionate counsel —
          You will meet an attorney who cares about you, your family and your
          future. I will listen to your concerns and respond with compassion and
          concern. Reasonable fees — I believe in getting results for my clients
          in an efficient, timely and cost-effective manner. I charge reasonable
          fees and provide extraordinary value for my clients. Responsive
          service — I will keep you fully informed of important developments in
          your case and respond promptly when you call. From the start of your
          case to its conclusion, you can depend on the Law Office of Daphne Z.
          Xiao for skillful advocacy and results-oriented representation.
        </div>
        <div>
          <h3>Contact A Lawyer</h3> For a consultation about your legal problem,
          call the Law Office of Daphne Z. Xiao at 916-453-0356 or send an
          email. I offer reduced rate initial consultations and free initial
          consultations in probate matters.
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Root;
