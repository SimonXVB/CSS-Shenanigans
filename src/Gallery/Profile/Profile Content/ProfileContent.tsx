import { useEffect, useState } from "react"
import styles from "./profileContent.module.css"
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
                <div className={styles.profile_content}>
                    <p className={styles.profile_content_name}>MY Collection</p>
                    <div className={styles.profile_content_wrapper}>
                        {content.map((product, i) => (
                            <Product product={product} i={i} key={product["id"]}/>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
};