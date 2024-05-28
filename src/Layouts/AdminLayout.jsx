import React from "react";
import Sidebar from "../admin/Sidebar/Sidebar";
const AdminLayout = (props) => {
  return (
    <div className="row d-flex mx-0">
      <Sidebar />
      <main className="col-9">{props.children}</main>
    </div>
  );
};

export default AdminLayout;
