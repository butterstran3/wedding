import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const toggle = () => {
        let button = document.querySelector(".hamburger")
        button.classList.toggle("open")
        let menu = document.querySelector(".mobile_contents")
        menu.classList.toggle("open")
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const clickHome = () => {
        let button = document.querySelector(".hamburger")
        button.classList.remove("open")
        let menu = document.querySelector(".mobile_contents")
        menu.classList.remove("open")
    }

    return (
        <div className="nav_container">
            <div className="nav_logo">
                <NavLink to="/">
                    <h1>Duy & Julia</h1>
                </NavLink>
            </div>
            <div className="nav_contents">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/schedule">SCHEDULE</NavLink>
                <NavLink to="/photos">PHOTOS</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
                <NavLink to="RSVP">RSVP</NavLink>
            </div>
            <div className="mobile_menu">
                <div className="hamburger" onClick={toggle}>
                    <div className="bar_1"></div>
                    <div className="bar_2"></div>
                    <div className="bar_3"></div>
                </div>
                <div className="mobile_contents">
                    <NavLink className="mobile_content" to="/" onClick={toggle}>HOME</NavLink>
                    <NavLink className="mobile_content" to="/schedule" onClick={toggle}>SCHEDULE</NavLink>
                    <NavLink className="mobile_content" to="/photos" onClick={toggle}>PHOTOS</NavLink>
                    <NavLink className="mobile_content" to="/faq" onClick={toggle}>FAQ</NavLink>
                    <NavLink className="mobile_content" to="/rsvp" onClick={toggle}>RSVP</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;