import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import styles from "../css/Navbar.module.css";
import { useState } from "react";

export default function Navbar({ verCarrito }){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand d-flex">
                    <img className={styles.logo} src={logo} title="Café UNAHUR" />
                    <h1 className={`ms-2 ${styles.title}`}>Café UNAHUR</h1>
                </Link>
                <button className="navbar-toggler" type="button" aria-controls="navbarNavAltMarkup" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isOpen ? '' : 'collapse'} navbar-collapse`} id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{ width: '100%' }}>
                        <Link to="/" className={`nav-link ${styles.nav_item}`} > Inicio </Link>
                        <Link to="/carta" className={`nav-link ${styles.nav_item}`} > Carta </Link>
                        <Link to="/contacto" className={`nav-link ${styles.nav_item}`} > Contacto </Link>
                        <button className={`nav-link ${styles.nav_item} ${styles.nav_item_carrito}`} onClick={() => {verCarrito(); setIsOpen(false)}}>  
                            <i className="bi bi-cart"></i> Ver carrito
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}