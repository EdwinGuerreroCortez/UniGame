import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutConEncabezado from './componentes/Encabezados/LayoutConEncabezado';
import Main from './componentes/Public/Main';
import Quienes from './componentes/Public/quienes';
import Contactanos from './componentes/Public/contactanos';

function App() {
    return (
        <div className="App">
            <Router>
                <LayoutConEncabezado>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/quienessomos" element={<Quienes />} />
                        <Route path="/contactanos" element={<Contactanos />} />
                    </Routes>
                </LayoutConEncabezado>
            </Router>
        </div>
    );
}

export default App;
