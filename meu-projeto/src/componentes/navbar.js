// navbar para navegação entre páginas
import React from 'react';

function Navbar() {
    return (
        <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/contato">Contato</a></li>
        </ul>
        </nav>
    );
}

export default Navbar;