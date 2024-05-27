import React from "react";
import Sidebar from "../admin/Sidebar/sidebar";
const AdminLayout = (props) => {
  return (
    <div className="row d-flex">
      <Sidebar />
      <main className="col-9">{props.children}</main>
    </div>
  );
};

export default AdminLayout;
