import React from 'react';
import './ReviewCard.css';
const ReviewCard = ({ item }) => {
    return (
        <div className="py-5">
            <div className="box">
                <div className="imgBox">
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I5r3I8B9WmmurWPFz3ir_5IYTbcOeBF3SONGQwVXA=s83-c-mo" alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio vitae fugit magnam. Ea quis fuga iste repellendus natus eligendi magnam?</p>
                <h4>{item} Someone Famous <br /> <span>Creative Director</span></h4>
            </div>
        </div>
    );
};

export default ReviewCard;