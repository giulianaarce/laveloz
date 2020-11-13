import React from 'react';
import Carrusel from './Carrusel';
import Categorias from './Categorias';
import ProductoItem from './ProductoItem';


export default class Productos extends React.Component {

  render() {
    return (
      <div>
        <Carrusel/>
        <div style={{justifyContent:"center"}}>
        <ProductoItem/>
        </div>
        <div style={{justifyContent:"center"}}>
        <Categorias selector={this.props.selector}/>
        </div>
      </div>
    )
  }
}