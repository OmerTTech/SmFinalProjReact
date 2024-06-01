import React from 'react'
import PublicLayout from '../Layouts/PublicLayout'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Users from '../Pages/Users/Users'
import Favorites from '../Pages/Favorites/Favorites'
import Register from '../Pages/Auth/Register/Register'
import Login from '../Pages/Auth/Login/Login'

const PublicRoutes = () => {
    return (
        <PublicLayout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<Users />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </PublicLayout>
    )
}

export default PublicRoutes