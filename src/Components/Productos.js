import React from 'react';
import Categorias from './Categorias';
import ProductoItem from './ProductoItem';


export default class Productos extends React.Component {

  render() {
    return (
      <>
          <Categorias/>
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
                descuento={producto.descuento} />
            </div>
          )
        })}
        </div>
      </>
    )
  }
}