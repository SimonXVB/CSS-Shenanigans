import { Card } from "./Card/Card"
import { ProfileContent } from "./Profile Content/ProfileContent"

export function Profile() {
    return (
        <section style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
            <Card/>
            <ProfileContent/>
        </section>
    )
};