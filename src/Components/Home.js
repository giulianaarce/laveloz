import React from 'react';
import Carrusel from './Carrusel';
import Categorias from './Categorias';
import Presentacion from './Presentación';

export default class Home extends React.Component {
  /*
    
  */
 
  render() {
    return (
      <div className="home">
        <div className = "titulo-home" >
          <h1>LA VELOZ CARPINTERIA</h1>
        </div>
        <Categorias/>
        <div className="carrusel">
          {
            this.props.images.map((image)=>{
              return(
              <div className="a">  
                <Carrusel url={image.imgUrl}/>
              </div>)
            })
          } 
        </div>
        <Presentacion/>
      </div> 
    )
  }
}