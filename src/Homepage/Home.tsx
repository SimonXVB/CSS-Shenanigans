import { NavLink } from "react-router"

export function Home() {
    return (
        <div id="HOME">
            <p>HOME</p>
            <NavLink to={"business"}>Business</NavLink>
            <br/>
            <NavLink to={"gallery"}>Gallery</NavLink>
        </div>
    )
};