import "./home.css"
import logo from "../Assets/Logo.png"
import biz1 from "../Assets/biz1.jpg"
import biz2 from "../Assets/biz2.jpg"
import biz3 from "../Assets/biz3.jpg"
import biz4 from "../Assets/biz4.jpg"
import biz5 from "../Assets/biz5.jpg"
import { useEffect, useRef, useState } from "react"

export function Home() {
    const [imageNum, setImageNum] = useState<number>(1);
    const imageIntervalRef = useRef<number>(undefined);
    const imageRef = useRef<HTMLImageElement>(null);

    const cardContent = [
        {
            img: "/src/Assets/review1.jpg",
            name: "John Business Name",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quo. Dignissimos est obcaecati distinctio perspiciatis culpa laborum mollitia totam doloribus deleniti omnis repellat esse, officiis, iste fugiat! Aut, asperiores."
        },
        {
            img: "/src/Assets/review2.jpg",
            name: "Tim Apple",
            desc: "Praesent eu metus quis erat blandit porta ac ac tortor. Morbi tincidunt pulvinar dictum. Nam ut varius nisl. Suspendisse vel augue at tortor vehicula accumsan. Ut suscipit purus ante, vel hendrerit ex egestas non. Ut nec pulvinar dui. In pretium sem tortor, ut lobortis nulla hendrerit ac. Vestibulum id metus magna. Ut non faucibus dolor. Nam convallis commodo eros, ut sollicitudin augue. Duis nec venenatis lorem. Etiam interdum nibh et enim cursus, finibus volutpat lacus tristique."
        },
        {
            img: "/src/Assets/review3.jpg",
            name: "Janette Apple",
            desc: "Nulla mollis, purus et tincidunt sagittis, nisl nunc maximus est, at lacinia sapien sem eget erat. Quisque consequat, nunc a sollicitudin porttitor, dolor metus convallis dui, eu cursus metus elit eget augue. Morbi et dapibus felis. Pellentesque quis tristique enim. Proin venenatis nisl a tortor varius, eu lacinia magna pellentesque. Nunc faucibus quam ac ipsum feugiat ornare ac in libero. Maecenas massa nunc, semper vel risus pulvinar, rutrum fermentum enim. Vestibulum viverra hendrerit ex id aliquet."
        },
        {
            img: "/src/Assets/review4.jpg",
            name: "Business People Inc.",
            desc: "Sed quis sem in massa eleifend varius. Duis lacinia pellentesque purus sed vehicula. Vestibulum cursus nibh eu odio malesuada auctor. Etiam sollicitudin vitae neque malesuada elementum. Maecenas ac diam eget erat suscipit ullamcorper. Etiam tristique maximus dui ac pulvinar. Phasellus imperdiet felis tortor, nec fermentum augue efficitur ut."
        },
        {
            img: "/src/Assets/review5.jpg",
            name: "Business Couple Ltd.",
            desc: "Vestibulum at nisi a lectus luctus efficitur non eu nisl. Vivamus sit amet scelerisque velit. Ut id sollicitudin nunc. Quisque vestibulum malesuada faucibus. Proin sed facilisis lacus. Fusce venenatis eros nec pretium commodo."
        }
    ];

    function changeSrc(num: number) {
        clearInterval(imageIntervalRef.current);
        imageIntervalRef.current = setInterval(nextSrc, 5000);
        setImageNum(num);
    };

    function nextSrc() {
        setImageNum(prev => {
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
        <div id="home">
            <div id="home-hero">
                <div id="home-text">
                    <h1>Business.site</h1>
                    <h2>Insert generic software solutions tagline here!</h2>
                    <button>++ Contact Us ++</button>
                </div>
                <div id="home-img">
                    <img src={logo} alt="Logo"/>
                    <div id="img-slider">
                        <div id="carousel">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div id="home-about">
                <h1>We are [insert company]</h1>
                <div id="home-about-images">
                    <img ref={imageRef} src={`/src/Assets/biz${imageNum}.jpg`} alt="Image Large"/>
                    <div id="home-about-images-select">
                        <img onClick={() => changeSrc(1)} src={biz1} className={imageNum === 1 ? "image-active" : ""} alt="Stock 1"/>
                        <img onClick={() => changeSrc(2)} src={biz2} className={imageNum === 2 ? "image-active" : ""} alt="Stock 2"/>
                        <img onClick={() => changeSrc(3)} src={biz3} className={imageNum === 3 ? "image-active" : ""} alt="Stock 3"/>
                        <img onClick={() => changeSrc(4)} src={biz4} className={imageNum === 4 ? "image-active" : ""} alt="Stock 4"/>
                        <img onClick={() => changeSrc(5)} src={biz5} className={imageNum === 5 ? "image-active" : ""} alt="Stock 5"/>
                    </div>
                </div>
                <div id="home-about-desc">
                    <h2>++ Our Mission ++</h2>
                    <div className="home-desc-entry">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
                        </svg>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies semper justo, ut vehicula diam pharetra ut. Nulla lorem quam, venenatis id varius et, laoreet non libero. Fusce sit amet elit libero. Quisque non ullamcorper est. Aenean commodo augue et consequat bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut euismod est lorem, at finibus velit pellentesque a. Proin vitae lorem scelerisque, tincidunt sem a, tincidunt nibh. Morbi eu magna ante. Suspendisse pharetra rutrum purus a bibendum.</p>
                    </div>
                    <div className="home-desc-entry">
                        <p>Curabitur arcu ligula, sagittis quis enim a, eleifend molestie nisl. Nullam eleifend ac tortor eget gravida. Donec bibendum diam eu diam lobortis, tempus tincidunt nulla gravida. Cras ornare felis sit amet nibh elementum, sit amet consectetur nisl dapibus. Donec et turpis at massa elementum lobortis vitae ut leo. Maecenas sagittis metus vitae pharetra tempor. Praesent semper varius dictum. Integer aliquet ullamcorper turpis non pharetra. Maecenas egestas lacus semper justo eleifend, eget semper ante consequat. Nam dignissim viverra mauris ut laoreet. Phasellus vitae iaculis massa. Quisque ultrices efficitur euismod. Suspendisse odio est, finibus vel quam vel, iaculis imperdiet metus.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                        </svg>
                    </div>
                    <div className="home-desc-entry">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                            <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                        </svg>
                        <p>Sed tincidunt, ligula a rutrum tempor, diam lacus interdum quam, quis viverra leo nulla in nisi. Suspendisse gravida consequat felis a tincidunt. Proin maximus leo nunc. Donec quis aliquet orci. Nullam posuere velit aliquet, dapibus nisi eu, tempor justo. Pellentesque dictum magna in maximus semper. In porttitor hendrerit odio sed pulvinar. In dignissim rhoncus velit at commodo. Vestibulum ut nisl urna. Nullam egestas lorem nec auctor tempor. Nam eget iaculis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst.</p>
                    </div>
                </div>
            </div>
            <div id="home-reviews">
                <div id="home-reviews-h1">
                    <h1>Testimonials</h1>
                </div>
                <div id="home-reviews-container">
                    {cardContent.map((card, i) => (
                        <div key={i} className="review-card">
                            <div className="card-desc">
                                {card.desc}
                            </div>
                            <div className="card-bottom">
                                <img src={card.img} alt="Card image"/>
                                <p>{card.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="home-call-to-action">
                <p>Still got questions?</p>
                <button>++ Contact us today! ++</button>
            </div>
            --Footer Here--
        </div>
    )
}