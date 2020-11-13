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
  categorias = (valor)=>{
    const value = valor
    console.log("click en ", value)
  }
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/productos"><Productos selector={this.categorias}/></Route>
          <Route path="/nosotros"><Nosotros/></Route>
          <Route path="*"><Redirect to="/home"></Redirect></Route>
        </Switch>
      </Router>
    )
  }
}

