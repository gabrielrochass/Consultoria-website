import React from 'react';
import './valores.css';

const Valores = () => {
return (
    <div id="valores">
        <h1>Nossos Valores</h1>
        <div className="missao">
            <h2>MISSÃO</h2>
            <p>Fornecer soluções de terceirização e serviços de alta qualidade, atendendo às necessidades específicas de nossos clientes e contribuindo para o seu sucesso.</p>
        </div>

        <div className="visao">
            <h2>VISÃO</h2>
            <p>Ser reconhecida como a principal empresa de terceirização de serviços no Brasil, destacando-se pela inovação, qualidade e compromisso com a satisfação dos clientes. Almejamos expandir nossa atuação para novos mercados, sempre mantendo a ética e a responsabilidade social como pilares fundamentais de nosso crescimento.</p>
        </div>

        <div className="valores">
            <h2>VALORES</h2>
            <p>Na SM Terceirização e Serviços Ltda, valorizamos a excelência nos serviços, a resiliência frente aos desafios e o compromisso com a responsabilidade social e ambiental.</p>
        </div>
        
    </div>
)
}

export default Valores