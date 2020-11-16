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
    this.props.selector(categoria)
  }

  render() {
    return (
      <div>
        <nav className="nav" style={{paddingBottom:20}}>
            <a className="nav-link active" href="#">Todos</a>
            <a className="nav-link active" href="#">Comedor</a>
            <a className="nav-link active" href="#">Dormitorio</a>
            <a className="nav-link active" href="#">Living</a>
            <a className="nav-link active" href="#">Baño</a>
            <a className="nav-link active" href="#">Cocina</a>
        </nav>
      </div>
    )
  }
}