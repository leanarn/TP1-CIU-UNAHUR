import "./Home.css";
import logo from "../assets/logo2.png";

export default function Home({ onClick }) {
    return (
        <div className="hero-section">
            <div className="overlay d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row text-white text-center">
                      
                        {/* Columna izquierda */}
                        <div className="col-md-4 d-flex flex-column justify-content-center text-md-start text-center px-4">
                            <h2 className="fw-bold">Sobre Nosotros</h2>
                            <p className="lead">
                                En <span className="fw-bold">CAFÉ UNAHUR</span> seleccionamos granos 
                                de la mejor calidad, tostados con pasión para crear una experiencia 
                                única en cada taza.
                            </p>
                            <p>
                                Nuestro compromiso es brindar un ambiente acogedor donde cada sorbo 
                                se convierta en un momento especial. Desde los clásicos espressos 
                                hasta creaciones exclusivas, siempre hay algo para cada amante del café.
                            </p>
                            <p className="fst-italic">✨ Tu pausa perfecta, todos los días.</p>
                        </div>

                        {/* Columna central */}
                        <div className="col-md-4 d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center justify-content-center gap-3">
                                <img src={logo} alt="Logo" className="logo" />
                                <h1 className="cafeteria-title m-0">
                                    CAFÉ UNAHUR
                                </h1>
                            </div>
                            <p className="fst-italic mt-3">
                                Un rincón cálido para disfrutar del mejor café.
                            </p>
                        </div>

                        {/* Columna derecha */}
                        <div className="col-md-4 d-flex flex-column justify-content-center px-4">
                            <h3 className="fw-bold mb-3">Descubrí nuestro Menú</h3>
                            <p className="mb-4">
                                Desde un espresso clásico hasta bebidas de autor, opciones dulces y saladas, 
                                siempre hay algo especial para vos. 🍰☕
                            </p>
                            <button className="btn btn-warning btn-lg animated-btn w-100 w-md-auto" onClick={onClick}>
                                Ver Menú
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
