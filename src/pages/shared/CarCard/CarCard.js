import React from 'react';
import { Col, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


const CarCard = ({ car, loading }) => {
    const { name, _id, price, img, mileage } = car;
    const history = useHistory();
    const handleCarDetail = (id) => {
        const uri = `/carDetails/${id}`
        history.push(uri)
    }
    return (
        <Col md={4} className="py-5" onClick={() => handleCarDetail(_id)}>
            <div className="car-card">
                <Fade bottom duration={1000} distance="40px">
                    <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                    <div className="car-img">
                        {loading ? <Spinner animation="border" variant="danger" /> : <img src={img} alt="" />}
                    </div>
                    <div className="match-details">
                        <div className="team1">
                            <h3 className="team-name">
                                Mileage <br /> <span>{mileage}</span>
                            </h3>
                        </div>
                        <div className="team2">
                            <h3 className="team-name">
                                Price <br /> <span>{price}</span>
                            </h3>
                        </div>
                    </div>
                </Fade>
            </div>
        </Col>
    );
};

export default CarCard;