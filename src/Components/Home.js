import React from 'react';
import Carrusel from './Carrusel';
import Categorias from './Categorias';
import Presentacion from './Presentación';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <>
        <div className = "titulo-home" >
          <h1>LA VELOZ CARPINTERIA</h1>
        </div>
        
        <Categorias></Categorias>
        <div>
        <Carrusel></Carrusel>
        </div>
        <Presentacion></Presentacion>
      </> 
    )
  }
}