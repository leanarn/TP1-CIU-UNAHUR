import "../css/Home.css";
import logo from "../assets/logo2.png";
import fondo from "../assets/fondoCafe.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      <div className="overlay d-flex flex-column justify-content-center align-items-center text-white text-center min-vh-100">
        
        {/* Encabezado con logo y título */}
        <div className="d-flex align-items-center justify-content-center mb-4 gap-3 flex-wrap">
          <img src={logo} alt="Logo Café Unahur" className="logo" />
          <h1 className="cafeteria-title m-0">Luna & Granos Café </h1>
        </div>
        <p className="fst-italic text-light mb-5">
          Un rincón cálido para disfrutar del mejor café
        </p>

        {/*Contenido principal en tres columnas */}
        <div className="container">
          <div className="row text-center text-md-start justify-content-center align-items-start">
            
            {/*Columna izquierda*/}
            <div className="col-md-4 d-flex flex-column justify-content-center px-4 mb-4 mb-md-0">
              <h2 className="fw-bold">Sobre Nosotros</h2>
              <p className="lead">
                En <span className="fw-bold">Luna & Granos Café </span> seleccionamos granos 
                de la mejor calidad, tostados con pasión para crear una experiencia 
                única en cada taza.
              </p>
              <p>
                Nuestro compromiso es brindar un ambiente acogedor donde cada sorbo 
                se convierta en un momento especial. Desde los clásicos espressos 
                hasta creaciones exclusivas, siempre hay algo para cada amante del café.
              </p>
              <p className="fst-italic"> Tu pausa perfecta, todos los días.</p>
            </div>

            {/* Columna central (vacía para equilibrio visual en desktop) */}
            <div className="col-md-4 d-none d-md-block"></div>

            {/* Columna derecha */}
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-md-start align-items-center px-4">
              <h3 className="fw-bold mb-3 text-warning text-md-start text-center">
                Descubrí nuestro Menú
              </h3>
              <p className="mb-4 text-md-start text-center">
                Desde un espresso clásico hasta bebidas de autor, opciones dulces y saladas, 
                siempre hay algo especial para vos. 
              </p>
              <Link
                to="/carta"
                className="btn btn-warning btn-lg animated-btn w-100 w-md-auto fw-bold"
              >
                Ver Menú
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
