import React from 'react';
import { Parallax } from 'react-parallax';
import Servicos from '../servicos/servicos';
import Valores from '../valores/valores';
import './parallax.css';

// Caminho centralizado para imagens
const fundoClaro = require('../../assets/fundo-claro.png');
const notebook = require('../../assets/visao.png');

const ParallaxComponent = () => {
  return (
    <div>
      <Parallax 
        bgImage={notebook} 
        strength={500}
        bgImageStyle={{
          width: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.9)',
        }}
      >
        <div 
          className="parallax-section valores-section" 
          style={{
            minHeight: '100vh', // Altura mínima igual à viewport
            padding: '40px 20px', // Espaço interno para evitar cortes no texto
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Valores />
        </div>
      </Parallax>



      {/* Seção Serviços */}
      <Parallax bgImage={fundoClaro} strength={500}
        bgImageStyle={{ height: 'auto', width: '100%' }}>
        <div className="parallax-section servicos-section" data-aos="fade-left">
          <Servicos />
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxComponent;
