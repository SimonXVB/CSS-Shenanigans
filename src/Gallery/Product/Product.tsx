import { useState } from "react"
import styles from "./product.module.css"

export function Product({ product, i }: { product: never, i: number }) {
    const [imgLoading, setImageLoading] = useState(true);

    return (
        <div className={styles.product} style={{animationDelay: `${i * 50}ms`}}>
            {imgLoading && <div className={styles.loading}></div>}
            <img onLoad={() => setImageLoading(false)} src={product["thumbnail"]} loading="lazy"/>
            <div className={styles.product_info}>
                <p>{product["title"]}</p>
            </div>
        </div>
    )
};