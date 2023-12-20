import classes from "./Country.module.css";
import darkMode from "../store/darkMode";
import { useContext } from "react";

const Country = ({ name, region, population, capital, img }) => {
  const toggle = useContext(darkMode);
  return (
    <div className={toggle.dark ? classes.darkMode : classes.container}>
      <img src={img} alt="country" />
      <div className={classes.info}>
        <p className={toggle.dark ? classes.darkTitle : classes.title}>
          {name}
        </p>
        <p className={toggle.dark ? classes.lightText : ""}>
          <strong>Capital 🏙 :</strong>
          {capital}
        </p>
        <p className={toggle.dark ? classes.lightText : ""}>
          <strong>Region 🌎 :</strong>
          {region}
        </p>
        <p className={toggle.dark ? classes.lightText : ""}>
          <strong>Population 👪 :</strong>
          {population.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
export default Country;
