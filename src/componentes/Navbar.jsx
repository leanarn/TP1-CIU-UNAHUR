import logo from "../assets/logo2.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} style={{ height: '2.5rem' }} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{ width: '100%' }}>
                        <a className="nav-link" aria-current="page" href="#">Inicio</a>
                        <a className="nav-link active" href="#">Carta</a>
                        <a className="nav-link" href="#">Contacto</a>
                        <button className="nav-link" style={{ marginLeft: 'auto' }}>
                            <i className="bi bi-cart"></i> Ver carrito
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}