import Styles from '../css/Carrito.module.css'

export default function Carrito({ productosDelCarrito, aumentar, disminuir, cerrarCarrito, onConfirmar }) {
    const total = productosDelCarrito.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
    );

    // Detectar si el modo oscuro está activo (por la clase del body)
    const temaOscuroActivo = document.body.classList.contains('dark-theme');

    return (
        <div
            className={`${Styles.carrito_overlay} ${temaOscuroActivo ? Styles.dark_overlay : ''}`}
            onClick={cerrarCarrito}
        >
            <div
                className={`${Styles.carrito_modal} ${temaOscuroActivo ? Styles.dark_modal : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={Styles.carrito_header}>
                    <h1 className={`${Styles.carrito_titulo} ${temaOscuroActivo ? Styles.dark_text : ''}`}>
                        Mi Pedido ☕
                    </h1>
                    <button className="btn-close" onClick={cerrarCarrito}></button>
                </div>

                {productosDelCarrito.length === 0 ? (
                    <div className="alert alert-info text-center">
                        El carrito está vacío.
                    </div>
                ) : (
                    <>
                        <div className={Styles.carrito_lista}>
                            {productosDelCarrito.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${Styles.carrito_item} ${temaOscuroActivo ? Styles.dark_item : ''}`}
                                >
                                    {/* Imagen */}
                                    <img
                                        src={item.imagen}
                                        alt={item.nombre}
                                        className={Styles.carrito_imagen}
                                    />

                                    {/* Nombre */}
                                    <span className={`${Styles.carrito_nombre} ${temaOscuroActivo ? Styles.dark_text : ''} fw-bold`}>
                                        {item.nombre}
                                    </span>

                                    {/* Controles */}
                                    <div className={Styles.carrito_controles}>
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

                                        <span className={`${Styles.carrito_cantidad} ${temaOscuroActivo ? Styles.dark_cantidad : ''}`}>
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
                                    <span className={`${Styles.carrito_precio} ${temaOscuroActivo ? Styles.dark_text : ''}`}>
                                        ${(item.precio * item.cantidad).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Total del carrito */}
                        <div className={`${Styles.carrito_total} ${temaOscuroActivo ? Styles.dark_total : ''}`}>
                            <span>TOTAL:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        {/* Botón Confirmar */}
                        <button
                            className={`btn ${Styles.btn_confirmar_pedido}`}
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
