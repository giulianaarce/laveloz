import React from 'react';


export default class Presentacion extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="presentacion" style={{padding: "50px"}}>
        {this.props.presentacion.map((textoM)=>{
         return(<p style={{fontSize:30}}>{textoM.descripcion}</p>)
       })}
       </div>
    )
  }
}