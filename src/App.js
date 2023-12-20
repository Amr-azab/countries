import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import CountryInformation from "./components/CountryInformation";
import Body from "./Pages/Body";
import classes from "./App.module.css";
import darkMode from "./store/darkMode";
import { useContext } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: ":code",
        element: <CountryInformation />,
      },
    ],
  },
]);
function App() {
  const toggle = useContext(darkMode);
  return (
    <div className={toggle.dark ? classes.darkMode : classes.lightMode}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
