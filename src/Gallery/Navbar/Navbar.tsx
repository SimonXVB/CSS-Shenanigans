import { useState } from "react"
import { useLocation } from "react-router"
import { DesktopNavbar } from "./Desktop Navbar/DesktopNavbar"
import { MobileNavbar } from "./Mobile Navbar/MobileNavbar"

export function Navbar() {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname.split("/")[1] || "discover");

    return (
        <>
            <DesktopNavbar active={active} setActive={setActive}/>
            <MobileNavbar active={active} setActive={setActive}/>
        </>
    )
};