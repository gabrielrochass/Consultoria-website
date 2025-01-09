import React from 'react';
import { GiEyeTarget } from "react-icons/gi";
import { IoDiamondOutline, IoRocketOutline } from "react-icons/io5";
import './valores.css';

const Valores = () => {

    return (
        <div id="valores" className="valores-container">
            <h1 className="valores-title">Missão, Visão e Valores</h1>
            <p className="valores-description">
                Fornecemos soluções de alta qualidade para atender às suas necessidades, com inovação e compromisso social.
            </p>
            <div className="valores-content">
                <div className="valores-circles">
                    <div className="circle missoes-circle">
                        <IoRocketOutline />
                    </div>
                    <div className="circle visao-circle">
                        <GiEyeTarget />
                    </div>
                    <div className="circle valores-circle">
                        <IoDiamondOutline />
                    </div>
                </div>
                <div className="valores-text">
                    <div className="text-section missoes-text">
                        <h2>MISSÃO</h2>
                        <p>
                            Oferecer soluções de terceirização de alta qualidade, com foco na excelência dos serviços prestados, buscando sempre a satisfação plena de nossos clientes e contribuindo para a melhoria contínua de seus ambientes de trabalho.
                        </p>
                    </div>
                    <div className="text-section visao-text">
                        <h2>VISÃO</h2>
                        <p>
                            Ser reconhecida como referência em soluções de terceirização, destacando-se pela qualidade, confiança e inovação nos serviços prestados, tornando-se a primeira escolha de empresas e condomínios que buscam excelência e eficiência.
                        </p>
                    </div>
                    <div className="text-section valores-text">
                        <h2>VALORES</h2>
                        <p>
                            Qualidade, transparência, responsabilidade e sustentabilidade. Comprometemo-nos a entregar serviços de excelência, mantendo uma comunicação clara com nossos clientes, assumindo desafios com seriedade e agindo sempre com respeito ao meio ambiente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Valores;
