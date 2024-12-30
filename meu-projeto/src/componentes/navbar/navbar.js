// Navbar para navegação entre páginas
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <nav>
            <div className="navbar-left">
                <div className="logo">
                    <Link to="/">
                        <img src={require('../../assets/logo-noback.png')} alt="Logo" />
                    </Link>
                </div>
            </div>

            <ul className="menu">
                <li><Link to="home">Home</Link></li>
                <li><Link to="sobre">Sobre</Link></li>
                <li><Link to="servicos">Serviços</Link></li>
                <li><Link to="contato">Contato</Link></li>
            </ul>
        </nav>
    );
}
