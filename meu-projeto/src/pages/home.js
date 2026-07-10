import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import Contato from '../componentes/contato/contato';
import DenunciaModal from '../componentes/denuncia/denuncia';
import Footer from '../componentes/footer/footer';
import Navbar from '../componentes/navbar/navbar';
import ParallaxComponent from '../componentes/parallax/parallax';
import Slider from '../componentes/slider/slider';
import Sobre from '../componentes/sobre/sobre';

export default function Home() {
    const [isDenunciaOpen, setIsDenunciaOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="home">
            <Navbar onOpenDenuncia={() => setIsDenunciaOpen(true)} />
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
            <DenunciaModal 
                isOpen={isDenunciaOpen} 
                onClose={() => setIsDenunciaOpen(false)} 
            />
        </div>
    );
}
