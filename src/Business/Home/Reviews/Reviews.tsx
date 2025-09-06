import { useRef } from "react";
import "./reviews.css"

export function Reviews() {
    const imgSrc = "src/Business/Assets/"

    const cards = [
        {
            img: imgSrc + "review1.jpg",
            name: "John Business Name",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quo. Dignissimos est obcaecati distinctio perspiciatis culpa laborum mollitia totam doloribus deleniti omnis repellat esse, officiis, iste fugiat! Aut, asperiores."
        },
        {
            img: imgSrc + "review2.jpg",
            name: "Tim Apple",
            desc: "Praesent eu metus quis erat blandit porta ac ac tortor. Morbi tincidunt pulvinar dictum. Nam ut varius nisl. Suspendisse vel augue at tortor vehicula accumsan. Ut suscipit purus ante, vel hendrerit ex egestas non. Ut nec pulvinar dui. In pretium sem tortor, ut lobortis nulla hendrerit ac. Vestibulum id metus magna. Ut non faucibus dolor. Nam convallis commodo eros, ut sollicitudin augue. Duis nec venenatis lorem. Etiam interdum nibh et enim cursus, finibus volutpat lacus tristique."
        },
        {
            img: imgSrc + "review3.jpg",
            name: "Janette Apple",
            desc: "Nulla mollis, purus et tincidunt sagittis, nisl nunc maximus est, at lacinia sapien sem eget erat. Quisque consequat, nunc a sollicitudin porttitor, dolor metus convallis dui, eu cursus metus elit eget augue. Morbi et dapibus felis. Pellentesque quis tristique enim. Proin venenatis nisl a tortor varius, eu lacinia magna pellentesque. Nunc faucibus quam ac ipsum feugiat ornare ac in libero. Maecenas massa nunc, semper vel risus pulvinar, rutrum fermentum enim. Vestibulum viverra hendrerit ex id aliquet."
        },
        {
            img: imgSrc + "review4.jpg",
            name: "Business People Inc.",
            desc: "Sed quis sem in massa eleifend varius. Duis lacinia pellentesque purus sed vehicula. Vestibulum cursus nibh eu odio malesuada auctor. Etiam sollicitudin vitae neque malesuada elementum. Maecenas ac diam eget erat suscipit ullamcorper. Etiam tristique maximus dui ac pulvinar. Phasellus imperdiet felis tortor, nec fermentum augue efficitur ut."
        },
        {
            img: imgSrc + "review5.jpg",
            name: "Business Couple Ltd.",
            desc: "Vestibulum at nisi a lectus luctus efficitur non eu nisl. Vivamus sit amet scelerisque velit. Ut id sollicitudin nunc. Quisque vestibulum malesuada faucibus. Proin sed facilisis lacus. Fusce venenatis eros nec pretium commodo."
        },
        {
            img: imgSrc + "review6.jpg",
            name: "Business Lady",
            desc: "Ut id sollicitudin nunc. Quisque vestibulum malesuada faucibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quo. Dignissimos est obcaecati distinctio perspiciatis culpa laborum mollitia totam doloribus deleniti omnis repellat esse, officiis, iste fugiat! Aut, asperiores."
        }
    ];

    const isAnimatingRef = useRef<boolean>(false);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const animationsRef = useRef<string[]>(["from-2-to-1", "from-3-to-2", "from-4-to-3", "from-5-to-4", "from-out-to-5", "from-1-to-out"]);

    function shiftCards() {
        if(!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            animationsRef.current.unshift(animationsRef.current.pop()!);

            cardsRef.current.forEach((card, i) => {
                card.style.animation = `${animationsRef.current[i]} 1s ease-in-out forwards`;
            });

            cardsRef.current[0].onanimationend = () => isAnimatingRef.current = false;
        };
    };

    function buttonAnim() {
        const svg = document.querySelector("#reviews-next-button svg") as HTMLElement;
        
        svg.classList.add("reviews-button-anim");
        svg.onanimationend = () => svg.classList.remove("reviews-button-anim");
    };

    return (
        <div id="home-reviews">
            <div id="home-reviews-h1">
                <h1>Testimonials</h1>
            </div>
            <div id="home-reviews-container">
                {cards.map((card, i) => (
                    <div key={i} className="review-card" ref={ref => {cardsRef.current[i] = ref!}}>
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
            <button id="reviews-next-button" onClick={shiftCards} onMouseEnter={buttonAnim}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </button>
        </div>
    )
}