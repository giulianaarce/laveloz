import React from 'react';
import { Link } from 'react-router-dom';
import Carrusel from './Carrusel';
import Categorias from './Categorias';
import Presentacion from './Presentación';


export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: ""
    }
  }
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }
  handleClick = () => {
    const { name, email } = this.state;
    this.props.novedadesEmail(name, email);
  }
  handler_id=(e)=>{
   let id = e.target.value
   console.log("Id desde home", id)
    this.props.producto_id(id)
  }

  render() {
    return (
      <div className="home">

        <div className="titulo-home" >
          <h1>LA VELOZ CARPINTERIA</h1>
        </div>

        <Categorias categorias={this.props.categorias} sendCat={this.props.categ} />

        <div className="carrusel">
          <Carrusel images={this.props.images} />
        </div>
        <Presentacion presentacion={this.props.textoM} />

        <h2 style={{ padding: "50px" }} className="titulo-home">Productos destacados de la semana</h2>

        <div className="contenedor-home">
          {this.props.productosFav.map((producto) => {
            return (
              <div className="card" style={{ width: '18rem' }}>
                <img src={producto.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{producto.producto}</h5>
                  <p className="card-text">
                    <strong>${producto.precio}</strong>
                  </p>
                  <Link to="/producto-detalle-fav"><button value={producto._id} onClick={this.handler_id}>Detalle</button></Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="contacto" style={{ paddingTop: "30px" }}>
          <p style={{ fontSize: 30 }}>Entérate primero, recibí las novedades y promociones en tu correo.</p>
          <form>
            <div className="form-group" style={{ width: '80rem' }}>
              <input type="text" class="form-control" placeholder="Ingrese su nombre" onChange={this.handleNameChange} required />
            </div>
            <div className="form-group" style={{ width: '80rem' }}>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su email" onChange={this.handleEmailChange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Enviar</button>
          </form>
        </div>

      </div>
    )
  }
}