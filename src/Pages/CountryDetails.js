import Border from "../components/Border";
import classes from "./CountryDetails.module.css";
import darkMode from "../store/darkMode";
import { useContext } from "react";
const CountryDetails = ({
  img,
  population,
  capital,
  name,
  region,
  currency,
  languages,
  borders,
  area,
  symbol,
  native,
  sub,
  timezone,
}) => {
  const toggle = useContext(darkMode);

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={img} />
      </div>

      <div className={classes.info}>
        <p className={toggle.dark ? classes.darkTitle : classes.title}>
          {" "}
          {name}
        </p>

        <div className={classes.details}>
          <div className={classes.column1}>
            <p className={toggle.dark ? classes.lightMode : ""}>
              <strong>Native Name :</strong> {native}
            </p>
            <p className={toggle.dark ? classes.lightMode : ""}>
              <strong>Population👪 :</strong> {population}
            </p>
            <p className={toggle.dark ? classes.lightMode : ""}>
              <strong>Capital 🏙 :</strong> {capital}
            </p>
            <p className={toggle.dark ? classes.lightMode : ""}>
              <strong>Region 🌏 :</strong> {region}
            </p>
            <p className={toggle.dark ? classes.lightMode : ""}>
              <strong>Timezone 🕧:</strong> {timezone}
            </p>
          </div>

          <div className={classes.column2}>
            <p className={toggle.dark ? classes.lightMode : ""}>
              <strong>Sub region 🌏 :</strong> {sub}
            </p>
            <p className={toggle.dark ? classes.lightMode : ""}>
              <strong>Language🔤 :</strong> {languages}
            </p>
            <div
              className={toggle.dark ? classes.lightBorder : classes.borders}
            >
              <strong>Borders 🗺 :</strong>
              {borders !== undefined &&
                borders.map((border) => (
                  <Border key={border} border={border} />
                ))}

              {borders === undefined && <p>No Borders</p>}
            </div>

            <p className={toggle.dark ? classes.lightMode : ""}>
              <strong>Area 🏞 : </strong> {area} km²
            </p>
            <p className={toggle.dark ? classes.lightMode : ""}>
              <strong>Currency 💰 :</strong> {currency} {symbol}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetails;
