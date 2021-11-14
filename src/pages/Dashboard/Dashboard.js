import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../components/hooks/useAuth';
import AddCarDetails from '../../components/UserDashboard/AddCarDetails/AddCarDetails';
import MakeAdmin from '../../components/UserDashboard/MakeAdmin/MakeAdmin';
import ManageAllBooking from '../../components/UserDashboard/ManageAllBooking/ManageAllBooking';
import ManageAllCar from '../../components/UserDashboard/ManageAllCar/ManageAllCar';
import MyOrders from '../../components/UserDashboard/MyOrders/MyOrders';
import Payment from '../../components/UserDashboard/Payment/Payment';
import Profile from '../../components/UserDashboard/Profile/Profile';
import SendReview from '../../components/UserDashboard/SendReview/SendReview';
import Update from '../../components/UserDashboard/Update/Update';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import MenuBar from '../shared/MenuBar/MenuBar';

const Dashboard = () => {
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div className="main-dashboard">
            {/* <MenuBar /> */}
            <Row>
                <Col md={3} sm={12}>
                    <h2>Dashboard</h2>
                    <ul>
                        {!admin && <div>
                        <Link to={`${url}`}> <li>Profile</li> </Link>
                        <Link to={`${url}/payment`}> <li>Paymet</li> </Link>
                        <Link to={`${url}/myBookings`}> <li>My Bookings</li> </Link>
                        <Link to={`${url}/sendReview`}> <li>Review</li> </Link>
                        </div>}
                        {/* <Link> <li>My Orders</li> </Link> */}
                        <hr />
                        {admin && <div>
                            <Link to={`${url}/addCarDetails`}> <li>Add a Car</li> </Link>
                            <Link to={`${url}/makeAdmin`}> <li>Make Admin</li> </Link>
                            <Link to={`${url}/manageAllBooking`}> <li>Manage All Booking</li> </Link>
                            <Link to={`${url}/manageAllCar`}> <li>Manage All Car</li> </Link>
                        </div>
                        }
                        <Link to="/"> <li>Logout</li> </Link>
                        <Link to="/"> <li>Back To Home</li> </Link>
                    </ul> </Col>
                <Col md={9} sm={12}>
                    <Switch>
                        <Route exact path={path}>
                            <Profile></Profile>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/myBookings`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/sendReview`}>
                            <SendReview></SendReview>
                        </Route>
                        <AdminRoute path={`${path}/addCarDetails`}>
                            <AddCarDetails></AddCarDetails>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageAllBooking`}>
                            <ManageAllBooking />
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageAllCar`}>
                            <ManageAllCar/>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/update/:id`}>
                            <Update/>
                        </AdminRoute>

                    </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;