import React, { useEffect, useState } from 'react';
import './slider.css';

const slides = [
    {
        id: 1,
        image: require('../../assets/jardinagem.jpg'),
        title: 'Nossa Experiência',
        description: 'Com mais de 15 anos no mercado, nossa empresa possui uma vasta experiência em fornecer soluções personalizadas e de alta qualidade.',
    },
    {
        id: 2,
        image: require('../../assets/limpeza.jpg'),
        title: 'Equipe Especializada',
        description: 'Contamos com uma equipe de profissionais altamente qualificados e especializados em diversas áreas para atender às necessidades dos nossos clientes.',
    },
    {
        id: 3,
        image: require('../../assets/adm.jpg'),
        title: 'Tecnologia de Ponta',
        description: 'Utilizamos as mais recentes tecnologias e metodologias para garantir que nossos serviços sejam eficientes, inovadores e de alta qualidade.',
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
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
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
