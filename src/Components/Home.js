import React from 'react';
import Carrusel from './Carrusel';
import Categorias from './Categorias';
import Presentacion from './Presentación';
import ProductoFav from './ProductoFav'

export default class Home extends React.Component {
 
  render() {
    return (
      <div className="home">
        <div className = "titulo-home" >
          <h1>LA VELOZ CARPINTERIA</h1>
        </div>
        <Categorias/>
        <div className="carrusel"> 
                <Carrusel images={this.props.images}/> 
        </div>
        <Presentacion presentacion={this.props.textoM}/>
        
        <h2 style={{padding: "50px"}}>Productos destacados de la semana</h2>
        <div className="contenedor-home">
            {this.props.productosFav.map((producto)=>{
              return(<ProductoFav imgUrl={producto.imgUrl} title={producto.producto} precio={producto.precio} descuento={producto.descuento}/>)
            })}
        </div>
      </div> 
    )
  }
}