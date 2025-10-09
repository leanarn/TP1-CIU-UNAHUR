import ProductCard from "../componentes/ProductCard";
import Navbar from '../componentes/Navbar';
import { useState, useEffect } from 'react';
import Carrito from '../componentes/Carrito';
import '../css/Carta.css'; 

export default function Carta() {

    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [temaOscuro, setTemaOscuro] = useState(() => {
    const guardado = localStorage.getItem('temaOscuro');
    return guardado ? JSON.parse(guardado) : false;
});

    // localStorage
    const [productosDelCarrito, setProductosDelCarrito] = useState(() => {
    const guardado = localStorage.getItem('carritoApp');
    if (guardado) {
        try {
            return JSON.parse(guardado);
        } catch (e) {
            console.error("Error al cargar el carrito de localStorage:", e);
            return []; 
        }
    }
    return [];
});



    const [manejarCarrito, setManejarCarrito] = useState(null); // Recibe las ordenes para el carrito como se hace en la clase
    const [productoAgregado, setProductoAgregado] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const productos = [
        {
            nombre: 'Café Espresso',
            categoria: 'Calientes',
            descripcion: 'Un café intenso y aromático en taza pequeña.',
            imagen: 'cafe_expresso.png',
            precio: 800
        },
        {
            nombre: 'Capuccino',
            categoria: 'Calientes',
            descripcion: 'Café con leche espumosa y un toque de cacao.',
            imagen: 'capuchino.png',
            precio: 1200
        },
        {
            nombre: 'Latte',
            categoria: 'Calientes',
            descripcion: 'Café espresso con abundante leche vaporizada.',
            imagen: 'latte.png',
            precio: 1100
        },
        {
            nombre: 'Té Verde',
            categoria: 'Frios',
            descripcion: 'Infusión ligera, refrescante y antioxidante.',
            imagen: 'te_verde.png',
            precio: 700
        },
        {
            nombre: 'Medialunas',
            categoria: 'Dulce',
            descripcion: 'Clásico argentino, perfecto para acompañar el café.',
            imagen: 'medialunas.png',
            precio: 300
        },
        {
            nombre: 'Tostado de Jamón y Queso',
            categoria: 'Salado',
            descripcion: 'Pan de molde con jamón y queso derretido.',
            imagen: 'tostado_jyq.png',
            precio: 1500
        },
        {
            nombre: 'Brownie con Nuez',
            categoria: 'Dulce',
            descripcion: 'Bizcocho de chocolate húmedo con nueces.',
            imagen: 'brownie_nuez.png',
            precio: 900
        },
        {
            nombre: 'Limonada',
            categoria: 'Frios',
            descripcion: 'Bebida refrescante con jugo de limón natural.',
            imagen: 'limonada.png',
            precio: 1000
        }
    ];
    //Filtrar productos según categoría seleccionada
    const productosFiltrados = categoriaSeleccionada
        ? productos.filter(p => p.categoria === categoriaSeleccionada)
        : productos;

    //Dropdown de categorías
    const categorias = ["Frios", "Calientes", "Salado", "Dulce"];




 // Disparadores de eventos
    const agregarAlCarrito = (producto) => {
        setManejarCarrito({ orden: 'agregar', producto: producto });
        setProductoAgregado(producto.nombre);
        
        
        setTimeout(() => { // Efecto de producto agregado con un tiempo de 500, probé con 1000 y 2000 pero era muy largo
            setProductoAgregado('');
        }, 500); 
    };

    const aumentarCantidad = (nombreProducto) => {
        setManejarCarrito({ orden: 'aumentar', nombreProducto: nombreProducto });
    };

    const disminuirCantidad = (nombreProducto) => {
        setManejarCarrito({ orden: 'disminuir', nombreProducto: nombreProducto });
    };

    const confirmarPedido = () => {
        const total = productosDelCarrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
        alert(`Pedido Confirmado por un total de $${total.toFixed(2)}. ¡Gracias por tu compra!`);
        
        setProductosDelCarrito([]);
        setMostrarCarrito(false);
    };

useEffect(() => {
    if (!manejarCarrito) return;

    const { orden, producto, nombreProducto } = manejarCarrito;

    
    setProductosDelCarrito(prevCarrito => { // setter para acceder al estado previo del carrito (prevCarrito)

        const nombreItem = producto?.nombre || nombreProducto;
        const productoExistente = prevCarrito.find(item => item.nombre === nombreItem);



        if (orden === 'agregar') {
            if (productoExistente) {
                
                return prevCarrito.map(item =>  item.nombre === nombreItem ? { ...item, cantidad: item.cantidad + 1 } : item);  // Si ya existe en el carrito, aumenta su cantidad en 1
            } 
            else {
                return [...prevCarrito, { ...producto, cantidad: 1 }]; // Si no existe lo agrega 
            }
        } 
        
        else if (orden === 'aumentar') {
            
            return prevCarrito.map(item => item.nombre === nombreProducto ? { ...item, cantidad: item.cantidad + 1 } : item // Aumentar desde el Carrito
            );
        } 
        
        else if (orden === 'disminuir') {
            if (productoExistente && productoExistente.cantidad > 1) {
                
                return prevCarrito.map(item =>  item.nombre === nombreProducto ? { ...item, cantidad: item.cantidad - 1 } : item // Restar 1 si la cantidad es > 1
                );
            } 
            else if (productoExistente && productoExistente.cantidad === 1) { // Filtrar si la cantidad es 1, no se usa delete por principio de react sobre no modificar los arrays
                
                return prevCarrito.filter(item => item.nombre !== nombreProducto);
            }
        }

        // Si la orden no se procesó o no aplica, devuelve el carrito sin cambios
        return prevCarrito; 
    });

    // NO BORRAR ESTO O EMPIEZA A SUMAR SIN PARAR
    setManejarCarrito(null);
    

}, [manejarCarrito]);

useEffect(() => {
    
    if (productosDelCarrito.length > 0) { // Convierte el array a JSON de un string y lo guarda con la clave 'carritoApp'
        localStorage.setItem('carritoApp', JSON.stringify(productosDelCarrito));
    } else {
        // Cuando el carrito queda vacío (ej. después de confirmar), borra el dato
        localStorage.removeItem('carritoApp');
    }
}, [productosDelCarrito]); // Se ejecuta cada vez que el array cambia


////////

// Sincroniza el tema con el <body> y lo guarda en localStorage
useEffect(() => {
  if (temaOscuro) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
  localStorage.setItem('temaOscuro', JSON.stringify(temaOscuro));
}, [temaOscuro]);


return (
    <div className={temaOscuro ? "carta-container dark-theme" : "carta-container"}>
        <Navbar verCarrito={() => setMostrarCarrito(!mostrarCarrito)} />

        {/* Botón cambio de tema */}
        <div className="container d-flex justify-content-end mt-3 me-3">
            <button
                className={`btn btn-toggle-tema ${temaOscuro ? "oscuro" : "claro"}`}
                onClick={() => setTemaOscuro(!temaOscuro)}
                title={temaOscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
                <i className={`bi ${temaOscuro ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
            </button>
        </div>
            {/* 🔹 Dropdown Categorías */}
            <div className="container mt-3 d-flex">
                <div className="dropdown ms-auto">
                    <button 
                        className="btn btn-secondary dropdown-toggle bg-transparent text-muted border-0" 
                        type="button" 
                        id="dropdownMenuButton" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        Categorías {categoriaSeleccionada ? `: ${categoriaSeleccionada}` : ""}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <button className="dropdown-item" onClick={() => setCategoriaSeleccionada(null)}>
                                Todas
                            </button>
                        </li>
                        {categorias.map((cat, i) => (
                            <li key={i}>
                                <button className="dropdown-item" onClick={() => setCategoriaSeleccionada(cat)}>
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 🔹 Productos filtrados */}
            <div className="container text-center">
                <div className="row row-cols-auto" style={{ marginTop: '1rem', gap: '1rem', display: 'flex', justifyContent: 'center' }}>
                    {productosFiltrados.map((producto, i) => (
                        <div className="col mb-4" key={i}>
                            <ProductCard
                                producto={producto}
                                alAgregar={() => agregarAlCarrito(producto)}
                                fueAgregado={productoAgregado === producto.nombre}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {mostrarCarrito && (
                                <Carrito
                                    productosDelCarrito={productosDelCarrito}
                                    aumentar={aumentarCantidad}
                                    disminuir={disminuirCantidad}
                                    cerrarCarrito={() => setMostrarCarrito(false)}
                                    onConfirmar={confirmarPedido}
                                />
            )}
        </div>
    );
}