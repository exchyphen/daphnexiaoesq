import "./LanguageSwitch.css";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageSwitch = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(location.pathname, { state: { language: props.language } });
    // force a refresh to push the state
    navigate(0);
  };

  return (
    <button className="switch__button" onClick={handleClick}>
      {props.name}
    </button>
  );
};

export default LanguageSwitch;
