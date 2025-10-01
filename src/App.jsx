import { useState } from "react";
import Home from "./pages/Home";
import Navbar from './componentes/Navbar';
import Carta from './pages/Carta';
import Carrito from './pages/Carrito'

export default function App() {
    const [currentView, setCurrentView] = useState('Home');
    
    
    
    
    // Parte del carrito
    
    const [carrito, setCarrito] = useState([]); // Crea el carrito con el array vacio, cosa de que sea similar al obtener objetos de carta
    const agregarAlCarrito = (productoAgregado) => {const productoExistente = carrito.find(item => item.nombre === productoAgregado.nombre)
    // Para agregar al carrito

    if(productoExistente){
        setCarrito(
            carrito.map(item => item.nombre === productoAgregado.nombre ? {...item,cantidad:item.cantidad + 1} : item) // Tengo que devolver item o se rompe
        );
    } else{
        setCarrito([...carrito, {...productoAgregado, cantidad: 1}]); // No podía ponerlo despues del : creo que es por temas del array
    }
    alert(`${productoAgregado.nombre} se agregó, esto lo sacamos cuando esté este apartado hecho, es para comprobar si anda`); // Nota, no funcionan las "" tiene que ser simples
    }


    // Lo de arriba es para que funcione lo de agregar cosas al carrito



    return (  
        <div>
            { currentView !== 'Home' && <Navbar onClick={setCurrentView}/> }
            { currentView === 'Home' && <Home onClick={() => setCurrentView('Carta')} /> }
            { currentView === 'Carta' && <Carta alAgregar={agregarAlCarrito} /> }
            { currentView === 'Carrito' && <Carrito carrito = {carrito} /> }

        </div>
    );
}