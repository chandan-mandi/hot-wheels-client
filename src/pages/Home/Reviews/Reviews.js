import React from 'react';
import Slider from "react-slick";
import './Review.css';

import LeftArrow from "../../../assets/left-arrow.svg"
import RightArrow from "../../../assets/right-arrow.svg"
import ReviewCard from './ReviewCard/ReviewCard';


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
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };
    return (
        <div className="container py-5">
            <h2>Client Says</h2>
            <Slider {...settings}>
                {[1, 2, 3, 4,5].map((item, index) =>
                    <ReviewCard
                    key={index}
                    item={item}
                    ></ReviewCard>
                )}
            </Slider>
        </div>

    );
};

export default Reviews;