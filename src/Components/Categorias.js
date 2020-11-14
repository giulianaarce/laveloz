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
          <ul className="nav flex-column">
            <li className="nav-item">
              <button onClick={this.handlerButton} className="nav-link" value="boton">Dormitorio</button>
            </li>
            <li className="nav-item">
              <button onClick={this.handlerButton} className="nav-link" value="Baño">Baño</button>
            </li>
            <li className="nav-item">
              <button onClick={this.handlerButton} className="nav-link" value="Living">Living</button>
            </li>
            <li className="nav-item">
              <button onClick={this.handlerButton} className="nav-link" value="Comedor">Comedor</button>
            </li>
          </ul>
      </div>
    )
  }
}