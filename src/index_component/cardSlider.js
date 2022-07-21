import React from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line
import "swiper/css/bundle";
import CardSliderItem from "./cardSliderItem";
import './cardSliderItem.css'

let cardSlider_data=[
    {
        id:'cd-1',
        img1:'card_slider_image/card_1.jpg',
        img2:'card_slider_image/card_2.jpg',
        img3:'card_slider_image/card_3.jpg',
        img4:'card_slider_image/card_4.jpg',
        img5:'card_slider_image/card_5.jpg',
        img6:'card_slider_image/card_6.jpg',
        img7:'card_slider_image/card_7.jpg',
        img8:'card_slider_image/card_8.jpg',
    }
];


let CardSlider=()=>
{
    return(
    <div className="mt-7 bg-white p-2 pt-5">
        {
        cardSlider_data.map(
            cards=>(
                <CardSliderItem img1={cards.img8} img2={cards.img2} img3={cards.img3} img4={cards.img4} img5={cards.img5} img6={cards.img6} img7={cards.img7} img8={cards.img8}/>
            )
        )
        
        }
        </div>
        );
    
}
export default CardSlider;