// aqui vão os componentes react de src/componentes organizados entre si
import React from 'react';
import Footer from '../componentes/footer/footer';
import Navbar from '../componentes/navbar/navbar';
import ParallaxComponent from '../componentes/parallax/parallax';
import Slider from '../componentes/slider/slider';
import Sobre from '../componentes/sobre/sobre';
// import './home.css';

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <Slider />
            <Sobre />
            <ParallaxComponent  />
            {/* <Contato /> */}
            <Footer />
        </div>
    );
}

{/* <Navbar />
<Slider />
<Sobre /> 
<Valores />
<Servicos />
<Contato />
<Footer /> */}