import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__description">
        Law Office of Daphne Z. Xiao serves clients throughout the greater
        Sacramento, California, area, including Yolo County, Sacramento County,
        and the cities of Sacramento, Citrus Heights, Davis, Elk Grove and
        Folsom.
      </div>
      <div className="footer__contact">
        <a
          className="footer__office"
          href="https://maps.app.goo.gl/2Bj1Bt6qGdAAarGPA"
          target="_blank"
        >
          <div>Law Office of Daphne Z. Xiao</div>
          <div>2414 16th Street, Suite 6</div>
          <div>Sacramento, CA, 95818</div>
        </a>
        <a href="tel:+1-916-453-0356">Phone: 916-453-0356</a>
      </div>
      <div>
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
      </div>
    </footer>
  );
};

export default Footer;
