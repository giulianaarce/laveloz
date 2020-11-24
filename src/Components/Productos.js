import React from 'react';
import Categorias from './Categorias';
import ProductoItem from './ProductoItem';


export default class Productos extends React.Component {
handler_id=()=>{
  this.props.id_producto()
}
  render() {
    return (
      <>
          <Categorias categorias={this.props.categorias}/>
        <div className="contenedor-home">
        {this.props.productos.map((producto) => {
          return (
            <div className="contenedor-productos">
              <ProductoItem title={producto.producto}
                categoria={producto.categoria}
                codigo={producto.codigo}
                descripcion={producto.descripcion}
                marketing={producto.marketing}
                dimension={producto.dimension}
                color={producto.color}
                precio={producto.precio}
                descuento={producto.descuento} 
                imgUrl={producto.imgUrl}
                id={producto._id}
                id_producto={this.handler_id}/>
            </div>
          )
        })}
        </div>
      </>
    )
  }
}