import React from 'react';


export default class Carrusel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLPoChhvdAB0mlm3yaKdYtJ-RWjgHmOs205A&usqp=CAU" className="d-block w-100" alt="Baño" />
          </div>
          <div className="carousel-item active">
            <img src="https://geant.vteximg.com.br/arquivos/ids/209203-700-700/597088.jpg?v=636438539521800000" className="d-block w-100" alt="Comedor" />
          </div>
          <div className="carousel-item active">
            <img src="https://lh3.googleusercontent.com/proxy/cG1--xOSYn_ngcQvkQwZaaNurO6GhI6l2rej5Ov4mnLytk-R_Hpsgj938JykCSX8iBDC66N4kSgNb02ketZg9kAA1G3tr3fHwA" className="d-block w-100" alt="Dormitorio" />
          </div>
          <div className="carousel-item active">
            <img src="https://http2.mlstatic.com/D_NQ_NP_914006-MLA31295025064_072019-O.jpg" className="d-block w-100" alt="Living" />
          </div>
          <div className="carousel-item active">
            <img src="https://i.pinimg.com/originals/38/17/aa/3817aaf23b7dbdb31d74952401020185.jpg" className="d-block w-100" alt="Cocina" />
          </div>
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
    )
  }
}