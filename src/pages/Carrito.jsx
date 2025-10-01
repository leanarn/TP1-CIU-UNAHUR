import 'bootstrap/dist/css/bootstrap.min.css';

// Esto es rapido para que no se quede la página en blanco

export default function Carrito({ carrito = [ ] }) {
    const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    
return (
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
                                        >
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
    );
}