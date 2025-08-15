import { useEffect, useState } from "react"
import "./profileContent.css"
import { Loading } from "../../Loading/Loading";
import { Product } from "../../Product/Product";

export function ProfileContent() {
    const [loading, setLoading] = useState<boolean>(true);
    const [content, setContent] = useState<[]>([]);

    async function getContent() {
        try {
            setLoading(true);

            const res = await fetch(`https://dummyjson.com/products?limit=30`);
            const content = await res.json();
            
            setContent(content.products);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        };
    };

    useEffect(() => {
        getContent();
    }, []);

    return (
        <div>
            {loading && <Loading/>}
            {!loading && 
                <div id="profile-content">
                    <p id="profile-content-name">MY Collection</p>
                    <div id="profile-content-wrapper">
                        {content.map((product, i) => (
                            <Product product={product} i={i} key={product["id"]}/>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
};