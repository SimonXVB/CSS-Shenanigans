import "./home.css"
import { Hero } from "./Hero/Hero"
import { About } from "./About/About"
import { Reviews } from "./Reviews/Reviews"

export function Home() {
    return (
        <div id="home">
            <Hero/>
            <About/>
            <Reviews/>
            <div id="home-call-to-action">
                <p>Still got questions?</p>
                <button>++ Contact us today! ++</button>
            </div>
        </div>
    )
}