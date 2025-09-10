import { useRef } from "react";
import styles from "./reviews.module.css"
import review1 from "../../Assets/review1.jpg"
import review2 from "../../Assets/review2.jpg"
import review3 from "../../Assets/review3.jpg"
import review4 from "../../Assets/review4.jpg"
import review5 from "../../Assets/review5.jpg"
import review6 from "../../Assets/review6.jpg"

export function Reviews() {

    const cards = [
        {
            img: review1,
            name: "John Business Name",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quo. Dignissimos est obcaecati distinctio perspiciatis culpa laborum mollitia totam doloribus deleniti omnis repellat esse, officiis, iste fugiat! Aut, asperiores."
        },
        {
            img: review2,
            name: "Tim Apple",
            desc: "Praesent eu metus quis erat blandit porta ac ac tortor. Morbi tincidunt pulvinar dictum. Nam ut varius nisl. Suspendisse vel augue at tortor vehicula accumsan. Ut suscipit purus ante, vel hendrerit ex egestas non. Ut nec pulvinar dui. In pretium sem tortor, ut lobortis nulla hendrerit ac. Vestibulum id metus magna. Ut non faucibus dolor. Nam convallis commodo eros, ut sollicitudin augue. Duis nec venenatis lorem. Etiam interdum nibh et enim cursus, finibus volutpat lacus tristique."
        },
        {
            img: review3,
            name: "Janette Apple",
            desc: "Nulla mollis, purus et tincidunt sagittis, nisl nunc maximus est, at lacinia sapien sem eget erat. Quisque consequat, nunc a sollicitudin porttitor, dolor metus convallis dui, eu cursus metus elit eget augue. Morbi et dapibus felis. Pellentesque quis tristique enim. Proin venenatis nisl a tortor varius, eu lacinia magna pellentesque. Nunc faucibus quam ac ipsum feugiat ornare ac in libero. Maecenas massa nunc, semper vel risus pulvinar, rutrum fermentum enim. Vestibulum viverra hendrerit ex id aliquet."
        },
        {
            img: review4,
            name: "Business People Inc.",
            desc: "Sed quis sem in massa eleifend varius. Duis lacinia pellentesque purus sed vehicula. Vestibulum cursus nibh eu odio malesuada auctor. Etiam sollicitudin vitae neque malesuada elementum. Maecenas ac diam eget erat suscipit ullamcorper. Etiam tristique maximus dui ac pulvinar. Phasellus imperdiet felis tortor, nec fermentum augue efficitur ut."
        },
        {
            img: review5,
            name: "Business Couple Ltd.",
            desc: "Vestibulum at nisi a lectus luctus efficitur non eu nisl. Vivamus sit amet scelerisque velit. Ut id sollicitudin nunc. Quisque vestibulum malesuada faucibus. Proin sed facilisis lacus. Fusce venenatis eros nec pretium commodo."
        },
        {
            img: review6,
            name: "Business Lady",
            desc: "Ut id sollicitudin nunc. Quisque vestibulum malesuada faucibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quo. Dignissimos est obcaecati distinctio perspiciatis culpa laborum mollitia totam doloribus deleniti omnis repellat esse, officiis, iste fugiat! Aut, asperiores."
        }
    ];

    const isAnimatingRef = useRef<boolean>(false);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const animationsRef = useRef<string[]>([styles.from_2_to_1, styles.from_3_to_2, styles.from_4_to_3, styles.from_5_to_4, styles.from_out_to_5, styles.from_1_to_out]);

    function shiftCards() {
        if(!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            animationsRef.current.unshift(animationsRef.current.pop()!);

            cardsRef.current.forEach((card, i) => {
                const nextIndex = i+1 !== animationsRef.current.length ? i+1 : 0;

                card.classList.remove(animationsRef.current[nextIndex]);
                card.classList.add(animationsRef.current[i]);
            });

            cardsRef.current[0].onanimationend = () => isAnimatingRef.current = false;
        };
    };

    function buttonAnim(e: React.MouseEvent) {
        const svg = e.currentTarget.children[0] as HTMLElement;
        
        svg.classList.add(styles.reviews_button_anim);
        svg.onanimationend = () => svg.classList.remove(styles.reviews_button_anim);
    };

    return (
        <div className={styles.home_reviews}>
            <div className={styles.home_reviews_h1}>
                <h1>Testimonials</h1>
            </div>
            <div className={styles.home_reviews_container}>
                {cards.map((card, i) => (
                    <div key={i} className={styles.review_card} ref={ref => {cardsRef.current[i] = ref!}}>
                        <div className={styles.card_desc}>
                            {card.desc}
                        </div>
                        <div className={styles.card_bottom}>
                            <img src={card.img} alt="Card image"/>
                            <p>{card.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className={styles.reviews_next_button} onClick={shiftCards} onMouseEnter={e => buttonAnim(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </button>
        </div>
    )
}