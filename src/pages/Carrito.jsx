import 'bootstrap/dist/css/bootstrap.min.css';

// Esto es rapido para que no se quede la página en blanco

export default function Carrito() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h1 className="fw-bold text-primary mb-4">
                        Mi Pedido ☕
                    </h1>
                    <p className="lead text-muted">
                        Esta es la página del carrito
                    </p>
                    <hr />
                </div>
            </div>
        </div>
    );
}