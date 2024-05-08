import React from 'react';
import { Link } from 'react-router-dom';

const EncabezadoPublico = () => {
    return (
        <header className="encabezado-publico">
            <div className="logo">
                <Link to="/">
                    <img src="" alt="Logo de UniGame" />  
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/quienessomos">Quiénes Somos</Link></li>
                    <li><Link to="/contactanos">Contáctanos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default EncabezadoPublico;
