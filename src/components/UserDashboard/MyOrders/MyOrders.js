import React, { useEffect, useState } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(myBookings);

    useEffect(() => {
        fetch(`https://safe-crag-22535.herokuapp.com/myBooking/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyBookings(data)
                setLoading(false);
            })

    }, [user.email])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure to Cancel the Booking?')
        if (proceed) {
            const url = `https://safe-crag-22535.herokuapp.com/deletedBooking/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Booking Cancel')
                        const remaining = myBookings.filter(booking => booking?._id !== id)
                        setMyBookings(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <div className="cardHeader">
                <h2>Recent Orders</h2>
                <Link to="" className="view-all-btn">View All</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Car Name</td>
                        <td>Address</td>
                        <td>Test Drive Date</td>
                        <td>Status</td>
                        <td>Cancel Order</td>
                    </tr>
                </thead>
                {loading ? <Spinner animation="border" variant="danger" /> :
                    myBookings.map(order => (
                        <tbody>
                            <tr>
                                <td>{order.name}</td>
                                <td>{order.CarName}</td>
                                <td>{order.address}</td>
                                <td>{order.testDriveDate}</td>
                                <td><span className={order.status === "pending" ? "status pending" : order.status === "Pending" ? "status pending" : order.status === "On going" ? "status inprogress" : order.status === "Done" ? "status delivered" : null}>{order.status}</span></td>
                                <Button onClick={() => handleDelete(order._id)} variant="danger bg-danger m-1">Order Cancel</Button>
                            </tr>

                        </tbody>
                    ))}
            </table>

        </div>
    );
};

export default MyOrders;