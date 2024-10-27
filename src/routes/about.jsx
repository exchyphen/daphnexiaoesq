import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./about.css";
import Sidebar from "../components/Sidebar";

const About = () => {
  return (
    <div className="page">
      <Nav tab="about"></Nav>
      <div className="content__main">
        <Sidebar></Sidebar>
        <section className="text__main">
          <h2>Daphne Z. Xiao</h2>
          <div className="text__main--section about__profile-container">
            <div className="text__main--section">
              <p>Sole Practitioner</p>
              <div>
                <h4>Location</h4>
                <p>Sacramento, CA</p>
              </div>
              <div>
                <h4>Phone:</h4>
                <a className="text__link" href="tel:+1-916-453-0356">
                  (916) 456-0356
                </a>
              </div>
              <div>
                <h4>Email</h4>
                <Link className="text__link" to={"/contact"}>
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <img src="\src\assets\xiao_daphne_z.webp"></img>
            </div>
          </div>
          <div className="text__main--section">
            <p>
              I earned my B.A. from the University of California, Davis and my
              law degree from Lincoln Law School in Sacramento.
            </p>
            <p>
              I have 10 years of legal experience as a legal assistant and
              attorney. Having worked in a small law firm while going to law
              school, I saw the value of working one-on-one with clients. This
              enables the attorney to learn about each client’s concerns and
              goals — and to respond with solutions tailored to the client’s
              needs.
            </p>
            <p>
              You can depend on the Law Office of Daphne Z. Xiao at all times
              for compassionate advice, responsive service and vigorous
              representation.
            </p>
          </div>
          <div className="text__main--section">
            <h3>Areas of Practice</h3>
            <ul>
              <li>
                <Link className="text__link" to={"/family-law"}>
                  Family Law
                </Link>
              </li>
              <li>
                <Link className="text__link" to={"/estate"}>
                  Estate Planning & Probate
                </Link>
              </li>
              <li>
                <Link className="text__link" to={"/immigration"}>
                  Immigration
                </Link>
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>Education</h3>
            <ul>
              <li>
                <span className="text__bold">Lincoln Law School</span>,
                Sacramento, California
                <ul className="list__no-style">
                  <li>J.D. - 2000</li>
                </ul>
              </li>
              <li>
                <span className="text__bold">UC Davis</span>, Davis, California
                <ul className="list__no-style">
                  <li>B.A.S 1994</li>
                  <li>Major: Biochemistry</li>
                  <li>Major: English</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>Professional Associations and Memberships</h3>
            <ul>
              <li>State Bar, Member, 2008 to Present</li>
              <li>Sacramento County Bar, Member, 2008 to Present</li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>Past Employment Positions</h3>
            <ul>
              <li>
                Law Office of Donna L. Reed, Legal Assistant, 2004 to 2008
              </li>
              <li>
                Law Office of Donna L. Reed, Attorney/liartner, 2008 to 2010
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>Pro Bono Activities</h3>
            <ul>
              <li>
                Board member for Newstar Chinese School at Davis, CA, 2010 to
                2011
              </li>
            </ul>
          </div>
          <div className="text__main--section">
            <h3>Languages</h3>
            <ul>
              <li>English</li>
              <li>Chinese</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
