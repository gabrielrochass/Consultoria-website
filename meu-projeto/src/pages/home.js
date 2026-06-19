import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Contato from '../componentes/contato/contato';
import Footer from '../componentes/footer/footer';
import Navbar from '../componentes/navbar/navbar';
import ParallaxComponent from '../componentes/parallax/parallax';
import Slider from '../componentes/slider/slider';
import Sobre from '../componentes/sobre/sobre';

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            once: true, // Executa apenas uma vez ao rolar
        });
    }, []);

    return (
        <div className="home">
            <Navbar />
            <div data-aos="fade-up">
                <Slider />
            </div>
            <div data-aos="fade-left">
                <Sobre />
            </div>
            <div data-aos="fade-down" data-aos-duration="2000">
                <ParallaxComponent />
            </div>
            <div data-aos="fade-left">
                <Contato />
            </div>
            <Footer />
        </div>
    );
}
