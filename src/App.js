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
      productos: "",
      imagenes: "",
      categoria: ""
    }
  }
  componentDidMount() {
    fetch("http://localhost:4200/api/productos")
      .then((res) => { return res.json() })
      .then((json) => {
        this.setState({ productos: json })
        console.log(this.state.productos)
      })
    fetch("http://localhost:4200/api/images")
      .then((res) => { return res.json(); })
      .then((json) => {
        console.log(json)
        if (json !== undefined) {
          this.setState({ imagenes: json })
          return console.log(this.state.imagenes)
        }
      })
  }

  categorias = (valor) => {
    const value = valor;
    console.log("click en ", value);
    fetch('http://localhost:4200/api/productos/' + value)
      .then((res) => { return res.json() })
      .then((json) => {
        console.log(json)
         this.setState({ categoria: json })
          console.log(this.state.categoria)
        })
  }
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/home"><Home images={this.state.imagenes || []} /></Route>
            <Route path="/productos"><Productos productos={this.state.productos || []} categorias={this.categorias} /></Route>
            <Route path="/nosotros"><Nosotros /></Route>
            <Route path="*"><Redirect to="/home"></Redirect></Route>
          </Switch>
        </Router>
        <footer>Facebok. Instagram. Twitter</footer>
      </>
    )
  }
}

