import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopCarsCollection.css';

const TopCarsCollection = () => {
    return (
        <div className="top-cars-collection py-3">
            <Container>
                <div className="top-car-header my-3">
                <h2>Top Cars Collection</h2>
                <h6>Buy A Used Car With Confidence</h6>
                </div>
                <Row>
                    <Col md={4} className="py-5">
                    <div className="car-card">
                            <h2>Audi A5</h2>
                            <div className="car-img">
                                <img src="https://msmotorindia.in//uploads/car/1624949860used_car_2250812_1619011716%20(1).jpg" alt="" />
                            </div>
                            <div className="match-details">
                                <div className="team1">
                                    <h3 className="team-name">
                                        Kilometer <br /> <span>53778</span>
                                    </h3>
                                </div>
                                <div className="team2">
                                    <h3 className="team-name">
                                    Price <br /> <span>32,00,999</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="py-3">
                    <div className="car-card">
                            <h2>Audi A5</h2>
                            <div className="car-img">
                                <img src="https://i.ibb.co/crpwH2X/b99d9fad678e8e1f12c2362046983d8b.png" alt="" />
                            </div>
                            <div className="match-details">
                                <div className="team1">
                                    <h3 className="team-name">
                                        Kilometer <br /> <span>53778</span>
                                    </h3>
                                </div>
                                <div className="team2">
                                    <h3 className="team-name">
                                    Price <br /> <span>32,00,999</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="py-3">
                    <div className="car-card">
                            <h2>Audi A5</h2>
                            <div className="car-img">
                                <img src="https://msmotorindia.in//uploads/car/1624949860used_car_2250812_1619011711%20(1).jpg" alt="" />
                            </div>
                            <div className="match-details">
                                <div className="team1">
                                    <h3 className="team-name">
                                        Kilometer <br /> <span>53778</span>
                                    </h3>
                                </div>
                                <div className="team2">
                                    <h3 className="team-name">
                                    Price <br /> <span>32,00,999</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="py-3">
                    <div className="car-card">
                            <h2>Audi A5</h2>
                            <div className="car-img">
                                <img src="https://msmotorindia.in//uploads/car/1626947895IMG-20210717-WA0098.jpg" alt="" />
                            </div>
                            <div className="match-details">
                                <div className="team1">
                                    <h3 className="team-name">
                                        Kilometer <br /> <span>53778</span>
                                    </h3>
                                </div>
                                <div className="team2">
                                    <h3 className="team-name">
                                    Price <br /> <span>32,00,999</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                        
                    
                
            </Container>
        </div>
    );
};

export default TopCarsCollection;