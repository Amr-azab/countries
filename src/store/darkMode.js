import React, { useState } from "react";
const DarkMode = React.createContext({
  dark: false,
  darkModeHandler: () => {},
});
export const DarkModeProvider = (props) => {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark((PS) => !PS);
  };
  return (
    <DarkMode.Provider value={{ dark: dark, darkModeHandler: darkModeHandler }}>
      {props.children}
    </DarkMode.Provider>
  );
};
export default DarkMode;
