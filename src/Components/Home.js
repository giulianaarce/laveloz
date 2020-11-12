import React from 'react';
import Carrusel from './Carrusel';
import Categorias from './Categorias';
import Presentacion from './Presentación';

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <>
        <h1>Home</h1>
        <Carrusel></Carrusel>
        <Categorias></Categorias>
        <Presentacion></Presentacion>
      </>
      
    )
  }
}