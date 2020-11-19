import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Mapa from './Mapa';


export default class Nosotros extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <>
        <div className="title-nosotros">
          <h1> LA VELOZ </h1>
        </div>
        <div className="subtitulo-nosotros">
          <h2>Carpinteria</h2>
        </div>
        <div class="card">
          <div class="card-body">
            <strong>LA VELOZ…Carpintería</strong>, es una micro PyME.
             Fue constituida en 1989, fundada como un emprendimiento familiar.

            La sede social está ubicada en Calle Paraguay Nº 600, Barrio Santo Domingo, Km. 7 ½ de la ciudad de Eldorado, departamento del mismo nombre, Provincia de Misiones, República Argentina.

            La empresa cuenta con más de 20 años de experiencia en la fabricación y comercialización de todo tipo de muebles y aberturas, fabricados en maderas nativas o implantadas, dentro de la zona norte de la Provincia de Misiones.

            Una de las peculiaridades más importantes se centraliza en que para la obtención de sus productos se tienen en cuenta características artesanales, pero se pretende enfocar la producción
            hacia la industrialización.

            Las características artesanales manifiestan gran interés por los detalles y culminaciones logradas, por el trabajo intensivo y el conocimiento específico de un determinado oficio o arte como lo
            es la carpintería.

            Por otra parte, las características industriales tienen en cuenta atributos vinculados con el suministro de materias primas, medios de producción, medios de distribución, comercialización, y otros aspectos referidos a escalas muy diferentes. Aquí se hallan agrupadas ambas características con el fin de obtener productos reconocidos por sus detalles pero cimentada en el conocimiento científico y técnico.

              <h3>NUESTRA MISION:</h3>
          

            <strong>“Satisfacer las necesidades y expectativas de nuestros clientes ofreciéndoles muebles integrales dotados de alta calidad y conceptos innovadores en diseño, relacionados a la multifuncionalidad y la flexibilidad, con el fin de generar ambientes confortables.”</strong>

            Y ambicionamos para nuestro futuro:

           <strong> “Ser una empresa innovadora, con presencia nacional, reconocida por su continuo crecimiento, operando con seguridad y de forma responsable hacia las exigencias de nuestros clientes y la comunidad.”</strong>
          </div>

          <Mapa />

          <div className="contactos">
            {this.props.sucursales.map((tienda)=>{
              return(<div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={tienda.imgUrl} className="card-img" alt="ImagenTienda" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{tienda.nombre}</h5>
                      <p className="card-text">
                          {tienda.direccion}
                      </p>
                      <p className="card-text">
                          {tienda.horario}
                      </p>
                      <p className="card-text">
                        {tienda.telefono}
                      </p>
                      <p className="card-text">
                        {tienda.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)
            })}
          
          </div>


        </div>
        <ul class="list-group">Redes Sociales

        <li class="list-group-item">Facebook</li>
          <li class="list-group-item">Twitter</li>
          <li class="list-group-item">Instagram</li>
        </ul>

      </>
    )
  }
}