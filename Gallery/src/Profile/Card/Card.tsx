import { useEffect, useState } from "react"
import "./card.css"

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
        <div id="card-wrapper">
            <div id="card">
                <img src={!loading ? dummy!["image"] : undefined} alt="" />
                {!loading &&
                    <>
                        <div id="profile-top">
                            <p id="profile-name">{dummy!["firstName"] + " " + dummy!["lastName"]}</p>
                            <p id="profile-location">{dummy!["address"]["city"] + " - " + dummy!["address"]["state"]}</p>
                        </div>
                        <div id="profile-bottom">
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