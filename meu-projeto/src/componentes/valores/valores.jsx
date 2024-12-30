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
                            Fornecer soluções de terceirização e serviços de alta qualidade, atendendo às necessidades específicas de nossos clientes e contribuindo para o seu sucesso.
                        </p>
                    </div>
                    <div className="text-section visao-text">
                        <h2>VISÃO</h2>
                        <p>
                            Ser reconhecida como a principal empresa de terceirização de serviços no Brasil, destacando-se pela inovação, qualidade e compromisso com a satisfação dos clientes.
                        </p>
                    </div>
                    <div className="text-section valores-text">
                        <h2>VALORES</h2>
                        <p>
                            Valorizamos a excelência nos serviços, a resiliência frente aos desafios e o compromisso com a responsabilidade social e ambiental.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Valores;
