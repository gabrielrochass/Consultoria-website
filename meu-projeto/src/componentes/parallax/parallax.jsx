import React from 'react';
import { Parallax } from 'react-parallax';
import Contato from '../contato/contato';
import Servicos from '../servicos/servicos';
import Valores from '../valores/valores';
import './parallax.css';

// Caminho centralizado para imagens
const fundoClaro = require('../../assets/fundo-claro.png');
const notebook = require('../../assets/visao.png');

const ParallaxComponent = () => {
  return (
    <div>
      {/* Seção Valores */}
      <Parallax bgImage={notebook} strength={500}
        bgImageStyle={
          { height: 'auto', width: '100%', filter: 'brightness(0.9)' }
        }
      >
        <div style={{ height: '900px' }}>
          <Valores />
        </div>
      </Parallax>

      {/* Seção Serviços */}
      <Parallax bgImage={fundoClaro} strength={500}
        bgImageStyle={{ height: 'auto', width: '100%' }}>
        <div style={{ height: '1900px' }}>
          <Servicos />
          <Contato />
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxComponent;
