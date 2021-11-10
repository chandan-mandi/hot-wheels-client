import React from 'react';
import Slider from "react-slick";
import './Review.css';

import LeftArrow from "../../../assets/left-arrow.svg"
import RightArrow from "../../../assets/right-arrow.svg"


const Reviews = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src="https://cdn-icons-png.flaticon.com/512/271/271218.png" alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png" alt="nextArrow" {...props} />
    );

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };
    return (
        <div className="container">
            <h2> Single Item</h2>
            <Slider {...settings}>
                {[1, 2, 3, 4,5].map((item, index) =>
                    <div
                        className="card__container--inner--card"
                        key={index}>
                        <img src={item.url} alt="hero_img" />
                        <div className="card__container--inner--card--date_time">
                            <p>4D-5D</p>
                            <p>Delhi</p>
                        </div>
                        <p>Meghalaya Backpacking</p>
                        <p>starts at <span>₹15,999/-</span></p>
                    </div>
                )}
            </Slider>
        </div>

    );
};

export default Reviews;