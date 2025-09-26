import styles from "./galleryHero.module.css"

export function GalleryHero() {
    return (
        <header className={styles.gallery_hero}>
            <div className={styles.hero_text}>
                <h1>Gallery</h1>
                <h2>CSS only - no backend</h2>
                <p>Data courtesy of <a href="https://dummyjson.com/" target="_blank">DummyJSON</a></p>
            </div>
        </header>
    )
};