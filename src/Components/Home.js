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
        <h1>La Veloz Carpintería</h1>
        <div>
        <Carrusel></Carrusel>
        </div>
        <Categorias></Categorias>
        <Presentacion></Presentacion>
      </> 
    )
  }
}