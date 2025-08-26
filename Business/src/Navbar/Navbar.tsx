import "./navbar.css"
 
export function Navbar() {
    return (
        <nav id="navbar-wrapper">
            <div id="navbar">
                <div id="nav-left">
                    <span>Home</span>
                    <span>Plans</span>
                    <span>Contact</span>
                </div>
                <h1>business</h1>
                <div id="nav-right">
                    <span>About</span>
                    <span>GitHub</span>
                </div>
            </div>
        </nav>
    )
};