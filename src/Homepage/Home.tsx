import "./home.css"
import businessLogo from "./Assets/business-logo.png"
import galleryLogo from "./Assets/gallery-logo.png"
import { Panel } from "./Panel/Panel"

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
            <div id="panels">
                <Panel to="business" imgSrc={businessLogo} text="Business" alt="Business Logo"/>
                <Panel to="gallery" imgSrc={galleryLogo} text="Gallery" alt="Gallery Logo"/>
            </div>
            <div id="footer">
                <a href="https://github.com/SimonXVB/CSS-Shenanigans" target="_blank">GitHub</a>
            </div>
        </div>
    )
};