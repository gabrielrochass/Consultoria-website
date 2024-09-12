// aqui vão os componentes react de src/componentes organizados entre si
import React from 'react';
import Navbar from '../componentes/navbar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
        </div>
    );
}