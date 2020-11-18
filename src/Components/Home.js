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
        <h1>La Veloz Carpintería</h1>
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