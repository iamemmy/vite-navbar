import React, { useState } from "react";
import './Navbar.css'
import {MenuData} from "./MenuData"

export default function Navbar() {
    const [clicked, setClicked] = useState(false)
    
    function handleClick () {
        setClicked( prevState => !prevState )
    }

  return (
    <nav className="navbar-item">
        <h1 className="nav-logo">
            Phantom <i className="fab fa-react"></i>
        </h1>

        <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            {MenuData.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item.url} className={item.cName}>
                            <i className={item.icon}></i>
                            {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}