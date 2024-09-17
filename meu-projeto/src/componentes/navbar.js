// navbar para navegação entre páginas
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <nav>
            <div class="logo">
                <Link to="/">
                    <img src="./assets/logo.png" alt="Logo" />
                </Link>
            </div>
            <ul class="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>      
        </nav>
    )
}
