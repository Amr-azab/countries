import classes from "./Title.module.css";
import Switch from "@mui/material/Switch";
import darkMode from "../store/darkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext } from "react";
const Title = () => {
  const toggle = useContext(darkMode);
  return (
    <div className={toggle.dark ? classes.lightMode : classes.titleBox}>
      <h2 className={classes.title}>Where in the world</h2>
      <div className={classes.darkMode}>
        <DarkModeOutlinedIcon />
        <p>Dark Mode</p>
      </div>
      <Switch
        onClick={toggle.darkModeHandler}
        color="default"
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
};
export default Title;
