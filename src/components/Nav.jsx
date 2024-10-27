import "./nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="nav__title">
        <Link className="nav__title--title" to={"/"}>
          <h1>Law Office of Daphne Xiao</h1>
          <p>A Committed Lawyer Who Cares</p>
        </Link>
        <div className="nav__title--intro">
          <div>Languages: English | 中文</div>

          <a className="nav__title-block--tel" href="tel:+1-916-453-0356">
            Call Now: 916-453-0356
          </a>
        </div>
      </div>
      <ul className="nav__navbar">
        <li>
          <Link
            className={props.tab === "home" ? "nav__highlight" : ""}
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={props.tab === "about" ? "nav__highlight" : ""}
            to={"/about"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={props.tab === "family" ? "nav__highlight" : ""}
            to={"/family-law"}
          >
            Family Law
          </Link>
        </li>
        <li>
          <Link
            className={props.tab === "estate" ? "nav__highlight" : ""}
            to={"/estate"}
          >
            Estate Planning & Probate
          </Link>
        </li>
        <li>
          <Link
            className={props.tab === "immigration" ? "nav__highlight" : ""}
            to={"/immigration"}
          >
            Immigration & Naturalization
          </Link>
        </li>
        <li>
          <Link
            className={props.tab === "contact" ? "nav__highlight" : ""}
            to={"/contact"}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="nav__hero">
        <img
          className="nav__hero--img"
          src="\src\assets\pexels-pixabay-160994.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Nav;
