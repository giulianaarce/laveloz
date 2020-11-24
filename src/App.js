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
import Footer from './Components/Footer';
import ProductoDetalle from './Components/ProductoDetalle'
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      productos: "",
      imagenes: "",
      categoria: "",
      textoMarketing:"",
      productosFav:"",
      sucursales:"",
      producto_id:""
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

      //Tiendas 
      fetch("http://localhost:4200/api/sucursales")
      .then((res)=>{return res.json()})
      .then((json) => {
        if(json !== undefined){
        this.setState({ sucursales: json })
        console.log(this.state.sucursales)}
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

  //Formulario de Home
  novedadesEmail = (name, email)=> {
    const FORMHOME = {
      nameNov: name,
      emailNov: email
    }
    if(name !== "" || email !== ""){
      fetch('http://localhost:4200/api/email', {
        method: 'POST',
        body: JSON.stringify(FORMHOME),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((res)=> {return res.json()})
      .then((json)=> { return console.log(json);})

    }
  }

  //Formulario de contacto en "Nosotros"
  enviarContacto = (nameCon, emailCon, messageCon, phoneCon) =>{
    const FORMCONTACTO = {
      name: nameCon, 
      email: emailCon, 
      phone: phoneCon,
      message: messageCon
    }
    if(nameCon !== "" || emailCon !== "" || messageCon !== "" || phoneCon !== ""){
      fetch('http://localhost:4200/api/contactForm/', {
        method: 'POST',
        body: JSON.stringify(FORMCONTACTO),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((res)=> {return res.json()})
      .then((json)=> { return console.log(json);})

    }
  }
  //Detalle de producto

  id_producto = (valor)=>{
    const value = valor
    console.log("Id desde app",value)
    this.setState({producto_id:value})

  }
  


  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/home"><Home images={this.state.imagenes || []}  textoM ={this.state.textoMarketing || []} productosFav={this.state.productosFav || []} novedadesEmail={this.novedadesEmail}/></Route>
            <Route path="/productos"><Productos productos={this.state.productos || []} categorias={this.categorias} id_producto={this.id_producto} /></Route>
            <Route path ="/producto-detalle"><ProductoDetalle producto_id={this.state.producto_id}/></Route>
            <Route path="/nosotros"><Nosotros sucursales={this.state.sucursales || []} enviarContacto={this.enviarContacto} /></Route>
            <Route path="*"><Redirect to="/home"></Redirect></Route>
          </Switch>
        </Router>
        <Footer/>
      </>
    )
  }
}

