import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout";
import Users from "../admin/Users/TotalUsers";
import HomePage from "../admin/HomePage/HomePage";
import { UserContext } from "../Services/userContext";

const AdminRoutes = () => {
  const { isLogged } = useContext(UserContext);
  const navigator = useNavigate()
  useEffect(() => {
    if (isLogged) {
      navigator("/admin/homepage");
    }
  }, [isLogged]);
  return (
    <AdminLayout>
      <Routes>
        <Route path="/admin/homepage" element={<HomePage />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
