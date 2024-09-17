import React from 'react';
import { FaHandshakeSimple } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { SiTrueup } from "react-icons/si";
import './valores.css';

const Valores = () => {
return (
    <div id="valores">
        <h1>Nossos Ideais</h1>
        <div className="mural">
            <div className="valor">
                <div className="emoji"> <SiTrueup /> </div>
                <h2>Integridade</h2>
                <p>Nosso compromisso com a integridade guia todas as nossas ações. Mantemos altos padrões éticos e agimos com honestidade e transparência em tudo o que fazemos.</p>
            </div>

            <div className="valor">
                <div className="emoji"> <GiBrain /> </div>
                <h2>Inovação</h2>
                <p>Estamos constantemente buscando maneiras criativas de melhorar e inovar. Abraçamos novas ideias e desafiamos o status quo para impulsionar o progresso.</p>
            </div>

            <div className="valor">
                <div className="emoji"><FaHandshakeSimple /></div>
                <h2>Colaboração</h2>
                <p>Acreditamos no poder da colaboração e do trabalho em equipe. Valorizamos a diversidade de pensamento e trabalhamos juntos para alcançar objetivos comuns.</p>
            </div>

            <div className="valor">
                <div className="emoji"><FaHandshakeSimple /></div>
                <h2>Colaboração</h2>
                <p>Acreditamos no poder da colaboração e do trabalho em equipe. Valorizamos a diversidade de pensamento e trabalhamos juntos para alcançar objetivos comuns.</p>
            </div>

            <div className="valor">
                <div className="emoji"><FaHandshakeSimple /></div>
                <h2>Colaboração</h2>
                <p>Acreditamos no poder da colaboração e do trabalho em equipe. Valorizamos a diversidade de pensamento e trabalhamos juntos para alcançar objetivos comuns.</p>
            </div>
        </div>
    </div>
)
}

export default Valores