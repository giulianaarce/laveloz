import React from 'react';


export default class Carrusel extends React.Component {
  constructor(props) {
    super(props)
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
        <div className="carousel-inner" style={{padding:"200px"}}>
          <div className="carousel-item active">
            <img src="https://http2.mlstatic.com/D_NQ_NP_914006-MLA31295025064_072019-O.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/originals/38/17/aa/3817aaf23b7dbdb31d74952401020185.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://lh3.googleusercontent.com/proxy/cG1--xOSYn_ngcQvkQwZaaNurO6GhI6l2rej5Ov4mnLytk-R_Hpsgj938JykCSX8iBDC66N4kSgNb02ketZg9kAA1G3tr3fHwA" className="d-block w-100" alt="..." />
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
    );
  }
}