import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div id='home' className="navbar-left">
                <div id='home' className="logo">
                    <a href="#home">
                        <img src={require('../../assets/logo-noback.png')} alt="Logo" />
                    </a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                </div>
            </div>

            <ul className={isOpen ? "menu open" : "menu"}>
                <li><Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
                <li><Link to="sobre" smooth={true} duration={650} onClick={toggleMenu}>Sobre</Link></li>
                <li><Link to="servicos" smooth={true} duration={1200} onClick={toggleMenu}>Serviços</Link></li>
                <li><Link to="contato" smooth={true} duration={2000} onClick={toggleMenu}>Contato</Link></li>
            </ul>
        </nav>
    );
}
