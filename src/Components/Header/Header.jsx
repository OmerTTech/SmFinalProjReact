import React, { useContext, useEffect } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineLogin } from "react-icons/md";
import { UserContext } from "../../Services/userContext";

const Header = () => {
  const {
    token,
    setToken,
    getUserData,
    adminToken,
    setIsLogged,
    favCount,
    setFavCount,
    singleUserData,
    setSingleUserData,
  } = useContext(UserContext);

  useEffect(() => {
    const myFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavCount(myFavs.length);
  }, [setFavCount]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));
    getUserData();
    setToken(data);
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("userId");
    setSingleUserData(null);
    localStorage.removeItem("token");
    setToken(null);
  };

  const adminUser = JSON.parse(localStorage.getItem("adminUser"))

  console.log(singleUserData);
  return (
    <header className="position-sticky" style={{ top: "0", zIndex: "100" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mt-2 py-1">
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
                  <div className="d-flex align-items-center justify-content-center pt-2 pb-1">
                    <GrFavorite
                      className="position-relative"
                      style={{ bottom: "2.5px" }}
                    />
                  </div>
                </NavLink>
              </li>
              <NavLink
                className="text-decoration-none text-secondary"
                to="/favorites"
              >
                <span className="favorites-counter position-relative">
                  {favCount}
                </span>
              </NavLink>
              {token ? (
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {adminToken() ? adminUser.first_name : token && singleUserData
                      ? singleUserData.first_name
                      : "Error"}
                  </span>
                  <ul className="dropdown-menu">
                    {adminToken() && (
                      <>
                        <li>
                          <Link
                            onClick={() => setIsLogged(true)}
                            className="dropdown-item"
                            to="/admin/homepage"
                          >
                            Admin Panel
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                      </>
                    )}
                    <li>
                      <button
                        onClick={logOutHandler}
                        className="dropdown-item"
                        to="#"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <Link to={"/login"}>
                  <button className="loginToken Btn ms-2">
                    <div className="sign">
                      <MdOutlineLogin style={{ color: "#fff" }} />
                    </div>
                    <div className="text">Login</div>
                  </button>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
