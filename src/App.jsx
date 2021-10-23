import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LandingPage } from './features/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './features/Globals/features/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ApplyPage } from './features/ApplyPage/ApplyPage'
import { PricingPage } from './features/PricingPage/PricingPage'


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/apply" component={ApplyPage} />
          <Route exact path="/pricing" component={PricingPage} />
        </div>

      </Router>

    );  
  }
}
