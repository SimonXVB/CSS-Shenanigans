import styles from "./panel.module.css"
import { NavLink } from "react-router"

interface PanelInterface {
    to: string,
    imgSrc: string,
    alt: string,
    text: string
}

export function Panel({to, imgSrc, text, alt}: PanelInterface) {
    return (
        <NavLink className={styles.panel} to={to} onClick={() => scrollTo(0, 0)}>
            <img src={imgSrc} alt={alt}/>
            <p>{text}</p>
            <svg viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,700 L 0,262 C 130.28571428571428,224.75 260.57142857142856,187.5 381,159 C 501.42857142857144,130.5 612.0000000000001,110.74999999999997 711,148 C 809.9999999999999,185.25000000000003 897.4285714285716,279.5 1017,308 C 1136.5714285714284,336.5 1288.2857142857142,299.25 1440,262 L 1440,700 L 0,700 Z"></path>
            </svg>
        </NavLink>
    )
};