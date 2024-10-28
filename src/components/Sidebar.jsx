import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
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
      <div className="text__main--section sidebar__contact">
        <h3>Contact Us</h3>
        <p>
          I offer reduced rate initial consultations and free initial
          consultations in probate matters.
        </p>
        <div className="text__main--section">
          <a
            className="text__link"
            href="https://maps.app.goo.gl/2Bj1Bt6qGdAAarGPA"
            target="_blank"
          >
            <h4>Office</h4>
            <div>Law Office of Daphne Z. Xiao</div>
            <div>2414 16th Street, Suite 6</div>
            <div>Sacramento, CA, 95818</div>
          </a>
          <a className="text__link" href="tel:+1-916-453-0356">
            <h4>Phone</h4>
            <p>916-453-0356</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
