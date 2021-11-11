import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ReviewCard from '../Home/Reviews/ReviewCard/ReviewCard';
import CarCard from '../shared/CarCard/CarCard';
import MenuBar from '../shared/Navigation/MenuBar';

const CarsCollection = () => {
    const [cars, setCars] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:5000/availableCars')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <div className="cars-collection-page">
            <MenuBar></MenuBar>
            <div className="container py-5">  
            <h2>All Cars Available Here</h2>
                <Row>
                    {
                        cars.map(car => <CarCard
                        key={car.id}
                        car={car}
                        ></CarCard>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default CarsCollection;