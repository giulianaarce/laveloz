import React from 'react'
import { Link } from 'react-router-dom'

export default class ProductoItem extends React.Component {
    handler_id=(e)=>{
        let id = e.target.value
        console.log("Id desde ProductItem", id)
        this.props.id_producto(id)
    }
    
    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
                <img src={this.props.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">
                        {this.props.descripcion}.{this.props.marketing}<br/>
                        Colores:{this.props.color}<br/>
                        Dimensiones:{this.props.dimension}<br/>
                        <strong>${this.props.precio}</strong>
                    </p>
                    <Link to="/producto-detalle"><button value={this.props.id} onClick={this.handler_id}></button></Link>
                </div>
            </div>
        )
    }
}