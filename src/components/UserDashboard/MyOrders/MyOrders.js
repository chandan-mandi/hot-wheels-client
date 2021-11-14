import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        fetch(`https://safe-crag-22535.herokuapp.com/myBooking/${user.email}`)
        .then(res => res.json())
        .then(data => setMyBookings(data))
    },[])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure to Cancel the Booking?')
        if(proceed){
            const url = `https://safe-crag-22535.herokuapp.com/deletedBooking/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    toast.success('Booking Cancel')
                    const remaining = myBookings.filter(booking => booking?._id !== id)
                    setMyBookings(remaining);
                }
            })
        }
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
                            <th>Action</th>
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