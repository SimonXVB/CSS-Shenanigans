import { useState } from "react"
import "./product.css"

export function Product({ product, i }: { product: never, i: number }) {
    const [imgLoading, setImageLoading] = useState(true);

    return (
        <div className="product" style={{animationDelay: `${i * 50}ms`}}>
            {imgLoading && <div className="loading"></div>}
            <img onLoad={() => setImageLoading(false)} src={product["thumbnail"]} loading="lazy"/>
            <div className="product-info">
                <p>{product["title"]}</p>
            </div>
        </div>
    )
};