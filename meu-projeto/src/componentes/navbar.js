// navbar para navegação entre páginas
import React from 'react'
import { Link } from 'react-router-dom'
import './styleComponents.css'

export default function Navbar() {
    return (
        <nav>
            {/* logo e nome da empresa na esquerda */}
            <div className="navbar-left">
                <div className="logo">
                    <Link to="/">
                        <img src="https://via.placeholder.com/150" alt="logo" />
                    </Link>
                </div>

                <div className="nome-da-empresa">
                    <h1>SM Terceirização e Serviços</h1>
                </div>
            </div>

            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/servicos">Serviços</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contato">
                            <button className="navbar-button">Contato</button>
                        </Link>
                    </li>
                </ul>
            </div>
                
        </nav>
    )
}
