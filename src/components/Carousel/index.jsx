import React, { useState, useEffect } from 'react';
import './carousel.css';

export default function Carousel({ carouselItems }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
        }, 3000); // Altera o slide a cada 3 segundos
        
        return () => clearInterval(slideInterval); // Limpa o intervalo ao desmontar o componente
    
    }, [carouselItems.length]);

    return (
        <div className="carousel">
            {carouselItems.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
                    style={{ backgroundImage: `url(${image.url})` }}
                >
                    <p className="carousel-caption">{image.caption}</p> {/* Legenda opcional */}
                </div>
            ))}
        </div>

        // <div className="carousel-container">
        //     {images.map((image, index) => (
        //         <div
        //             key={index}
        //             className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
        //             style={{ backgroundImage: `url(${image.url})` }}
        //         >
        //             <p>{image.caption}</p>
        //         </div>
        //     ))}
        // </div>
    );
}
