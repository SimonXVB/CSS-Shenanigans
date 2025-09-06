import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './Homepage/Home'
import { Business } from './Business/Business'
import { Gallery } from './Gallery/Gallery'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/business' element={<Business/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)