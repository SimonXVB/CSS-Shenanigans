import { useRef, useState } from "react"
import styles from "./mobileNavbar.module.css"
import logo from "../../Assets/dummyLogoYellow.png"
import { Button } from "../Button/Button"
import { NavLink, useLocation } from "react-router"

interface NavInterface {
    active: string,
    setActive: (tab: string) => void
}

export function MobileNavbar({ active, setActive }: NavInterface) {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navRef = useRef<HTMLDivElement>(null);

    function navClick() {
        toggleNavbar();
        window.scrollTo(0, 0);
    };

    function toggleNavbar() {
        if(!open) {
            setOpen(true);

            document.body.style.overflow = "hidden";
        } else {
            navRef.current!.classList.toggle(styles.fade_out);

            navRef.current!.onanimationend = () => {
                navRef.current!.classList.toggle(styles.fade_out);
                setOpen(false);
            }

            document.body.style.overflow = "scroll";
        };
    };

    return (
        <nav className={styles.navbar_mobile}>
            <div className={styles.navbar_top}>
                <img src={logo} alt="Logo"/>
                <button className={styles.navbar_button} onClick={() => toggleNavbar()}>
                    <span className={open ? styles.close_line_top : ""}></span>
                    <span className={open ? styles.close_line_bottom : ""}></span>
                    <span className={open ? styles.close_line_bottom : ""}></span>
                </button>
            </div>
            {open &&
                <div ref={navRef} className={styles.mobile_navbar_open}>
                    <NavLink to={`/gallery/discover${location.search}`} onClick={navClick}>
                        <Button active={active === "discover"} setActive={() => setActive("discover")} title={"DISCOVER"}/>
                    </NavLink>
                    <div className={styles.mobile_navbar_bottom}>
                        <NavLink to="/gallery/about" onClick={navClick}>
                            <Button
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"/>
                                    </svg>
                                }
                                title={"About"}
                                active={active === "about"} 
                                setActive={() => setActive("about")}
                            />
                        </NavLink>
                        <NavLink to="/gallery/profile" onClick={navClick}>
                            <Button
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                }
                                title={"Profile"}
                                active={active === "profile"} 
                                setActive={() => setActive("profile")}
                            />
                        </NavLink>
                        <NavLink to="/gallery/login" onClick={navClick}>
                            <Button
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                                        <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                                    </svg>
                                }
                                title={"Login"}
                                active={active === "login"} 
                                setActive={() => setActive("login")}
                            />
                        </NavLink>
                    </div>
                </div>
            }
        </nav>
    )
};