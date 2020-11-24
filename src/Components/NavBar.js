import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return(
        <div className="header">
            <ul className="nav justify-content-end navbar-dark bg-dark" >
                <li className="nav-item">
                    <Link className="nav-link active" style={{fontSize:22}} to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={{fontSize:22}} to="/productos">Productos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={{fontSize:22}} to="/nosotros">Nosotros</Link>
                </li>
            </ul>
        </div>

        )
    }
}