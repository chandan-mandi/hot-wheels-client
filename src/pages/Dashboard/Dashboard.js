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
import './DashBoard.css';

const Dashboard = () => {
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div className="main-dashboard p-5">
            {/* <MenuBar /> */}
            <Row>
                <Col md={3} sm={12} className="dashboard-right">
                    <h2>Dashboard</h2>
                    <ul>
                        {!admin && <div>
                        <Link to={`${url}`} > <li style={{background: '#7206f7', color: '#fff', width: '200px'}}>Profile</li> </Link>
                        <Link to={`${url}/payment`}> <li style={{background: '#f70661', color: '#fff', width: '200px'}}>Paymet</li> </Link>
                        <Link to={`${url}/myBookings`}> <li style={{background: '#f70661', color: '#fff', width: '200px'}}>My Bookings</li> </Link>
                        <Link to={`${url}/sendReview`}> <li style={{background: '#f70661', color: '#fff', width: '200px'}}>Review</li> </Link>
                        </div>}
                        
                        {admin && <div>
                            <Link to={`${url}/addCarDetails`}> <li style={{background: '#7206f7', color: '#fff', width: '200px'}}>Add a Car</li> </Link>
                            <Link to={`${url}/makeAdmin`}> <li style={{background: '#f70661', color: '#fff', width: '200px'}}>Make Admin</li> </Link>
                            <Link to={`${url}/manageAllBooking`}> <li style={{background: '#7206f7', color: '#fff', width: '200px'}}>Manage All Booking</li> </Link>
                            <Link to={`${url}/manageAllCar`}> <li style={{background: '#f70661', color: '#fff', width: '200px'}}>Manage All Car</li> </Link>
                        </div>
                        }
                       
                        <Link to="/"> <li style={{background: '#f70661', color: '#fff', width: '200px', marginTop: '500px'}}>Back To Home</li> </Link>
                    </ul> </Col>
                <Col md={9} sm={12} className="dashboard-left">
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