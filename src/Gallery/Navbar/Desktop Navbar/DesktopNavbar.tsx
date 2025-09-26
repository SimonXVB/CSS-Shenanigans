import styles from "./desktopNavbar.module.css"
import logo from "../../Assets/dummyLogo.png"
import { Button } from "../Button/Button"
import { NavLink, useLocation } from "react-router"

export function DesktopNavbar() {
    const location = useLocation();

    function scrollTop() {
        window.scrollTo(0,0);
    };

    return (
        <nav className={styles.navbar}>
            <span className={styles.navbar_left}>
                <img src={logo} alt="Logo"/>
                <NavLink to={`/gallery/discover${location.search}`} onClick={scrollTop}><Button title={"DISCOVER"}/></NavLink>
            </span>
            <span className={styles.navbar_right}>
                <NavLink to="/gallery/profile" onClick={scrollTop}>
                    <Button
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                        }
                        title={"Profile"}
                    />
                </NavLink>
                <NavLink to="/gallery/login" onClick={scrollTop}>
                    <Button
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                            </svg>
                        }
                        title={"Login"}
                    />
                </NavLink>
            </span>
        </nav>
    )
};