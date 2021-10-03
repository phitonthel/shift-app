// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar'

import Dashboard from './pages/Dashboard'

export default function App () {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
