import styles from "./galleryContent.module.css"
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router";
import { Loading } from "../../Loading/Loading";
import { Product } from "../../Product/Product";

export function GalleryContent() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [content, setContent] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get("page")) || 1);

    const totalPages = useRef<number>(null);
    const LIMIT = 30;

    async function getContent(page: number) {
        try {
            setLoading(true);

            const res = await fetch(`https://dummyjson.com/products?skip=${(page - 1) * LIMIT}&limit=${LIMIT}`);
            const content = await res.json();
            
            setContent(content.products);
            totalPages.current = Math.ceil(content.total / LIMIT);

            if(Number(searchParams.get("page")) > totalPages.current! || Number(searchParams.get("page")) < 1) {
                setCurrentPage(1);
                setSearchParams({page: "1"});
            };

            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        };
    };

    function setPage(page: number) {
        setCurrentPage(page);
        setSearchParams({page: String(page)});
        window.scrollTo(0, 0);

        getContent(page);
    };

    useEffect(() => {
        getContent(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className={styles.gallery_content}>
            {loading && <Loading/>}
            {!loading && 
                <>
                    <div className={styles.content_wrapper}>
                        {content.map((product, i) => (
                            <Product product={product} i={i} key={product["id"]}/>
                        ))}
                    </div>
                    <div className={styles.content_pages}>
                        {currentPage >= 4 && <span className={styles.first_page} onClick={() => setPage(1)}>1 ...</span>}
                        <div>
                            {(currentPage - 2) > 0 && <span onClick={() => setPage(currentPage - 2)}>{currentPage - 2}</span>}
                            {(currentPage - 1) > 0 && <span onClick={() => setPage(currentPage - 1)}>{currentPage - 1}</span>}
                        </div>
                        <span className={styles.current_page}>{currentPage}</span>
                        <div>
                            {(currentPage + 1) <= totalPages.current! && <span onClick={() => setPage(currentPage + 1)}>{currentPage + 1}</span>}
                            {(currentPage + 2) <= totalPages.current! && <span onClick={() => setPage(currentPage + 2)}>{currentPage + 2}</span>}
                        </div>
                    </div>
                </>
            }
        </section>
    )
};