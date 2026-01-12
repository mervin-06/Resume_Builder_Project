import { Outlet, Link } from "react-router-dom";
import Resume from "./Resume";
import "./styles.css";

export default function Layout() {
  return (
    <div className="layout-container">
      <div className="layout-left">
        <Outlet />
      </div>
      <div className="layout-right">
        <Resume />
      </div>
    </div>
  );
}
