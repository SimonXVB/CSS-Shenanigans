import styles from "./home.module.css"
import businessLogo from "./Assets/business-logo.png"
import galleryLogo from "./Assets/gallery-logo.png"
import { Panel } from "./Panel/Panel"

export function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.header}>
                <div>
                    <span className={styles.css}>CSS</span>
                    <span className={styles.text}>Shenanigans</span>
                </div>
                <div>A showcase site for some of my CSS projects.</div>
            </div>
            <div className={styles.panels}>
                <Panel to="business" imgSrc={businessLogo} text="Business" alt="Business Logo"/>
                <Panel to="gallery" imgSrc={galleryLogo} text="Gallery" alt="Gallery Logo"/>
            </div>
            <div className={styles.footer}>
                <a href="https://github.com/SimonXVB/CSS-Shenanigans" target="_blank">GitHub</a>
            </div>
        </div>
    )
};