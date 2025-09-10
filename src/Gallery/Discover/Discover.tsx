import { GalleryHero } from "./GalleryHero/GalleryHero"
import { GalleryContent } from "./GalleryContent/GalleryContent"

export function Discover() {
    return (
        <section style={{flexGrow: 1}}>
            <GalleryHero/>
            <GalleryContent/>
        </section>
    )
};