import SiteHeader from '@/components/SiteHeader';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import ParallaxSection from '@/components/ParallaxSection';
import Valores from '@/components/Valores';
import Servicos from '@/components/Servicos';
import Galeria from '@/components/Galeria';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <SiteHeader />

      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-left">
        <Sobre />
      </div>

      <div data-aos="fade-down" data-aos-duration="2000">
        <ParallaxSection background="/images/visao.webp" variant="valores">
          <Valores />
        </ParallaxSection>
        <ParallaxSection background="/images/fundo-claro.webp" variant="servicos">
          <Servicos />
        </ParallaxSection>
      </div>

      <div data-aos="fade-up">
        <Galeria />
      </div>

      <div data-aos="fade-left">
        <Contato />
      </div>

      <Footer />
    </>
  );
}
