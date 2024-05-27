import React from "react";
import { Link } from "react-router-dom";
const sidebar = () => {
  return (
    <div className="col-3">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "100%", height: "100vh" }}
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Sidebar</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/admin/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className="nav-link text-white">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
