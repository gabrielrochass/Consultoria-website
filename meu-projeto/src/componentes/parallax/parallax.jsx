import React from 'react';
import { Parallax } from 'react-parallax';
import Contato from '../contato/contato';
import Footer from '../footer/footer';
import Servicos from '../servicos/servicos';
import Sobre from '../sobre/sobre';
import Valores from '../valores/valores';

const ParallaxComponent = () => {
  return (
    <div>
      <Parallax
        bgImage={require('../../assets/fundo-claro.png')}
        strength={500}  // intensidade do parallax
      >
        <div style={{ height: '500px' }}>
            <Sobre />
        </div>
      </Parallax>

      <Parallax
        // bgImage={require('../../assets/fundo-claro.png')}
        strength={500}  // intensidade do parallax
      >
        <div style={{ height: '600px' }}>
            <Valores />
        </div>
      </Parallax>

      <Parallax
        bgImage={require('../../assets/fundo-claro.png')}
        strength={500}  // intensidade do parallax
      >
        <div style={{ height: '1200px' }}>
            <Servicos />
        </div>
      </Parallax>

      <Parallax
        // bgImage={require('../../assets/fundo-claro.png')}
        strength={500}  // intensidade do parallax
      >
        <div style={{ height: '500px' }}>
            <Contato />
        </div>
      </Parallax>

      <Parallax
        // bgImage={require('../../assets/fundo-claro.png')}
        strength={500}  // intensidade do parallax
      >
        <div style={{ height: '500px' }}>
            <Footer />
        </div>
      </Parallax>


    </div>
  );
};

export default ParallaxComponent;

// <Valores />
// <Servicos />
// <Contato />
// <Footer />
