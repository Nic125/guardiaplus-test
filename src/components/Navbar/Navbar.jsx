import React from 'react'
import './Navbar.css'
import logo from './logo.svg'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar__home">
            <div className="container-fluid">
                <Link to="/">
                    <img src={logo} alt='Guardia Plus' className="navbar__logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar__links">

                        <Link to="/profile">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Perfil</a>
                            </li>
                        </Link>
                        <Link to="/groups">
                            <li className="nav-item">
                                <a className="nav-link">Guardias</a>
                            </li>
                        </Link>
                        <Link to="/planning">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Planificacion</a>
                            </li>
                        </Link>
                        <Link to="/personal">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Personal</a>
                            </li>
                        </Link>
                        <Link to="/datainput">
                            <li className="nav-item">
                                <a className="nav-link">Carga de datos</a>
                            </li>
                        </Link>
                        
                    </ul>
                    <div>
                        <button type="button" className="navbar__logout"  onClick={() => {props.setShow(prev => !prev)}}>Nuevo mensaje</button>
                        <button type="button" className="navbar__logout">Cerrar sesión</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
