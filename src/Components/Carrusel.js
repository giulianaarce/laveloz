import React from 'react';


export default class Carrusel extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://img.ecologiahoy.com/2017/06/paisajes-naturales-26-1280x720.jpeg" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src="https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos-1280x720.jpg" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src="https://static.wixstatic.com/media/bb1bd6_3a4657894bd746e299162b8f9c001d71~mv2.png/v1/fill/w_1000,h_571,al_c,usm_0.66_1.00_0.01/bb1bd6_3a4657894bd746e299162b8f9c001d71~mv2.png" className="d-block w-100"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
      </div>
    )
  }
}