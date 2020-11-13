import React from 'react';
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
        <h1> LA VELOZ </h1>
        <h2>Carpinteria</h2>
        <div class="card">
          <div class="card-body">
            <strong>LA VELOZ…Carpintería</strong>, es una micro PyME.
             Fue constituida en 1989, fundada como un emprendimiento familiar.

             Actualmente, la empresa es una sociedad unipersonal, cuyo propietario es el Sr. Eleuterio Martínez Aquino. Para los fines legales, la misma se encuentra inscripta en la A.F.I.P. dentro del
             Régimen Simplificado para Pequeños Contribuyentes
            (Monotributo), como Autónomo (Trabajador Activo) cuyo CUIT es 23-92827109-9, clasificada dentro de la actividad de SERVICIOS/OFICIO, perteneciente a la categoría 0 (cero): No Agropecuario.

            La sede social está ubicada en Calle Paraguay Nº 600, Barrio Santo Domingo, Km. 7 ½ de la ciudad de Eldorado, departamento del mismo nombre, Provincia de Misiones, República Argentina.

            La empresa cuenta con más de 20 años de experiencia en la fabricación y comercialización de todo tipo de muebles y aberturas, fabricados en maderas nativas o implantadas, dentro de la zona norte de la Provincia de Misiones.

            Una de las peculiaridades más importantes se centraliza en que para la obtención de sus productos se tienen en cuenta características artesanales, pero se pretende enfocar la producción
            hacia la industrialización.

            Las características artesanales manifiestan gran interés por los detalles y culminaciones logradas, por el trabajo intensivo y el conocimiento específico de un determinado oficio o arte como lo
            es la carpintería.
            
            Por otra parte, las características industriales tienen en cuenta atributos vinculados con el suministro de materias primas, medios de producción, medios de distribución, comercialización, y otros aspectos referidos a escalas muy diferentes. Aquí se hallan agrupadas ambas características con el fin de obtener productos reconocidos por sus detalles pero cimentada en el conocimiento científico y técnico.

            <h1>Nuestra MISION:</h1>

            <strong>“Satisfacer las necesidades y expectativas de nuestros clientes ofreciéndoles muebles integrales dotados de alta calidad y conceptos innovadores en diseño, relacionados a la multifuncionalidad y la flexibilidad, con el fin de generar ambientes confortables.”</strong>

            Y ambicionamos para nuestro futuro:

           <strong> “Ser una empresa innovadora, con presencia nacional, reconocida por su continuo crecimiento, operando con seguridad y de forma responsable hacia las exigencias de nuestros clientes y la comunidad.”</strong>

            A continuación presentamos nuestros productos para su consideración.

            Esperamos poder entablar vínculos sólidos y duraderos con su prestigiosa empresa. Desde ya muchísimas gracias por prestarnos esta oportunidad. 
          </div>

          <Mapa />

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