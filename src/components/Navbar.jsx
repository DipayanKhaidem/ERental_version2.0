import React from "react";
import ReactDOM from "react-dom";
import "./css/navbar.css";

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">TechRentals</a>
            </div>
           
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/devices">Devices</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    
                </ul>
                
            </div>
           
             

             <div className="navbar-right">
                 <div className="navbar-search">
                    <span className="search-icon">
                        <i className="fas fa-search"></i>
                    </span>
                    <input type="text" placeholder="Search...." className="search-input"></input>
                </div>
                <a href="#" className="user-icon">
                    <i className="fas fa-user"></i>
                    <a href="/account" className="login">Sign In</a>
                </a>
             </div>
        </nav>
    );
};

export default Navbar;