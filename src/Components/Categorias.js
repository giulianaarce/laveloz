import React from 'react';

export default class Categorias extends React.Component {
  constructor() {
    super()
    this.state = {
      categoria: ""

    }
  }
  handlerButton = (e) => {
    const categoria = e.target.value
    this.props.categorias(categoria)
  }

  render() {
    return (
      <div className="categorias">
        <nav className="nav-btn" style={{paddingBottom:30}}>
            <button onClick={this.handlerButton} value="">Todos</button>
            <button onClick={this.handlerButton} value="Comedor">Comedor</button>
            <button onClick={this.handlerButton} value="Dormitorio">Dormitorio</button>
            <button onClick={this.handlerButton} value="Living">Living</button>
            <button onClick={this.handlerButton} value="Baño">Baño</button>
            <button onClick={this.handlerButton} value="Cocina">Cocina</button>
        </nav>
      </div>
    )
  }
}