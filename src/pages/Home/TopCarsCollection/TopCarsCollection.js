import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CarCard from '../../shared/CarCard/CarCard';
import './TopCarsCollection.css';

const TopCarsCollection = () => {
    const [cars, setCars] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:5000/availableCars')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <div className="top-cars-collection py-3">
            <Container>
                <div className="top-car-header my-3">
                <h2>Top Cars Collection</h2>
                <h6>Buy A Used Car With Confidence</h6>
                </div>
                <Row>
                    {
                        cars.slice(0,6).map(car => <CarCard
                        key={car._id}
                        car={car}
                        ></CarCard>)
                    }
                    
                </Row>
                        
                    
                
            </Container>
        </div>
    );
};

export default TopCarsCollection;