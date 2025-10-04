import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductCard from "../componentes/ProductCard";
import Navbar from '../componentes/Navbar';
import { useEffect, useState } from 'react';
import Carrito from '../componentes/Carrito';

export default function Carta({alAgregar}){
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [productosDelCarrito, setProductosDelCarrito] = useState([]);
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

    useEffect(() =>{
        console.log(productosDelCarrito)
    }, [productosDelCarrito])

    return(
        <div>
            <Navbar verCarrito={() => setMostrarCarrito(!mostrarCarrito)} />
            <div className="container text-center">
                <div className="row row-cols-auto" style={{ marginTop: '1rem', gap: '1rem', display: 'flex', justifyContent: 'center' }}>
                    {
                        productos.map(((producto, i) => (
                            <div className="col" key={i}>
                                <ProductCard producto={producto} alAgregar={() => setProductosDelCarrito([...productosDelCarrito, producto])}/>
                            </div>
                        )))
                    }
                </div>
            </div>
            {
                mostrarCarrito && <Carrito productosDelCarrito={productosDelCarrito} />
            }
        </div>
    )
}