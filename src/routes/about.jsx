import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./about.css";

const About = () => {
  return (
    <div className="page">
      <Nav tab="about"></Nav>
      <section className="text__main">
        <h2>About Daphne Z. Xiao</h2>
        <div className="text__main--section">
          <p>
            I earned my B.A. from the University of California, Davis and my law
            degree from Lincoln Law School in Sacramento.
          </p>
          <p>
            I have 10 years of legal experience as a legal assistant and
            attorney. Having worked in a small law firm while going to law
            school, I saw the value of working one-on-one with clients. This
            enables the attorney to learn about each client’s concerns and goals
            — and to respond with solutions tailored to the client’s needs.
          </p>
          <p>
            You can depend on the Law Office of Daphne Z. Xiao at all times for
            compassionate advice, responsive service and vigorous
            representation.
          </p>
        </div>
        <div className="text__main--section">
          <h3>Areas of Practice</h3>
          <p>Family Law</p>
          <p>Estate Planning/Probate</p>
          <p>Immigration</p>
        </div>
        <div className="text__main--section">
          <h3>Education</h3>
          <p>
            <span className="text__bold">Lincoln Law School</span>, Sacramento,
            California
          </p>
          <p>J.D. - 2000</p>
          <p>
            <span className="text__bold">UC Davis</span>, Davis, California
          </p>
          <p>B.A.S 1994</p>
          <p>Major: Biochemistry</p>
          <p>Major: English</p>
        </div>
        <div className="text__main--section">
          <h3>Professional Associations and Memberships</h3>
          <p>State Bar, Member, 2008 to Present</p>
          <p>Sacramento County Bar, Member, 2008 to Present</p>
        </div>
        <div className="text__main--section">
          <h3>Past Employment Positions</h3>
          <p>Law Office of Donna L. Reed, Legal Assistant, 2004 to 2008</p>
          <p>Law Office of Donna L. Reed, Attorney/Partner, 2008 to 2010</p>
        </div>
        <div className="text__main--section">
          <h3>Pro Bono Activities</h3>
          <p>
            Board member for Newstar Chinese School at Davis, CA, 2010 to 2011
          </p>
        </div>
        <div className="text__main--section">
          <h3>Languages</h3>
          <p>English</p>
          <p>Chinese</p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;
