import "./gallery.css"
import { GalleryHero } from "./GalleryHero/GalleryHero"
import { GalleryContent } from "./GalleryContent/GalleryContent"

export function Gallery() {
    return (
        <section id="gallery">
            <GalleryHero/>
            <GalleryContent/>
        </section>
    )
};