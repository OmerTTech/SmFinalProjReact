import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { GrFavorite } from "react-icons/gr";
import { UserContext } from "../../Services/userContext";

const Header = () => {
  const { setIsLogged } = useContext(UserContext);
  return (
    <header className="position-sticky" style={{ top: "0", zIndex: "100" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="Logo"
              width="60"
              height="30"
              className="d-inline-block align-text-top"
            />
            <em className="ms-2">Project</em>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/favorites">
                  <div className=" d-flex align-items-center justify-content-center pt-2 pb-1">
                    <GrFavorite
                      className="position-relative"
                      style={{ bottom: "2.5px" }}
                    />
                  </div>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Username
                </span>
                <ul
                  className="dropdown-menu"
                  
                >
                  <li>
                    <Link onClick={()=>setIsLogged(true)} className="dropdown-item" to="#">
                      Admin Panel
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
