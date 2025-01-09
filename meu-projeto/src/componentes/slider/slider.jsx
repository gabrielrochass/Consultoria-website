import React, { useEffect, useState } from 'react';
import './slider.css';

const slides = [
    {
        id: 1,
        image: require('../../assets/capaa.png'),
        title: 'Soluções Eficientes para o seu Negócio',
        description: 'Oferecemos serviços terceirizados com excelência, agilidade e a confiança que sua empresa merece. Soluções personalizadas em terceirização de mão de obra e consultoria empresarial podem elevar o desempenho do seu negócio.',
    },
    {
        id: 2,
        image: require('../../assets/capa2.png'),
        title: 'Equipe Especializada',
        description: 'Contamos com profissionais capacitados e comprometidos em oferecer soluções de alta qualidade. Com treinamento constante e foco em eficiência, nossa equipe está preparada para atender às suas necessidades.',
    },
    {
        id: 3,
        image: require('../../assets/seguranca2.png'),
        title: 'Segurança e Bem-estar no seu Ambiente de Trabalho',
        description: 'Nossos serviços são totalmente adaptados às necessidades de cada cliente, garantindo a segurança e o bem-estar de todos os colaboradores no local.',
    },
    {
        id: 4,
        image: require('../../assets/resp.png'),
        title: 'Responsabilidade Social',
        description: 'Estamos focados em adotar práticas que promovam o bem-estar das pessoas e a sustentabilidade, valorizando nossos colaboradores e o ambiente.',
    },
    {
        id: 5,
        image: require('../../assets/capa4.png'),
        title: 'Consultoria em Gestão de Contratos',
        description: 'Nossos consultores garantem a gestão eficiente, cumprimento de prazos e conformidade legal em cada etapa do processo, desde a elaboração até a renovação.',
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, []);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slider">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    {index === currentSlide && (
                        <div className="slide-content">
                            <div className='slide-text'>
                                <h1>{slide.title}</h1>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            {/* Botões de navegação */}
            <button className="prev" onClick={goToPrevSlide}>
                &#8249;
            </button>
            <button className="next" onClick={goToNextSlide}>
                &#8250;
            </button>
            {/* Indicadores */}
            <div className="indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
