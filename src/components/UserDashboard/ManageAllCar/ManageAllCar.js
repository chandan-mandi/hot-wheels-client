import React, { useEffect, useState } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory, useRouteMatch } from 'react-router';

const ManageAllCar = () => {
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState([]);
    const history = useHistory();
    let { path, url } = useRouteMatch();
 
    useEffect(() => {
        fetch('https://safe-crag-22535.herokuapp.com/availableCars')
        .then(res => res.json())
        .then(data => {
            setCars(data);
            setLoading(false);
        })
        .catch(error => toast.error(error.message))
    },[])

    // CAR DETELE HANDLER
    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure to Delete the Car Details?')
        if (proceed) {
            const url = `https://safe-crag-22535.herokuapp.com/deletedCar/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Car Details Deteled')
                        const remaining = cars.filter(car => car?._id !== id)
                        setCars(remaining);
                    }
                })
        }
    }
    // CAR UPDATE HANDLER
    const handleUpdate = (id) => {
        const uri = `update/${id}`;
        history.push(uri)
    }
    return (
        <div>
            <h2>Manage All Car</h2>
            <div>
                <h2>Total Booking {cars.length}</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    { loading ? <Spinner animation="border" variant="danger" /> :
                    cars.map((car, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td style={{width: '180px'}}><img src={car.img} style={{width: '150px', height: '100px'}} alt="" /> </td>
                                <td>{car.name.toUpperCase()}</td>
                                <td>{car.price}</td>
                                
                                <Button onClick={() => handleDelete(car._id)} variant="danger bg-danger text-light m-1">Delete</Button>
                                <Button onClick={() => handleUpdate(car._id)} variant="warning bg-warning m-1">Update</Button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
            <Toaster/>
        </div>
    );
};

export default ManageAllCar;