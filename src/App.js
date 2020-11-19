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
      categoria: "",
      textoMarketing:"",
      productosFav:""
    }
  }
  componentDidMount() {
    //Productos
    fetch("http://localhost:4200/api/productos")
      .then((res) => { return res.json() })
      .then((json) => {
        this.setState({ productos: json })
        console.log(this.state.productos)
      })
    //Imagenes del carrusel
    fetch("http://localhost:4200/api/images")
    .then((res) => { return res.json(); })
    .then((json) => { 
      console.log(json)
      if(json !== undefined){
        this.setState({ imagenes: json }) 
        return console.log(this.state.imagenes)
      }
      })

      //Texto de Marketing
      fetch("http://localhost:4200/api/textMarketing")
      .then((res)=>{return res.json()})
      .then((json) => {
        if(json !== undefined){
        this.setState({ textoMarketing: json })
        console.log(this.state.textoMarketing)}
      })

      //Productos favoritos
      fetch("http://localhost:4200/api/sugeridos")
      .then((res)=>{return res.json()})
      .then((json) => {
        if(json !== undefined){
        this.setState({ productosFav: json })
        console.log(this.state.productosFav)}
      })
  }

  categorias = (valor) => {
    const value = valor;
    console.log("click en ", value);
    fetch('http://localhost:4200/api/productos/' + value)
      .then((res) => { return res.json() })
      .then((json) => {
        console.log(json)
         this.setState({ productos: json })
          console.log(this.state.productos)
        })
  }
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/home"><Home images={this.state.imagenes || []}  textoM ={this.state.textoMarketing || []} productosFav={this.state.productosFav || []}/></Route>
            <Route path="/productos"><Productos productos={this.state.productos || []} categorias={this.categorias} /></Route>
            <Route path="/nosotros"><Nosotros /></Route>
            <Route path="*"><Redirect to="/home"></Redirect></Route>
          </Switch>
        </Router>
        <footer>Facebook. Instagram. Twitter</footer>
      </>
    )
  }
}

