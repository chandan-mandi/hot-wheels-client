import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myBooking/${user.email}`)
        .then(res => res.json())
        .then(data => setMyBookings(data))
    },[])
    const handleDelete = () => {

    }
    return (
        <div>
            <h2>My Orders Available Here</h2>
            <div>
                <h2>Total Booking {myBookings.length}</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {myBookings.map((order, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{order.name.toUpperCase()}</td>
                                <td>{order.email}</td>
                                <td>{order.orderTime}</td>
                                <td>{order.status}</td>
                               
                                <Button onClick={() => handleDelete(order._id)} variant="warning bg-warning m-1">Delete</Button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;