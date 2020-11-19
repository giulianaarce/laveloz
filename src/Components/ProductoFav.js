import React from 'react'

export default class ProductoFav extends React.Component {
    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
                <img src={this.props.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">
                        <strong>${this.props.precio}</strong>
                    </p>
                    <a href="#" className="btn btn-primary" color="success">Comprar</a>
                </div>
            </div>
        )
    }
}