import React from 'react'

export default class ProductoDetalle extends React.Component {
    constructor() {
        super()
        this.state = {
            productos: ""
        }
    }

    componentDidMount() {
        fetch(`http://localhost:4200/api/productos/categoria/producto/${this.props.producto_id}`)
            .then((res) => { return res.json() })
            .then((json) => {
                this.setState({ productos: json })
                console.log(this.state.productos)
            })
    }

    render() {
        return (

            <div style={{ marginTop: 100, marginLeft: 400, paddingRight: 100 }}>
                <div className=" mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.state.productos.imgUrl} className="card-img" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.state.productos.producto}</h5>
                                <p className="card-text">{this.state.productos.descripcion} / {this.state.productos.dimension}</p>
                                <p className="card-text">{this.state.productos.pago} / {this.state.productos.precio}</p>
                                <button>Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}