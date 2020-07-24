//! == Import : npm ==
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

//! == Import : local ==
import carousel1 from '../../images/carousel1.jpg';
import carousel2 from '../../images/carousel2.jpg';
import carousel3 from '../../images/carousel3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './styles.scss';

//! == Composant ==
const CarouselHome = () => (
    <Carousel infiniteLoop stopOnHover={false} autoPlay className="carousel">
        <div className="carousel__container">
            <img className="carousel__image" src={carousel1} alt="restaurant"/>
        </div>
        <div className="carousel__container">
            <img className="carousel__image" src={carousel2} alt="restaurant"/>
        </div>
        <div className="carousel__container">
            <img className="carousel__image" src={carousel3} alt="restaurant"/>
        </div>
    </Carousel>
);

//! == Export ==
export default CarouselHome;
