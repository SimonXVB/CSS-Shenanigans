import { Navbar } from "./Navbar/Navbar"
import { Gallery } from "./Gallery/Gallery"
import { About } from "./About/About"
import { Profile } from "./Profile/Profile"
import { Login } from "./Login/Login"
import { Footer } from "./Footer/Footer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router"

export function App() {
  return (
    <BrowserRouter>
    	<Navbar/>
		<Routes>
			<Route path="/discover" element={<Gallery/>}/>
			<Route path="/about" element={<About/>}/>
			<Route path="/profile" element={<Profile/>}/>
			<Route path="/login" element={<Login/>}/>
			<Route path="*" element={<Navigate to="/discover"/>}/>
		</Routes>
		<Footer/>
    </BrowserRouter>
  )
}