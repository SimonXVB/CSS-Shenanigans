import { BrowserRouter, Routes, Route } from "react-router"
import { Home } from "./Home/Home"
import { Navbar } from "./Navbar/Navbar"

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
    </BrowserRouter>
  )
}

export default App
