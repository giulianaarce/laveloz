import React from 'react';
import { FaRegHeart } from "react-icons/fa"; 
import { FaHeart } from "react-icons/fa"; 


export default class ProductoDetalle extends React.Component {
    constructor() {
        super()
        this.state = {
            productos: "",
            init_point:""
        }
    }
    handleClick = ()=>{
        console.log("Se ha agregado a Favoritos");
      }

    componentDidMount() {
        fetch(`http://localhost:4200/api/productos/categoria/producto/${this.props.producto_id}`)
            .then((res) => { return res.json() })
            .then((json) => {
                this.setState({ productos: json })
                console.log(this.state.productos)
            })

        fetch(`http://localhost:4200/api/mercadopago/${this.props.producto_id}`)
        .then((res)=>{return res.json()})
        .then((json)=>{
            console.log("init", json)
            this.setState({init_point:json.init_point})
            console.log("init_point", this.state.init_point)
        })
    }

    render() {
        return (

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                <div>
                    <div className="dheader" style={{paddingTop:'50px'}}>
                    <button type="button" className="btn"  onClick={this.handleClick}><FaRegHeart size='2rem'/></button>
                    <button type="button" className="btn"  ><FaHeart color='red' size='2rem'/></button>
                    </div>
                    <img style={{ width: 350, marginTop: 100 }} src={this.state.productos.imgUrl} />
                </div>
                <div style={{ marginTop: 100, marginRight: 700 }}>
                    <h1>{this.state.productos.producto}</h1>
                    <ul>
                        <li className="list-group-item">Medidas: {this.state.productos.dimension}</li>
                        <li className="list-group-item">Color: {this.state.productos.color}</li>
                        <li className="list-group-item">{this.state.productos.descripcion}</li>
                        <li className="list-group-item">Precio: ${this.state.productos.precio}</li>
                        <li className="list-group-item">Forma de pago: {this.state.productos.pago}</li>
                    </ul>
                    <a target="_blank_" href={this.state.init_point}><button type="button">Comprar</button></a>
                </div>

            </div>
        )
    }   
}