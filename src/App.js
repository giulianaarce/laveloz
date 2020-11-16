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
      productos:"", 
      imagenes:""
    }
  }
  componentDidMount(){
    fetch("http://localhost:4200/api/productos")
    .then((res)=>{return res.json()})
    .then((json) => {
      this.setState({ productos: json })
      console.log(this.state.productos)
    })
    // Imagenes del carrusel
    fetch("http://localhost:4200/api/images").then((res)=>{
      return res.json();
    }).then((img)=>{
      this.setState({imagenes: img});
      console.log(this.state.imagenes);
      console.log(img);
    })
  }
  categorias = (valor)=>{
    const value = valor;
    console.log("click en ", value);
  }
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/home"><Home imagenes={this.state.imagenes}/></Route>
          <Route path="/productos"><Productos selector={this.categorias} productos={this.state.productos}/></Route>
          <Route path="/nosotros"><Nosotros/></Route>
          <Route path="*"><Redirect to="/home"></Redirect></Route>
        </Switch>
      </Router>
    )
  }
}

