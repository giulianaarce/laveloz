import React from 'react';


export default class Carrusel extends React.Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleControls" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleControls" data-slide-to={1} />
          <li data-target="#carouselExampleControls" data-slide-to={2} />
          <li data-target="#carouselExampleControls" data-slide-to={3} />
          <li data-target="#carouselExampleControls" data-slide-to={4} />
          <li data-target="#carouselExampleControls" data-slide-to={5} />
          <li data-target="#carouselExampleControls" data-slide-to={6} />
          
        
        </ol>
        <div className="carousel-inner">
          {this.props.images.map((image) => {
            if (image.imgUrl[0]) {
              return (
                <div className="carousel-item active">
                  <img src={image.imgUrl} className="d-block w-100" alt="imagen" />
                </div>
              )
            } else {
              return (
                <div className="carousel-item">
                  <img src={image.imgUrl} className="d-block w-100" alt="imagen" />
                </div>
                )
                }
          })}
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