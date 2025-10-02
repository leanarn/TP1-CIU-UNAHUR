import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar({ verCarrito }){

    return(
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} style={{ height: '2.5rem' }} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{ width: '100%' }}>
                        <Link to="/" className="nav-link" > Inicio </Link>
                        <Link to="/carta" className="nav-link" > Carta </Link>
                        <Link to="/contacto" className="nav-link" > Contacto </Link>
                        <button className="nav-link" style={{ marginLeft: 'auto' }} onClick={verCarrito}>  
                            <i className="bi bi-cart"></i> Ver carrito
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}