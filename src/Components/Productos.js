import React from 'react';
import { Link } from 'react-router-dom';
import Categorias from './Categorias';



export default class Productos extends React.Component {
  handler_id=(e)=>{
    let id = e.target.value
    console.log("Id", id)
    this.props.id_producto(id)
}
  render() {
    return (
      <>
          <Categorias categorias={this.props.categorias} sendCat={this.props.categ}/>
        <div className="contenedor-home">
        {this.props.productos.map((producto) => {
          return (
            <div className="contenedor-productos" style={{display: "flex", flexwrap: 'wrap',borderradius: '35px 0px 35px 0px',
            mozborderradius: '35px 0px 35px 0px',
            webkitborderradius: '35px 0px 35px 0px',
            border: '2px solid #5878ca',
            justifycontent: 'space-around',
            flexGrow:'5px',
            

            }}>
              <div className="card" style={{width: '18rem'}}>
                <img src={producto.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body" >
                    <h5 className="card-title">{producto.producto}</h5>
                    <p className="card-text">
                        {producto.descripcion}.{producto.marketing}<br/>
                        Colores:{producto.color}<br/>
                        Dimensiones:{producto.dimension}<br/>
                        <strong>${producto.precio}</strong>
                    </p>
                    <Link to="/producto-detalle"><button value={producto._id} onClick={this.handler_id}>Detalle</button></Link>
                </div>
            </div>
            </div>
          )
        })}
        </div>
      </>
    )
  }
}