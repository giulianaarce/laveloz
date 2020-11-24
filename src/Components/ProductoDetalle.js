import React from 'react'

export default class ProductoFav extends React.Component {
    render() {
        return (
            <div >
                <div className="card" style={{width: '18rem'}}>
                <div className="card-header">
                    Featured
                </div>
                    <img src={this.props.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">
                            {this.props.descripcion}<br/>
                            Colores: {this.props.color}<br/>
                            Dimensiones: {this.props.dimension}<br/>
                            Descuento: {this.props.descuento}<br/>
                            Formas de pago: {this.props.pago}<br/>
                            <strong>${this.props.precio}</strong>
                        </p>
                        <a href="#" className="btn btn-primary" color="success">Comprar</a>
                    </div>
                </div>          
            </div>
        )
    }
}