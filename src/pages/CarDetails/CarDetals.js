import { faRupeeSign, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import MenuBar from '../shared/Navigation/MenuBar';
import './CarDetails.css';

const CarDetals = () => {
    const { id } = useParams();
    const [specificCar, setSpecificCar] = useState({});
    const { name, price, img, mileage, _id } = specificCar;
  


    const history = useHistory();
    useEffect(() => {
        const url = `http://localhost:5000/availableCars/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSpecificCar(data))
    }, [])

    const handleCarBooking = (id) => {
        const uri = `/carBooking/${id}`
        history.push(uri)
    }
    return (
        <div>
            <MenuBar />
            <Container className="py-5">
                <h2 className="text-center pb-4">Car Details Here</h2>
                <Row className="car-details py-3">
                    <Col lg={6} md={5} sm={12} xs={12}>
                        <div className="car-img-box">
                            <img src={img} alt="" />
                        </div>
                    </Col>
                    <Col lg={6} md={5} sm={12} xs={12}>
                        <div className="car-content-box">
                            <h2>{name}</h2>
                            <div className="car-price py-2">
                                <FontAwesomeIcon className="price-icon" icon={faRupeeSign} />
                                <span>{price}</span>
                            </div>
                            <Button onClick={() => handleCarBooking(_id)} variant="warning">Book Your Car</Button>
                            <div className="offer-icon py-2">
                                <FontAwesomeIcon icon={faTags}>
                                </FontAwesomeIcon>
                                <span>Don't miss out on the best offers for this month</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h2>Key Specs of {name}</h2>
                    <Col lg={2} md={2} sm={6}>
                        <div className="car-specification">
                            <div className="spec-icon">

                            </div>
                            <h6>{mileage}kmpl</h6>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default CarDetals;