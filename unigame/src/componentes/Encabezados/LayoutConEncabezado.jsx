import React from 'react';
import { useLocation } from 'react-router-dom';
import EncabezadoPublico from './EncabezadosPublic';  // Asegúrate de tener este componente
import Footer from '../compartidos/footer';
import '../Styles/style_footer.css';

const LayoutConEncabezado = ({ children }) => {
    const location = useLocation();
    const esRutaPublica = location.pathname === '/' || location.pathname.startsWith('/quienessomos') || location.pathname.startsWith('/contactanos');

    return (
        <div className="layout-container">
            {esRutaPublica ? <EncabezadoPublico /> : null}
            <div className="content-wrap">{children}</div>
            <Footer />
        </div>
    );
};

export default LayoutConEncabezado;
