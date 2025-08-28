import { useState } from "react"
import "./navbar.css"
import { NavLink } from "react-router"
 
export function Navbar() {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState<string>("home");

    function click(page: string) {
        if(page === current) return;

        setCurrent(page);
        setOpen(false);
    };

    return (
        <nav id="navbar-wrapper">
            <div id="navbar" className={open ? "nav-open" : ""}>
                <button id="navbar-button" onClick={() => setOpen(!open)}>
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
                <div id="navbar-content">
                    <span><NavLink to={"/"} className={current === "home" ? "nav-current" : ""} onClick={() => click("home")}>Home</NavLink></span>
                    <span><NavLink to={"/plans"} className={current === "plans" ? "nav-current" : ""} onClick={() => click("plans")}>Plans</NavLink></span>
                    <span><NavLink to={"/contact"} className={current === "contact" ? "nav-current" : ""} onClick={() => click("contact")}>Contact</NavLink></span>
                    <span><NavLink to={"/about"} className={current === "about" ? "nav-current" : ""} onClick={() => click("about")}>About</NavLink></span>
                    <span><a href="https://github.com/SimonXVB" target="_blank">Github</a></span>
                </div>
            </div>
        </nav>
    )
};