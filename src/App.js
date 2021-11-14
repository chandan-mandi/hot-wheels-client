import logo from './logo.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import CarsCollection from './pages/CarsCollection/CarsCollection';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './components/Context/AuthProvider';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CarDetals from './pages/CarDetails/CarDetals';
import BookingCar from './pages/CarDetails/CarBooking/BookingCar';
import Dashboard from './pages/Dashboard/Dashboard';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/carsCollection">
              <CarsCollection></CarsCollection>
            </Route>
            <Route path="/carDetails/:id">
              <CarDetals></CarDetals>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/carBooking/:id">
              <BookingCar></BookingCar>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
