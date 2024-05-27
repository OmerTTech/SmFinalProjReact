import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout";
import Users from "../admin/Users/TotalUsers";
import HomePage from "../admin/HomePage/HomePage";

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/" element={<HomePage />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
