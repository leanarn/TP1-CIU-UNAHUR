import '../css/Carrito.module.css'

export default function Carrito({ productosDelCarrito, aumentar, disminuir, cerrarCarrito, onConfirmar }) {
    const total = productosDelCarrito.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
    );

    return (
        <div className="carrito-overlay" onClick={cerrarCarrito}>
            <div
                className="carrito-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="carrito-header">
                    <h1 className="carrito-titulo">Mi Pedido ☕</h1>
                    <button className="btn-close" onClick={cerrarCarrito}></button>
                </div>

                {productosDelCarrito.length === 0 ? (
                    <div className="alert alert-info text-center">
                        El carrito está vacío.
                    </div>
                ) : (
                    <>
                        <div className="carrito-lista">
                            {productosDelCarrito.map((item, index) => (
                                <div key={index} className="carrito-item">
                                    {/* Imagen */}
                                    <img
                                        src={item.imagen}
                                        alt={item.nombre}
                                        className="carrito-imagen"
                                    />

                                    {/* Nombre */}
                                    <span className="carrito-nombre fw-bold">
                                        {item.nombre}
                                    </span>

                                    {/* Controles */}
                                    <div className="carrito-controles">
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => disminuir(item.nombre)}
                                        >
                                            {item.cantidad === 1 ? (
                                                <i className="bi bi-trash-fill"></i>
                                            ) : (
                                                <i className="bi bi-dash"></i>
                                            )}
                                        </button>

                                        <span className="carrito-cantidad">
                                            {item.cantidad}
                                        </span>

                                        <button
                                            className="btn btn-sm btn-outline-success"
                                            onClick={() => aumentar(item.nombre)}
                                        >
                                            <i className="bi bi-plus"></i>
                                        </button>
                                    </div>

                                    {/* Subtotal */}
                                    <span className="carrito-precio">
                                        ${(item.precio * item.cantidad).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="carrito-total">
                            <span>TOTAL:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <button
                            className="btn btn-confirmar-pedido"
                            onClick={onConfirmar}
                        >
                            Confirmar Pedido
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
