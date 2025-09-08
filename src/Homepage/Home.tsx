import "./home.css"
import { NavLink } from "react-router"

export function Home() {
    return (
        <div id="HOME">
            <div id="header">
                <div>
                    <span id="css">CSS</span>
                    <span id="text">Shenanigans</span>
                </div>
                <div>A showcase site for some of my CSS projects.</div>
            </div>
            <NavLink to={"business"}>Business</NavLink>
            <br/>
            <NavLink to={"gallery"}>Gallery</NavLink>
        </div>
    )
};