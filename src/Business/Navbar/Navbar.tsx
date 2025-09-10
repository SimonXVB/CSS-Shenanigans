import { useState } from "react"
import styles from "./navbar.module.css"
import { NavLink } from "react-router"
 
export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.navbar_wrapper}>
            <div className={styles.navbar} style={open ? {width: "250px", height: "338px"} : {}}>
                <button className={styles.navbar_button} onClick={() => setOpen(!open)}>
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
                <div className={styles.navbar_content}>
                    <span><NavLink to={"/business"} className={styles.nav_current}>Home</NavLink></span>
                    <span><NavLink to={"/business"} className={styles.inactive}>Plans</NavLink></span>
                    <span><NavLink to={"/business"} className={styles.inactive}>Contact</NavLink></span>
                    <span><NavLink to={"/business"} className={styles.inactive}>About</NavLink></span>
                    <span><a href="https://github.com/SimonXVB" target="_blank">GitHub</a></span>
                </div>
            </div>
        </nav>
    )
};