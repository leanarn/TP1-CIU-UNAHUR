import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProductCard from "../componentes/ProductCard";
import Navbar from '../componentes/Navbar';
import { useState, useEffect } from 'react';
import Carrito from '../componentes/Carrito';
import '../css/Carta.css';


export default function Carta() {

    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [productosDelCarrito, setProductosDelCarrito] = useState([]);
    const [manejarCarrito, setManejarCarrito] = useState(null); // Recibe las ordenes para el carrito como se hace en la clase
    const [productoAgregado, setProductoAgregado] = useState('');

    const productos = [
        {
            nombre: 'Café Espresso',
            categoria: 'bebidas',
            descripcion: 'Un café intenso y aromático en taza pequeña.',
            imagen: 'cafe_expresso.png',
            precio: 800
        },
        {
            nombre: 'Capuccino',
            categoria: 'bebidas',
            descripcion: 'Café con leche espumosa y un toque de cacao.',
            imagen: 'capuchino.png',
            precio: 1200
        },
        {
            nombre: 'Latte',
            categoria: 'bebidas',
            descripcion: 'Café espresso con abundante leche vaporizada.',
            imagen: 'latte.png',
            precio: 1100
        },
        {
            nombre: 'Té Verde',
            categoria: 'bebidas',
            descripcion: 'Infusión ligera, refrescante y antioxidante.',
            imagen: 'te_verde.png',
            precio: 700
        },
        {
            nombre: 'Medialunas',
            categoria: 'panificados',
            descripcion: 'Clásico argentino, perfecto para acompañar el café.',
            imagen: 'medialunas.png',
            precio: 300
        },
        {
            nombre: 'Tostado de Jamón y Queso',
            categoria: 'panificados',
            descripcion: 'Pan de molde con jamón y queso derretido.',
            imagen: 'tostado_jyq.png',
            precio: 1500
        },
        {
            nombre: 'Brownie con Nuez',
            categoria: 'pasteleria',
            descripcion: 'Bizcocho de chocolate húmedo con nueces.',
            imagen: 'brownie_nuez.png',
            precio: 900
        },
        {
            nombre: 'Limonada',
            categoria: 'bebidas',
            descripcion: 'Bebida refrescante con jugo de limón natural.',
            imagen: 'limonada.png',
            precio: 1000
        }
    ];

    useEffect(() => {
        if (!manejarCarrito) return; // Si no hay ninguna orden, no hace nada.

        const { orden, producto, nombreProducto } = manejarCarrito;
        
        // Buscamos si el producto ya existe
        const productoExistente = productosDelCarrito.find(
            item => item.nombre === (producto?.nombre || nombreProducto)
        );

        // agrega un producto nuevo o aumentar en uno si existente desde la carta.
        if (orden === 'agregar') {
            if (productoExistente) {
                // Quería usar la const de aumentarCantidad, pero el null la reescribe, hay que usarlo así
                const carritoActualizado = productosDelCarrito.map(item => item.nombre === producto.nombre
                    ? { ...item, cantidad: item.cantidad + 1 }
                        : 
                            item
                );
                setProductosDelCarrito(carritoActualizado);
            } 
            
                else {
                const nuevoCarrito = [...productosDelCarrito, { ...producto, cantidad: 1 }];
                setProductosDelCarrito(nuevoCarrito);
            }
        }

        if (orden === 'aumentar') {
            const carritoActualizado = productosDelCarrito.map(item =>
                item.nombre === nombreProducto ? { ...item, cantidad: item.cantidad + 1 } : item
            );
            setProductosDelCarrito(carritoActualizado);
        }

        // Disminuir cantidad
        if (orden === 'disminuir') {
            // Si la cantidad es mayor a 1 la reduce.
            if (productoExistente && productoExistente.cantidad > 1) { // Si el producto existe y la cantidad es 1 o mas
                const carritoActualizado = productosDelCarrito.map(item => item.nombre === nombreProducto ? 
                    { ...item, cantidad: item.cantidad - 1 } 
                        : 
                            item
                );
                setProductosDelCarrito(carritoActualizado);
            } 
            else {
                // Si es 1 lo borra
                const carritoFiltrado = productosDelCarrito.filter(item => item.nombre !== nombreProducto);
                setProductosDelCarrito(carritoFiltrado);
            }
        }
        // NULL para que no se ejecute varias veces NO BORRAR O SE SUMA SIN PARAR
        setManejarCarrito(null);
    }, [manejarCarrito, productosDelCarrito]);


    // CONSTS para clarificar el código
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

    return (
        <div>
            <Navbar verCarrito={() => setMostrarCarrito(!mostrarCarrito)} />
            <div className="container text-center">
                <div className="row row-cols-auto" style={{ marginTop: '1rem', gap: '1rem', display: 'flex', justifyContent: 'center' }}>
                    {productos.map((producto, i) => (

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