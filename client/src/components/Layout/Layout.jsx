import { Outlet } from "react-router-dom";
import MyHeader from "../HomePage/MyHeader";
import MyFooter from "../HomePage/MyFooter";
import "./Layout.css";

function Layout(props) {
  return (
    <>
      <MyHeader brands={props.brands} />
      <div id="main-content">
        <Outlet />
      </div>

      <MyFooter />
    </>
  );
}

export default Layout;
