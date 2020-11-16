import React from 'react'

export default class ProductoItem extends React.Component {
    render() {
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.props.categoria}</li>
                        <li className="list-group-item">{this.props.descripcion}</li>
                        <li className="list-group-item">{this.props.color}</li>
                        <li className="list-group-item">{this.props.codigo}</li>
                    </ul>
                </div>
                <p className="card-text">{this.props.marketing}</p>
            </div>
        )
    }
}