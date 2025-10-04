import { useState } from "react";

export default function Carrito({ productosDelCarrito }){
    const [carrito, setCarrito] = useState(productosDelCarrito);

    const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

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

    // A partir de acá van las funciones para agregar y restar productos DENTRO del carrito
    const aumentarCantidad = (nombreProducto) => {
        setCarrito(
            carrito.map(item => item.nombre === nombreProducto ? {...item, cantidad: item.cantidad + 1} // sumar 1 al producto
                :
                    item // para que no se rompan los productos que no se aumentan con el map
          )
        );
    };

    const disminuirCantidad = (nombreProducto) => {
        const productoAEditar = carrito.find(item => item.nombre === nombreProducto);

        if(productoAEditar.cantidad === 1){
            setCarrito(carrito.filter(item => item.nombre !== nombreProducto)); // Se quita el producto con filter si la cantidad de producto es 1 y se clickea en -
        }
        else{
            setCarrito(carrito.map(item => item.nombre === nombreProducto ? {...item, cantidad: item.cantidad - 1} // Resta 1 si es mas de 1
                : 
                    item)) // Para que no se rompa igual que al sumar
        }
    }

    // Hasta acá la sección de agregar y sacar productos DENTRO del carrito (Se podrá reutilizar para carta?)

    return(
        <div style={{ position: 'absolute', top: '0', width: '100%', height: '100%', backgroundColor: '#00000042' }}>
            <div style={{ width: '60%', marginLeft: '20%', marginTop: '5%', padding: '10px', backgroundColor: '#fff', borderRadius: '10px' }}>
                <div className="container mt-5">
                    <h1 className="fw-bold text-center mb-4 text-primary">
                        Mi Pedido ☕
                    </h1>
                    
                    {carrito.length === 0 ? (
                        <div className="alert alert-info text-center">
                            El carrito está vacío.
                        </div> ) // Por si el carrito está vacío 
                            : 
                                (
                                <div className="row justify-content-center">
                                    <div className="col-md-8">
                                        
                                        {/* productos con .map() para iterar */}
                                        <ul className="list-group mb-4">
                                            {carrito.map((item, index) => (
                                                <li 
                                                    key={index} 
                                                    className="list-group-item d-flex justify-content-between align-items-center"
                                                    style={{ padding: '10px 15px' }} // Espaciado
                                                    > {/* Ccerado de LI */}
                                                    <div className="d-flex align-items-center">
                                                        {/* Imagen Chica */}
                                                        <img 
                                                            src={item.imagen} // URL de la imagen en Carta
                                                            alt={item.nombre} 
                                                            style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px', marginRight: '15px' }}
                                                        />{/* Nombre del Producto */}
                                                        <span className="fw-bold">{item.nombre}</span>
                                                    </div>

                                                    {/*control de cantidad */}
                                                    <div className="d-flex align-items-center">
                                                        <button 
                                                            className="btn btn-sm btn-outline-danger me-2"
                                                            onClick={() => disminuir(item.nombre)}
                                                        >
                                                            {/* Si la cantidad es 1, muestra un ícono de eliminar */}
                                                            {item.cantidad === 1 ? <i className="bi bi-trash"></i> : <i className="bi bi-dash"></i>}
                                                        </button>
                                                        
                                                        <span className="badge bg-secondary text-light fs-6" style={{ width: '30px' }}>
                                                            {item.cantidad}
                                                        </span>
                                                        
                                                        <button 
                                                            className="btn btn-sm btn-outline-success ms-2"
                                                            onClick={() => aumentar(item.nombre)} 
                                                        >
                                                            <i className="bi bi-plus"></i>
                                                        </button>
                                                    </div>

                                                        {/* Nombre y Cantidad */}
                                                        <div>
                                                        <span className="badge bg-warning text-dark me-2">{item.cantidad}x</span>
                                                        <span className="fw-bold">{item.nombre}</span>
                                                    </div>
                                                    
                                                    {/* Subtotal por Item */}
                                                    <span className="text-muted">
                                                        ${(item.precio * item.cantidad).toFixed(2)}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                {/* TOTAL FINAL */}
                                <div className="d-flex justify-content-between align-items-center border-top pt-3 fw-bold fs-5">
                                    <span>TOTAL:</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                
                                {/* Botón de pedido (Simulación con Alert) */}
                                <div className="mt-4">
                                    <button 
                                        className="btn btn-success btn-lg w-100"
                                        onClick={() => alert(`Pedido Confirmado por un total de $${total.toFixed(2)}. Gracias por su compra!!!`)}
                                    >
                                        Confirmar Pedido
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}