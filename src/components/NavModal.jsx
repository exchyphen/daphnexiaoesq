import Navbar from "./Navbar";
import "./NavModal.css";

const NavModal = (props) => {
  return (
    <div className="navmodal">
      <div
        className="navmodal__exit"
        onClick={() => props.setModalActive(false)}
      >
        X
      </div>
      <Navbar tab={props.tab} style={"modal"}></Navbar>
    </div>
  );
};

export default NavModal;
