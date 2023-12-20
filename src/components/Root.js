import { Outlet } from "react-router-dom";
import Title from "./Title";
const Root = () => {
  return (
    <>
      <Title />
      <Outlet />
    </>
  );
};
export default Root;
