import { useState } from "react";
import Home from "./pages/Home";
import Carta from './pages/Carta';

export default function App() {
    const [currentView, setCurrentView] = useState('Home');

    return (
        <div>
            { currentView === 'Home' && <Home onClick={() => setCurrentView('Carta')} /> }
            { currentView === 'Carta' && <Carta /> }
        </div>
    );
}
