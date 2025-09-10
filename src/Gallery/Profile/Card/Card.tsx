import { useEffect, useState } from "react"
import styles from "./card.module.css"

export function Card() {
    const [loading, setLoading] = useState<boolean>(true);
    const [dummy, setDummy] = useState<never>();

    const randUser = Math.floor(Math.random() * 20) + 1;

    async function getDummyUser() {
        try {
            setLoading(true);

            const res = await fetch(`https://dummyjson.com/users/${randUser}`);
            const user = await res.json();

            setDummy(user);
            setLoading(false); 
        } catch (error) {
           console.log(error);
           setLoading(false);
        }
    };

    useEffect(() => {
        getDummyUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.card_wrapper} id="card-wrapper">
            <div className={styles.card}>
                <img src={!loading ? dummy!["image"] : undefined}/>
                {!loading &&
                    <>
                        <div className={styles.profile_top}>
                            <p className={styles.profile_name}>{dummy!["firstName"] + " " + dummy!["lastName"]}</p>
                            <p className={styles.profile_location}>{dummy!["address"]["city"] + " - " + dummy!["address"]["state"]}</p>
                        </div>
                        <div className={styles.profile_bottom}>
                            <span>Followers: {Math.floor(Math.random() * 2500)}</span>
                            <span>Following: {Math.floor(Math.random() * 2500)}</span>
                            <span>Photos: 30</span>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}