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

          <a className="nav__title-block--tel" href="tel:+1-800-590-0356">
            Toll Free: 800-590-0356
          </a>
        </div>
      </div>
      <ul className="nav__navbar">
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
