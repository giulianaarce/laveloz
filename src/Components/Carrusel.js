import React from 'react';


export default class Carrusel extends React.Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {
              this.props.images.map((image,i)=>{
                return(
                  <li data-target="#carouselExampleControls" data-slide-to={i} className={`${i===0? "active":""}`} />
                )
              })}
            </ol>
            <div className="carousel-inner">
              {
                 this.props.images.map((image,i) => {
                      return(
                      <div className={`carousel-item ${i===0? "active":""}`}>
                          <img src={image.imgUrl} className="d-block w-100" alt="imagen" />
                        </div>
                      )
                  })
                }
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}