import { Routes, Route, Navigate } from "react-router";
import { Navbar } from "./Navbar/Navbar";
import { Discover } from "./Discover/Discover";
import { Profile } from "./Profile/Profile";
import { Login } from "./Login/Login";
import { Footer } from "./Footer/Footer";

export function Gallery() {
    return (
        <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
            <Navbar/>
            <Routes>
                <Route path="discover" element={<Discover/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<Navigate to="/gallery/discover"/>}/>
            </Routes>
            <Footer/>
            <style>@import url('https://fonts.googleapis.com/css2?family=Mozilla+Headline:wght@200..700&display=swap');</style>
        </div>
    );
};