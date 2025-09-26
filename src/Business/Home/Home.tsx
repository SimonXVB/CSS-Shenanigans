import styles from "./home.module.css"
import { Hero } from "./Hero/Hero"
import { About } from "./About/About"
import { Reviews } from "./Reviews/Reviews"

export function Home() {
    return (
        <div className={styles.home}>
            <Hero/>
            <About/>
            <Reviews/>
        </div>
    )
}