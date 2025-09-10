import { Navbar } from "./Navbar/Navbar";
import { Home } from "../Business/Home/Home";
import { Footer } from "./Footer/Footer";

export function Business() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    );
}