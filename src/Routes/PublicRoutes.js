import React from 'react'
import PublicLayout from '../Layouts/PublicLayout'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Users from '../Pages/Users/Users'
import Favorites from '../Pages/Favorites/Favorites'
import Register from '../Pages/Register/Register'
import Login from '../Pages/Login/Login'

const PublicRoutes = () => {
    return (
        <PublicLayout>
            <Routes>
                <Route path='/' to={<Home />} />
                <Route path='/users' to={<Users />} />
                <Route path='/favorites' to={<Favorites />} />
                <Route path='/register' to={<Register />} />
                <Route path='/login' to={<Login />} />
            </Routes>
        </PublicLayout>
    )
}

export default PublicRoutes