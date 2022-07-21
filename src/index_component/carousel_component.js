import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

import one from './carousel_img/one.jpg';
import two from './carousel_img/two.jpg';
import three from './carousel_img/three.jpg';
import four from './carousel_img/four.jpg';



export default function CarouselComponent() {
    return (
        <div className=" carousel-wrapper carousel_main_div ">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} >
                <div>
                    <img src={one} className="h-96"/>
                </div>
                <div>
                    <img src={two} className="h-96"/>
                </div>
                <div>
                <img src={three} className="h-96"/>
                </div>
                <div>
                <img src={four} className="h-96"/>
                </div>
            </Carousel>
        </div>
    );
}