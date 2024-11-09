import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="text__main--section">
        <h3>
          {props.language === "English" ? "Areas of Practice" : "實踐領域"}
        </h3>
        <ul>
          <li>
            <Link className="text__link" to={"/family-law"}>
              {props.language === "English" ? "Family Law" : "家庭法"}
            </Link>
          </li>
          <li>
            <Link className="text__link" to={"/estate"}>
              {props.language === "English"
                ? "Estate Planning & Probate"
                : "遺產規劃和遺囑認證"}
            </Link>
          </li>
          <li>
            <Link className="text__link" to={"/immigration"}>
              {props.language === "English" ? "Immigration" : "移民"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="text__main--section sidebar__contact">
        <h3>{props.language === "English" ? "Contact Us" : "聯絡我們"}</h3>
        <p>
          {props.language === "English"
            ? "I offer reduced rate initial consultations and free initial consultations in probate matters."
            : "我在遺囑認證事宜上提供優惠的初次諮詢和免費的初次諮詢。"}
        </p>
        <div className="text__main--section">
          <a
            className="text__link"
            href="https://maps.app.goo.gl/2Bj1Bt6qGdAAarGPA"
            target="_blank"
          >
            <h4>{props.language === "English" ? "Office" : "辦公室"}</h4>
            <div>Law Office of Daphne Z. Xiao</div>
            <div>2414 16th Street, Suite 6</div>
            <div>Sacramento, CA, 95818</div>
          </a>
          <a className="text__link" href="tel:+1-916-453-0356">
            <h4>{props.language === "English" ? "Phone" : "電話"}</h4>
            <p>916-453-0356</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
