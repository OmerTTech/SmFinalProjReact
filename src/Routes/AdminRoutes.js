import React from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import { Routes, Route } from 'react-router-dom'

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path='/admin' />
        <Route path='/admin/users' />
      </Routes>
    </AdminLayout>
  )
}

export default AdminRoutes