import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import styles from "./Navbar.module.css";

export default function Navbar({ verCarrito }){
    

    return(
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand d-flex" >
                    <img className={styles.logo} src={logo} />
                    <h1 className={`ms-2 ${styles.title}`}>Café UNAHUR</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{ width: '100%' }}>
                        <Link to="/" className={`nav-link ${styles.nav_item}`} > Inicio </Link>
                        <Link to="/carta" className={`nav-link ${styles.nav_item}`} > Carta </Link>
                        <Link to="/contacto" className={`nav-link ${styles.nav_item}`} > Contacto </Link>
                        <button className={`nav-link ${styles.nav_item} ${styles.nav_item_carrito}`} onClick={verCarrito}>  
                            <i className="bi bi-cart"></i> Ver carrito
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}