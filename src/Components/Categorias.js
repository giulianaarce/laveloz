import React from 'react';
import { Link } from 'react-router-dom';

export default class Categorias extends React.Component {
  constructor() {
    super()
    this.state = {
      categorias: ""

    }
  }
  
  handlerButton = (e) => {
    const categoria = e.target.value
    console.log(categoria)
    this.props.sendCat(categoria)
  }

  render() {
    return (
      <div className="categorias">
        <nav className="nav-btn" style={{paddingBottom:30}}>
            <Link to="/productos"><button onClick={this.handlerButton} value="">Todos</button></Link>
            {this.props.categorias.map((categoria)=>{
              return (
              <Link to="/productos"><button onClick={this.handlerButton} value={categoria.categoria}>{categoria.categoria}</button></Link>
              )
            })}
        </nav>
      </div>
    )
  }
}