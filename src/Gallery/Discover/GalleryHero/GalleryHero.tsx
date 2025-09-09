import "./galleryHero.css"

export function GalleryHero() {
    return (
        <header id="gallery-hero">
            <div id="hero-text">
                <h1>This is Gallery CSS</h1>
                <h2>A CSS only - no backend project</h2>
                <p>Data courtesy of <a href="https://dummyjson.com/" target="_blank">DummyJSON</a></p>
            </div>
            <div id="hero-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
                <p>Look at stuff</p>
            </div>
        </header>
    )
};