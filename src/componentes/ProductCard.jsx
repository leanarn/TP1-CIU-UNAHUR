export default function ProductCard({ producto }){

    return(
        <div className="card" style={{ width: '18rem' }}>
            <div style={{ height: '150px', overflow: 'hidden' }}>
                <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
            </div>
            <div className="card-body">
                <p className="card-text" style={{ textAlign: 'left' }}> {producto.descripcion} </p>
                <p style={{ textAlign: 'left' }}>Precio: {producto.precio}</p>
                <button className="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
    )
}