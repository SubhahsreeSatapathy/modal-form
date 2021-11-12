import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <NavLink to="/login"><button className="login-btn">Login</button> </NavLink>
            <NavLink to="/register"><button className="login-btn">Register</button> </NavLink>
        </div>
    )
}

export default Home
