import styles from "./footer.module.css"
import { NavLink } from "react-router"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content_wrapper}>
                <div className={styles.footer_content}>
                    <span>Links:</span>
                    <span><NavLink to={"/business"}>About</NavLink></span>
                    <span><NavLink to={"/business"}>Plans</NavLink></span>
                    <span><a href="https://github.com/SimonXVB" target="_blank">GitHub</a></span>
                </div>
                <div className={styles.footer_content}>
                    <span>Address:</span>
                    <span>S Alameda Street 425</span>
                    <span>90013 Los Angeles</span>
                    <span>California</span>
                </div>
                <div className={styles.footer_content}>
                    <span>Hours:</span>
                    <span>Mo-Fr: 08:00am - 05:00pm</span>
                    <span>Sa: 08:00am - 02:00pm</span>
                    <span>So: Closed</span>
                </div>
            </div>
        </footer>
    )
};