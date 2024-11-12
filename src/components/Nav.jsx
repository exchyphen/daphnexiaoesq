import "./nav.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavModal from "./NavModal";
import LanguageSwitch from "./LanguageSwitch";

const Nav = (props) => {
  const [modalActive, setModalActive] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const mobileBreakpoint = 850;

  const language = props.language ? props.language : "English";
  const languageIndex = language === "English" ? 0 : 1;

  // language switch arrays
  const navTitle = ["Law Office of Daphne Xiao", "蕭澤瑗律師事務所"];

  useEffect(() => {
    const resize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="nav">
      <div className="nav__title">
        <div className="nav__title--title">
          {windowSize > mobileBreakpoint ? (
            <h1>{navTitle[languageIndex]}</h1>
          ) : (
            <h2>{navTitle[languageIndex]}</h2>
          )}
          <p>
            {language === "English"
              ? "A Committed Lawyer Who Cares"
              : "一位盡責和富有同理心的律師"}
          </p>
        </div>
        <div className="nav__title--intro">
          <div>
            {language === "English" ? "Languages" : "語言"}:{" "}
            <LanguageSwitch
              name={"English"}
              language={"English"}
            ></LanguageSwitch>{" "}
            |{" "}
            <LanguageSwitch name={"中文"} language={"Chinese"}></LanguageSwitch>
          </div>
          <a className="nav__title-block--tel" href="tel:+1-916-453-0356">
            {language === "English" ? "Call Now" : "立即致電"}: 916-453-0356
          </a>
        </div>
      </div>
      <div className="navbar__container">
        {windowSize > mobileBreakpoint ? (
          <Navbar tab={props.tab} style="normal" language={language}></Navbar>
        ) : modalActive ? (
          <NavModal
            tab={props.tab}
            setModalActive={setModalActive}
            language={language}
          ></NavModal>
        ) : (
          <button
            className="navmodal__button"
            onClick={() => setModalActive(!modalActive)}
          >
            Menu
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
