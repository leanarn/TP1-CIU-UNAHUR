import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carta from './pages/Carta';

export default function App() {
    
    return (  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carta" element={<Carta />} />
            </Routes>
        </BrowserRouter>
    );
}