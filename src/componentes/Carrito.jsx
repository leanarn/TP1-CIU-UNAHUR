import '../css/Carrito.css'

export default function Carrito({ productosDelCarrito, aumentar, disminuir, cerrarCarrito, onConfirmar }) {

    // Calcula el total del pedido. Esta lógica está perfecta aquí.
    const total = productosDelCarrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    return (
        <div
            style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: '#00000080', zIndex: 100 }} // Fondo semi-transparente que cubre toda la pantalla
            onClick={cerrarCarrito} // Cierra el modal si se hace clic en el fondo
        >
            {/* Contenedor del carrito*/}
            <div
                style={{ width: '60%', minWidth: '350px', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                // Lo de arriba es un fondo medio gris para cuando se abre el carrito

                onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del carrito lo cierre
            >
                <div className="container mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1 className="fw-bold text-primary mb-0">
                            Mi Pedido ☕
                        </h1>
                        <button className="btn-close" onClick={cerrarCarrito}></button>
                    </div>

                    {productosDelCarrito.length === 0 ?
                        (
                            <div className="alert alert-info text-center">
                                El carrito está vacío.
                            </div>
                        )
                        :
                        (
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <ul className="list-group mb-4">
                                        {productosDelCarrito.map((item, index) => (
                                            <li
                                                key={index}
                                                className="list-group-item d-flex justify-content-between align-items-center"
                                            >
                                                {/* Imagen y Nombre del Producto */}
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={item.imagen} // Imagen del producto en carrito
                                                        alt={item.nombre} // Nombre del producto en carrito
                                                        style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px', marginRight: '15px' }} // Estilo para que las imagenes sean chicas, pasar a css?
                                                    />
                                                    <span className="fw-bold">{item.nombre}</span>
                                                </div>

                                                {/* Cantidad */}
                                                <div className="d-flex align-items-center">
                                                    <button
                                                        className="btn btn-sm btn-outline-danger me-2"
                                                        onClick={() => disminuir(item.nombre)}
                                                    >
                                                        {item.cantidad === 1 ? <i className="bi bi-trash-fill"></i> : <i className="bi bi-dash"></i>} {/* boton - y tachito cambiado con : */}
                                                    </button>

                                                    <span className="badge bg-secondary text-light fs-6 align-self-center">
                                                        {item.cantidad}
                                                    </span>

                                                    <button
                                                        className="btn btn-sm btn-outline-success ms-2"
                                                        onClick={() => aumentar(item.nombre)}
                                                    >
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                </div>

                                                {/* Subtotal por Producto */}
                                                <span className="text-muted fw-bold">
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

                                    {/* Botón de pedido */}
                                    <div className="mt-4">
                                        <button
                                            className="btn btn-success btn-lg w-100"
                                            onClick={onConfirmar}
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