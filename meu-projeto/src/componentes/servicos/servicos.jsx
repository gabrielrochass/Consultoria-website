import React from 'react';
import './servicos.css';

const Servicos = () => {
    return (
        <div id="servicos" className="services-section">
            <h1>Nossos Serviços</h1>
            <div className="container">
                <div className="custom-card">
                    <div className="img-box">
                        <img src={require('../../assets/solange3.png')} alt="Consultoria em gestão empresarial" />
                    </div>
                    <div className="custom-content">
                        <h2>Consultoria em Gestão de Contratos</h2>
                        <p>Assessoria especializada na gestão de contratos, incluindo elaboração, controle, repactuação, reajuste e renovação, otimizando os resultados para sua empresa.</p>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="img-box">
                    <img src={require('../../assets/conserv.png')} alt="Limpeza e Conservação" />
                    </div>
                    <div className="custom-content">
                        <h2>Limpeza Predial</h2>
                        <p>Oferecemos serviços de limpeza e conservação para ambientes comerciais, industriais, e condomínios, com métodos eficazes e produtos de qualidade.</p>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="img-box">
                    <img src={require('../../assets/portaria.png')} alt="Portaria" />
                    </div>
                    <div className="custom-content">
                        <h2>Portaria</h2>
                        <p>Controle de acesso e organização de entradas e saídas de forma ágil e segura, com porteiros qualificados para garantir a ordem e o bom funcionamento do seu condomínio ou empresa.</p>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="img-box">
                    <img src={require('../../assets/esp.png')} alt="Manutenção Predial" />
                    </div>
                    <div className="custom-content">
                        <h2>Recepção</h2>
                        <p>Oferecemos um atendimento de qualidade aos seus clientes e visitantes com nossa equipe de recepcionistas, que cuidam da recepção, telefonia e organização de agendas com eficiência e cordialidade.</p>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="img-box">
                        <img src={require('../../assets/jardinagem.jpg')} alt="Jardinagem e Paisagismo" />
                    </div>
                    <div className="custom-content">
                        <h2>Limpeza Hospitalar</h2>
                        <p>Garantimos um ambiente seguro e livre de contaminações em hospitais e clínicas, seguindo protocolos rigorosos de higiene para a segurança de pacientes e profissionais de saúde.</p>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="img-box">
                        <img src={require('../../assets/esp.png')} alt="Serviços Administrativos" />
                    </div>
                    <div className="custom-content">
                        <h2>Serviços Especializados</h2>
                        <p>Oferecemos serviços especializados como apoio técnico, assessoria, coordenadoria, manutenção predial e outros serviços personalizados para garantir a excelência no funcionamento da sua empresa.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicos;