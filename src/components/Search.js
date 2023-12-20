import classes from "./Search.module.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import darkMode from "../store/darkMode";
import { useContext } from "react";

const Search = ({ setCountryData }) => {
  const toggle = useContext(darkMode);
  const fetchCountry = async (e) => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${e.target.value}`
    );
    if (!response.ok) return;
    const data = await response.json();
    setCountryData(data);
  };
  return (
    <div className={classes.header}>
      <div className={toggle.dark ? classes.darkMode : classes.search}>
        <SearchSharpIcon />
        <input
          className={toggle.dark ? classes.darkSearchMode : classes.searchBar}
          type="text"
          id="searchedCountry"
          placeholder="Search for a country..."
          onChange={fetchCountry}
        />
      </div>
    </div>
  );
};
export default Search;
