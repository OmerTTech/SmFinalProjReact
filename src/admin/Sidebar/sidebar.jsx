import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { UserContext } from "../../Services/userContext";
const Sidebar = () => {
  const { setIsLogged } = useContext(UserContext);
  return (
    <div className="col-3 p-0">
      <div className="sidebar d-flex flex-column justify-content-between flex-shrink-0 p-3 text-white bg-dark">
        <Link
          to="/admin"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Sidebar</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <NavLink
              to="/admin/homepage"
              className="myNav-link"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/users" className="myNav-link">
              Users
            </NavLink>
          </li>
        </ul>
        <ul className="nav nav-pills">
          <li className="w-100">
            <Link onClick={()=>setIsLogged(false)} to="/" className="myNav-link w-100">
              LogOut
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
