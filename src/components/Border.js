import { Link } from "react-router-dom";
import classes from "./Border.module.css";
import DarkMode from "../store/darkMode";
import { useContext } from "react";
const Border = ({ border }) => {
  const toggle = useContext(DarkMode);
  return (
    <>
      <Link to={`/${border}`} className={classes.container}>
        <p className={toggle.dark ? classes.dark : classes.card}>{border}</p>
      </Link>
    </>
  );
};
export default Border;
