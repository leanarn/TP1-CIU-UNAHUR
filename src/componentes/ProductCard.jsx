import '../css/ProductCard.css';

export default function ProductCard({ producto, alAgregar, fueAgregado }){

    return(
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-img-container">
                <img src={producto.imagen} className="card-img-top-hover" alt={producto.nombre} />
            </div>
            <div className="card-body">
                <p className="card-text" style={{ textAlign: 'left' }}> {producto.descripcion} </p>
                <p style={{ textAlign: 'left' }}>Precio: ${producto.precio}</p>
                <button 
                    className={fueAgregado ? "btn btn-success" : "btn-agregar"} 
                    onClick={alAgregar}
                    disabled={fueAgregado}
                >
                    {fueAgregado ? "Agregado! ✅" : "Agregar al carrito"}
                </button>
            </div>
        </div>
    )
}