import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './Components/Home';
import Productos from './Components/Productos';
import Nosotros from './Components/Nosotros';
import NavBar from './Components/NavBar';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/productos"><Productos/></Route>
          <Route path="/nosotros"><Nosotros/></Route>
          <Route path="*"><Redirect to="/home"></Redirect></Route>
        </Switch>
      </Router>
    )
  }
}

