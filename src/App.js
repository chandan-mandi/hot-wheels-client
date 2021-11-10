import logo from './logo.svg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import CarsCollection from './pages/CarsCollection/CarsCollection';

function App() {
  return (
    <div className="App">
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
