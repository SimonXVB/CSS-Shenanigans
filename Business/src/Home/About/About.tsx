import { useEffect, useRef, useState } from "react";
import "./about.css"

export function About() {
    const [curretnImg, setCurrentImg] = useState<number>(1);
    const imageIntervalRef = useRef<number>(undefined);
    const imageRef = useRef<HTMLImageElement>(null);

    function changeSrc(num: number) {
        clearInterval(imageIntervalRef.current);
        imageIntervalRef.current = setInterval(nextSrc, 5000);
        setCurrentImg(num);
    };

    function nextSrc() {
        setCurrentImg(prev => {
            if(prev + 1 > 5) {
                return 1;
            } else {
                return prev + 1;
            }
        });
    };

    useEffect(() => {
        imageIntervalRef.current = setInterval(nextSrc, 5000);
        return () => clearInterval(imageIntervalRef.current);
    }, []);

    return (
        <div id="home-about">
            <h1>We are [insert company]</h1>
            <div id="home-about-content">
                <div id="home-about-images">
                    <div id="home-about-main-image-wrapper">
                        <img ref={imageRef} src={`/src/Assets/biz${curretnImg}.jpg`} alt="Home About Main Image"/>
                    </div>
                    <div id="home-about-images-select">
                        <img onClick={() => changeSrc(1)} src={"/src/Assets/biz1.jpg"} className={curretnImg === 1 ? "image-active" : ""} alt="Stock 1"/>
                        <img onClick={() => changeSrc(2)} src={"/src/Assets/biz2.jpg"} className={curretnImg === 2 ? "image-active" : ""} alt="Stock 2"/>
                        <img onClick={() => changeSrc(3)} src={"/src/Assets/biz3.jpg"} className={curretnImg === 3 ? "image-active" : ""} alt="Stock 3"/>
                        <img onClick={() => changeSrc(4)} src={"/src/Assets/biz4.jpg"} className={curretnImg === 4 ? "image-active" : ""} alt="Stock 4"/>
                        <img onClick={() => changeSrc(5)} src={"/src/Assets/biz5.jpg"} className={curretnImg === 5 ? "image-active" : ""} alt="Stock 5"/>
                    </div>
                </div>
                <div id="home-about-desc">
                    <div className="home-about-desc-entry">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
                        </svg>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies semper justo, ut vehicula diam pharetra ut. Nulla lorem quam, venenatis id varius et, laoreet non libero. Fusce sit amet elit libero. Quisque non ullamcorper est. Aenean commodo augue et consequat bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut euismod est lorem, at finibus velit pellentesque a. Proin vitae lorem scelerisque, tincidunt sem a, tincidunt nibh. Morbi eu magna ante. Suspendisse pharetra rutrum purus a bibendum.</p>
                    </div>
                    <div className="home-about-desc-entry">
                        <p>Curabitur arcu ligula, sagittis quis enim a, eleifend molestie nisl. Nullam eleifend ac tortor eget gravida. Donec bibendum diam eu diam lobortis, tempus tincidunt nulla gravida. Cras ornare felis sit amet nibh elementum, sit amet consectetur nisl dapibus. Donec et turpis at massa elementum lobortis vitae ut leo. Maecenas sagittis metus vitae pharetra tempor. Praesent semper varius dictum. Integer aliquet ullamcorper turpis non pharetra. Maecenas egestas lacus semper justo eleifend, eget semper ante consequat. Nam dignissim viverra mauris ut laoreet.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                        </svg>
                    </div>
                    <div className="home-about-desc-entry">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                            <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                        </svg>
                        <p>Sed tincidunt, ligula a rutrum tempor, diam lacus interdum quam, quis viverra leo nulla in nisi. Suspendisse gravida consequat felis a tincidunt. Proin maximus leo nunc. Donec quis aliquet orci. Nullam posuere velit aliquet, dapibus nisi eu, tempor justo. Pellentesque dictum magna in maximus semper. In porttitor hendrerit odio sed pulvinar. In dignissim rhoncus velit at commodo. Vestibulum ut nisl urna. Nullam egestas lorem nec auctor tempor. Nam eget iaculis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}