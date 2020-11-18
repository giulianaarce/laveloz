import React from 'react';


export default class Carrusel extends React.Component {
  render() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#" data-slide-to={0} className="active" />
          <li data-target="#" data-slide-to={1} />
          <li data-target="#" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={this.props.url} className="d-block w-100" alt="imagen" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}