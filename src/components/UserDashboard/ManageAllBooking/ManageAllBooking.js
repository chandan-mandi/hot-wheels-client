import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

const ManageAllBooking = () => {
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    // ORDER DETELE HANDLER
    const handleDelete = (id) => {

    }
    // ORDER UPDATE HANDLER
    const handleUpdate = (id) => {

    }
    // HANDLE STATUS CHANGE
    const handleStatusChange = (id, status) => {
        let modifiedBooking = [];
        booking.forEach(order => {
            if(order._id === id) {
                order.status = status;
            }
            modifiedBooking.push(order)
        })
        setBooking(modifiedBooking)

        const modifiedStatus = {id, status}

        axios.patch(`http://localhost:5000/booking/${id}`, modifiedStatus)
        .then(res => res.data && toast.success(`Set to ${status}`))
        .catch(error => alert(error.message))
    }
    return (
        <div className="px-3">
            <h2>Manage All Bookings</h2>
            <div>
                <h2>Total Booking {booking.length}</h2>
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
                    {booking.map((order, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{order.name.toUpperCase()}</td>
                                <td>{order.email}</td>
                                <td>{order.orderTime}</td>
                                <td>
                                    <select
                                        className={order.status === "Pending" ? "btn btn-danger" : order.status === "Done" ? "btn btn-success" : "btn btn-info"}
                                        defaultValue={order.status}
                                        onChange={e => handleStatusChange(order._id, e.target.value)}>
                                        <option className="bg-white text-muted">Pending</option>
                                        <option className="bg-white text-muted">On going</option>
                                        <option className="bg-white text-muted">Done</option>
                                    </select>
                                    <Toaster/>
                                </td>
                                <Button onClick={() => handleDelete(order._id)} variant="warning bg-warning m-1">Delete</Button>
                                <Button onClick={() => handleUpdate(order._id)} variant="warning bg-warning m-1">Update</Button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default ManageAllBooking;