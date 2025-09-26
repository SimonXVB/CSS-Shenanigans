import { useState } from "react"
import styles from "./product.module.css"

export function Product({ product, i }: { product: never, i: number }) {
    const [imgLoading, setImageLoading] = useState(true);

    function randRotate() {
        const randPlusMinus = Math.random() < 0.5 ? 1 : -1;
        return (Math.floor(Math.random() * 3)) * randPlusMinus;
    };

    return (
        <div className={styles.product} style={{animationDelay: `${i * 50}ms`, rotate: randRotate() + "deg"}}>
            {imgLoading && <div className={styles.loading}></div>}
            <img onLoad={() => setImageLoading(false)} src={product["thumbnail"]} loading="lazy"/>
            <p>{product["title"]}</p>
        </div>
    )
};