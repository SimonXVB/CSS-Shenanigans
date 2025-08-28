import { BrowserRouter, Routes, Route } from "react-router"
import { Home } from "./Home/Home"
import { Navbar } from "./Navbar/Navbar"
import { Footer } from "./Footer/Footer"

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/plans"/>
            <Route path="/contact"/>
            <Route path="/about"/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
