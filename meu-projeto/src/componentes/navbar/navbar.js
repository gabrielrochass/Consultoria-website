import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

export default function Navbar() {
    return (
        <nav>
            <div id='home' className="navbar-left">
                <div id='home' className="logo">
                    <a href="#home">
                        <img src={require('../../assets/logo-noback.png')} alt="Logo" />
                    </a>
                </div>
            </div>

            <ul className="menu">
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="sobre" smooth={true} duration={500}>Sobre</Link></li>
                <li><Link to="servicos" smooth={true} duration={500}>Serviços</Link></li>
                <li><Link to="contato" smooth={true} duration={500}>Contato</Link></li>
            </ul>
        </nav>
    );
}
