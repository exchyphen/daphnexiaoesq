import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer">
      <ul className="footer__nav-block">
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
      <div>
        Law Office of Daphne Z. Xiao serves clients throughout the greater
        Sacramento, California, area, including Yolo County, Sacramento County,
        and the cities of Sacramento, Citrus Heights, Davis, Elk Grove and
        Folsom.
      </div>
      <div className="copyright">
        © 2024{" "}
        <a
          href="https://lawyers.findlaw.com/profile/lawfirm/law-office-of-daphne-z-xiao/ca/sacramento/NDg0MTEyMF8x"
          target="_blank"
        >
          Law Office of Daphne Z. Xiao
        </a>{" "}
        • All Rights Reserved
      </div>
      <ul className="footer__nav-block footer__other-links">
        <li>
          <Link to={"/disclaimer"}>Disclaimer</Link>
        </li>
        <li>
          <Link to="/sitemap">Site Map</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
