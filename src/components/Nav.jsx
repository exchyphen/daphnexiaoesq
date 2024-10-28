import "./nav.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import NavModal from "./NavModal";

const Nav = (props) => {
  const [modalActive, setModalActive] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const mobileBreakpoint = 850;

  useEffect(() => {
    const resize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="nav">
      <div className="nav__title">
        <Link className="nav__title--title" to={"/"}>
          {windowSize > mobileBreakpoint ? (
            <h1>Law Office of Daphne Xiao</h1>
          ) : (
            <h2>Law Office of Daphne Xiao</h2>
          )}
          <p>A Committed Lawyer Who Cares</p>
        </Link>
        <div className="nav__title--intro">
          <div>Languages: English | 中文</div>

          <a className="nav__title-block--tel" href="tel:+1-916-453-0356">
            Call Now: 916-453-0356
          </a>
        </div>
      </div>
      <div className="navbar__container">
        {windowSize > mobileBreakpoint ? (
          <Navbar tab={props.tab} style="normal"></Navbar>
        ) : modalActive ? (
          <NavModal tab={props.tab} setModalActive={setModalActive}></NavModal>
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
