import React from 'react';
import { useParams } from 'react-router';
import MenuBar from '../shared/Navigation/MenuBar';

const CarDetals = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <MenuBar />
            <h2>Car Details Here</h2>
            <h5>Car id: {id}</h5>
        </div>
    );
};

export default CarDetals;