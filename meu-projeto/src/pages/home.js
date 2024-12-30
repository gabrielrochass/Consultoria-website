// aqui vão os componentes react de src/componentes organizados entre si
import React from 'react';
import Contato from '../componentes/contato/contato';
import Footer from '../componentes/footer/footer';
import Navbar from '../componentes/navbar/navbar';
import Servicos from '../componentes/servicos/servicos';
import Slider from '../componentes/slider/slider';
import Sobre from '../componentes/sobre/sobre';
import Valores from '../componentes/valores/valores';
// import './home.css';

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <Slider />
            <Sobre /> 
            <Valores />
            <Servicos />
            <Contato />
            <Footer />
        </div>
    );
}