import "./discover.css"
import { GalleryHero } from "./GalleryHero/GalleryHero"
import { GalleryContent } from "./GalleryContent/GalleryContent"

export function Discover() {
    return (
        <section id="gallery">
            <GalleryHero/>
            <GalleryContent/>
        </section>
    )
};