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

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <h1>Proyecto Final</h1>
    )
  }
}

