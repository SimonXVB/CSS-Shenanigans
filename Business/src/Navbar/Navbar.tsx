import { useState } from "react"
import "./navbar.css"
import { NavLink } from "react-router"
 
export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav id="navbar-wrapper">
            <div id="navbar">
                <div id="nav-left">
                    <span><NavLink to={"/"}>Home</NavLink></span>
                    <span><NavLink to={"/plans"}>Plans</NavLink></span>
                    <span><NavLink to={"/contact"}>Contact</NavLink></span>
                </div>
                <div id="nav-right">
                    <span><NavLink to={"/about"}>About</NavLink></span>
                    <span><a href="https://github.com/SimonXVB" target="_blank">Github</a></span>
                </div>
            </div>
            <div id="navbar-mobile" className={open ? "nav-open" : ""}>
                <button id="navbar-mobile-button" onClick={() => setOpen(!open)}>
                    {open ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    }
                </button>
                <div id="navbar-mobile-content">
                    <span><NavLink to={"/"}>Home</NavLink></span>
                    <span><NavLink to={"/plans"}>Plans</NavLink></span>
                    <span><NavLink to={"/contact"}>Contact</NavLink></span>
                    <span><NavLink to={"/about"}>About</NavLink></span>
                    <span><a href="https://github.com/SimonXVB" target="_blank">Github</a></span>
                </div>
            </div>
        </nav>
    )
};