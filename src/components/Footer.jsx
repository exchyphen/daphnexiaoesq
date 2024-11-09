import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__description">
        {props.language === "English"
          ? "Law Office of Daphne Z. Xiao serves clients throughout the greater Sacramento, California, area, including Yolo County, Sacramento County, and the cities of Sacramento, Citrus Heights, Davis, Elk Grove and Folsom."
          : "Daphne Z. Xiao 律師事務所為加州大薩克拉門托地區的客戶提供服務，包括約洛縣、薩克拉門托縣以及薩克拉門托市、Citrus Heights、戴維斯市、埃爾克格羅夫市和福爾瑟姆市。"}
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
          • {props.language === "English" ? "All Rights Reserved" : "版權所有"}
        </div>
        <ul className="footer__nav-block footer__other-links">
          <li>
            <Link to={"/disclaimer"} state={{ language: props.language }}>
              {props.language === "English" ? "Disclaimer" : "免責聲明"}
            </Link>
          </li>
          <li>
            <Link to={"/sitemap"} state={{ language: props.language }}>
              {props.language === "English" ? "Site Map" : "網站地圖"}
            </Link>
          </li>
          <li>
            <Link to={"/privacy"} state={{ language: props.language }}>
              {props.language === "English" ? "Privacy Policy" : "隱私權政策"}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
