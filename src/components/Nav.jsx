import "./nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="nav__title-block">
        <Link className="nav__title-block--title" to={"/"}>
          <h1>Law Office of Daphne Xiao</h1>
          <p>A Committed Lawyer Who Cares</p>
        </Link>
        <div>
          <div className="nav__title-block--flag">
            <img className="img__flag" src="./src/assets/Flag_China.png"></img>
          </div>
          <label>
            Protecting What You Love: &nbsp;
            <a className="nav__title-block--tel" href="tel:+1-800-590-0356">
              800-590-0356
            </a>
          </label>
        </div>
      </div>
      <ul className="nav__nav-block">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/family-law"}>Family Law</Link>
        </li>
        <li>
          <Link to={"/estate"}>Estate Planning & Probate</Link>
        </li>
        <li>
          <Link to={"/immigration"}>Immigration & Naturalization</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
