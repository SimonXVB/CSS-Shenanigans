import "./footer.css"
import { NavLink } from "react-router"

export function Footer() {
    return (
        <footer id="footer">
            <div id="footer-content-wrapper">
                <div className="footer-content">
                    <span>Links:</span>
                    <span><NavLink to={"/about"}>About</NavLink></span>
                    <span><NavLink to={"/plans"}>Plans</NavLink></span>
                    <span><a href="https://github.com/SimonXVB" target="_blank">GitHub</a></span>
                </div>
                <div className="footer-content">
                    <span>Address:</span>
                    <span>S Alameda Street 425</span>
                    <span>90013 Los Angeles</span>
                    <span>California</span>
                </div>
                <div className="footer-content">
                    <span>Hours:</span>
                    <span>Mo-Fr: 08:00am - 05:00pm</span>
                    <span>Sa: 08:00am - 02:00pm</span>
                    <span>So: Closed</span>
                </div>
            </div>
        </footer>
    )
};