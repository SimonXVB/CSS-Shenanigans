import "./reviews.css"

export function Reviews() {
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

    return (
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
    )
}