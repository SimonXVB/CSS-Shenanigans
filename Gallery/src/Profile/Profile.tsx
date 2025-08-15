import "./profile.css"
import { Card } from "./Card/Card"
import { ProfileContent } from "./Profile Content/ProfileContent"

export function Profile() {
    return (
        <section id="profile">
            <Card/>
            <ProfileContent/>
        </section>
    )
};