import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import AddCarDetails from '../../components/UserDashboard/AddCarDetails/AddCarDetails';
import MakeAdmin from '../../components/UserDashboard/MakeAdmin/MakeAdmin';
import ManageAllBooking from '../../components/UserDashboard/ManageAllBooking/ManageAllBooking';
import MyOrders from '../../components/UserDashboard/MyOrders/MyOrders';
import Payment from '../../components/UserDashboard/Payment/Payment';
import Profile from '../../components/UserDashboard/Profile/Profile';
import SendReview from '../../components/UserDashboard/SendReview/SendReview';
import MenuBar from '../shared/Navigation/MenuBar';

const Dashboard = () => {
    
    let { path, url } = useRouteMatch();
    return (
        <div className="main-dashboard">
            <MenuBar/>
            <Row>
                <Col md={3} sm={12}>
                    <h2>Dashboard</h2>
                    <ul>
                    <Link to={`${url}`}> <li>Profile</li> </Link>
                    <Link to={`${url}/payment`}> <li>Paymet</li> </Link>
                    <Link to={`${url}/myBookings`}> <li>My Bookings</li> </Link>
                    <Link to={`${url}/sendReview`}> <li>Review</li> </Link>
                    {/* <Link> <li>My Orders</li> </Link> */}
                    <hr />
                    <Link to={`${url}/addCarDetails`}> <li>Add a Car</li> </Link>
                    <Link to={`${url}/makeAdmin`}> <li>Make Admin</li> </Link>
                    <Link to={`${url}/manageAllBooking`}> <li>Manage All Booking</li> </Link>
                    <Link to={`${url}/manageAllCar`}> <li>Manage All Car</li> </Link>
                    <Link> <li>Logout</li> </Link>
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
                       <Route path={`${path}/addCarDetails`}>
                           <AddCarDetails></AddCarDetails>
                       </Route>
                       <Route path={`${path}/makeAdmin`}>
                           <MakeAdmin></MakeAdmin>
                       </Route>
                       <Route path={`${path}/manageAllBooking`}>
                           <ManageAllBooking/>
                       </Route>
                       
                   </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;