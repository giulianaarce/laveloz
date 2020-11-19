import React from 'react'

export default class ProductoItem extends React.Component {
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
                    <a href="#" className="btn btn-primary" color="success">Comprar</a>
                </div>
            </div>
        )
    }
}