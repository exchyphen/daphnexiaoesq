import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <ul className={"navbar " + `navbar--${props.style}`}>
      <li>
        <Link
          className={props.tab === "home" ? "navbar__highlight" : ""}
          to={"/"}
          state={{ language: props.language }}
        >
          {props.language === "English" ? "Home" : "家"}
        </Link>
      </li>
      <li>
        <Link
          className={props.tab === "about" ? "navbar__highlight" : ""}
          to={"/about"}
          state={{ language: props.language }}
        >
          {props.language === "English" ? "About" : "關於"}
        </Link>
      </li>
      <li>
        <Link
          className={props.tab === "family" ? "navbar__highlight" : ""}
          to={"/family-law"}
          state={{ language: props.language }}
        >
          {props.language === "English" ? "Family Law" : "家庭法"}
        </Link>
      </li>
      <li>
        <Link
          className={props.tab === "estate" ? "navbar__highlight" : ""}
          to={"/estate"}
          state={{ language: props.language }}
        >
          {props.language === "English"
            ? "Estate Planning & Probation"
            : "遺產規劃和遺囑認證"}
        </Link>
      </li>
      <li>
        <Link
          className={props.tab === "immigration" ? "navbar__highlight" : ""}
          to={"/immigration"}
          state={{ language: props.language }}
        >
          {props.language === "English"
            ? "Immigration & Naturalization"
            : "移民與入籍"}
        </Link>
      </li>
      <li>
        <Link
          className={props.tab === "contact" ? "navbar__highlight" : ""}
          to={"/contact"}
          state={{ language: props.language }}
        >
          {props.language === "English" ? "Contact" : "接觸"}
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
