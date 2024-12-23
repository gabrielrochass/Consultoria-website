// aqui vão os componentes react de src/componentes organizados entre si
import React from 'react';
import Navbar from '../componentes/navbar/navbar';
import Servicos from '../componentes/servicos/servicos';
import Sobre from '../componentes/sobre/sobre';
import Valores from '../componentes/valores/valores';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Sobre />
            <Valores />
            <Servicos />
        </div>
    );
}