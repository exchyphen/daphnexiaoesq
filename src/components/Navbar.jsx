import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <ul className={"navbar " + `navbar--${props.style}`}>
      <li>
        <Link
          className={props.tab === "home" ? "navbar__highlight" : ""}
          to={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={props.tab === "about" ? "navbar__highlight" : ""}
          to={"/about"}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={props.tab === "family" ? "navbar__highlight" : ""}
          to={"/family-law"}
        >
          Family Law
        </Link>
      </li>
      <li>
        <Link
          className={props.tab === "estate" ? "navbar__highlight" : ""}
          to={"/estate"}
        >
          Estate Planning & Probate
        </Link>
      </li>
      <li>
        <Link
          className={props.tab === "immigration" ? "navbar__highlight" : ""}
          to={"/immigration"}
        >
          Immigration & Naturalization
        </Link>
      </li>
      <li>
        <Link
          className={props.tab === "contact" ? "navbar__highlight" : ""}
          to={"/contact"}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
