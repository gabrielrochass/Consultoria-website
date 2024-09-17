import React from 'react'
import './sobre.css'

const Sobre = () => {
  return (
    <div id="sobre" class="about">
    <div class="about-left">
      <h1>Sobre Nós</h1>
      <p>Na SM Terceirização & Serviços LTDA, combinamos tradição com inovação para oferecer soluções de terceirização que realmente fazem a diferença.</p>
      <p>Seus objetivos estão embasados na redução de custos operacionais com foco no Core Business do Cliente o que reflete nossa dedicação à qualidade duradoura e ao serviço excepcional.</p>
    </div>
    <div class="about-right">
      <div class="card">
        <div class="front">
          <i class="fas fa-bullseye"></i>
          <h3>Missão</h3>
        </div>
        <div class="back">
          <div class="back-content">
            <h3>Missão</h3>
            <p>Prover soluções de terceirização e serviços que exemplifiquem qualidade, resistência e perseverança, assegurando que nossos clientes possam focar em suas competências essenciais com total confiança na nossa entrega.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sobre