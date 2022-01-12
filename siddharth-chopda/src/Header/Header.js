import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import Logo from './logo/Logo'

function Header() {
    return (
        <div>
            <div className="navbar">
                <div className="nav_left">
                     <Link to="/" className="link"><Logo/> </Link> 

                </div>
                <div className="nav_right">
                    <ul>
                       
                    <li> <Link to="/Projects" className="link">Projects</Link> </li>
                    
                        <li><a href="http://bio.link/siddharthchopda">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
