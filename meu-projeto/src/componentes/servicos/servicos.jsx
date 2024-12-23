import React from 'react';
import './servicos.css';

const Servicos = () => {
    return (
        <div id="servicos" className="services-section">
            <h1>Nossos Serviços</h1>
            <div className="container">
                <div className="custom-card">
                    <div className="img-box">
                        <img src={require('../../assets/limpeza.jpg')} alt="Consultoria em gestão empresarial" />
                    </div>
                    <div className="custom-content">
                        <h2>Consultoria Empresarial</h2>
                        <p>Oferecemos consultoria especializada em gestão empresarial para melhorar a eficiência e a rentabilidade do seu negócio.</p>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="img-box">
                    <img src={require('../../assets/limpeza.jpg')} alt="Limpeza e Conservação" />
                    </div>
                    <div className="custom-content">
                        <h2>Limpeza e Conservação</h2>
                        <p>Oferecemos serviços de limpeza predial e hospitalar, incluindo limpeza pós-obra para garantir um ambiente limpo e saudável.</p>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="img-box">
                    <img src={require('../../assets/limpeza.jpg')} alt="Portaria" />
                    </div>
                    <div className="custom-content">
                        <h2>Portaria</h2>
                        <p>Contamos com profissionais qualificados para oferecer serviços de portaria e controle de acesso, garantindo a segurança do seu estabelecimento.</p>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="img-box">
                    <img src={require('../../assets/limpeza.jpg')} alt="Manutenção Predial" />
                    </div>
                    <div className="custom-content">
                        <h2>Manutenção Predial</h2>
                        <p>Nossos serviços de manutenção predial incluem reparos elétricos e hidráulicos para manter seu edifício em perfeitas condições.</p>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="img-box">
                        <img src={require('../../assets/limpeza.jpg')} alt="Jardinagem e Paisagismo" />
                    </div>
                    <div className="custom-content">
                        <h2>Jardinagem e Paisagismo</h2>
                        <p>Oferecemos manutenção de jardins e áreas verdes para garantir um ambiente agradável e bem-cuidado em sua propriedade.</p>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="img-box">
                        <img src={require('../../assets/limpeza.jpg')} alt="Serviços Administrativos" />
                    </div>
                    <div className="custom-content">
                        <h2>Serviços Administrativos</h2>
                        <p>Contamos com uma equipe de profissionais capacitados para oferecer serviços administrativos, incluindo recepcionistas, digitalização de documentos e apoio logístico.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicos;