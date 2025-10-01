import { useState } from "react";
import Home from "./pages/Home";
import Navbar from './componentes/Navbar';
import Carta from './pages/Carta';

export default function App() {
    const [currentView, setCurrentView] = useState('Home');

    return (
        <div>
            { currentView !== 'Home' && <Navbar onClick={setCurrentView}/> }
            { currentView === 'Home' && <Home onClick={() => setCurrentView('Carta')} /> }
            { currentView === 'Carta' && <Carta /> }
        </div>
    );
}