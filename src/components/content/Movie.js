import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { Accordion } from './Accordion';
import FilterSelect from './FilterSelect';
export const Movie = ({ match }) => {
  const id = match.params.id;
  console.log(id);
  return (
    <AppContext.Consumer>
      {
        (app) => 
          (
            <div>
              <div className="movie">
                <div className="container">
                  <div className="movie-header">
                    <h2>Los Increibles</h2>
                  </div>
                  <div className="movie-body row">
                    <div className="movie-left col-12 col-md-5">
                      <div className="movie-left-img">
                        <img src="https://cineplanetstatic.azureedge.net/CDN/media/entity/get/FilmPosterGraphic/HO00000173?referenceScheme=HeadOffice&allowPlaceHolder=true" />
                      </div>
                    </div>
                    <div className="movie-right col-12 col-md-7">
                      <div className="movie-sinopsis">
                        <center>Sinopsis</center>
                        <p>Esta película contiene escenas con luces intermitentes que pueden afectar a aquellos espectadores que padezcan epilepsia fotosensible o trastornos similares. APT: Película apta para todo público* Secuela de "Los increíbles". Helen tiene que liderar una campaña para que los superhéroes regresen, mientras Bob vive su vida "normal" con Violet, Dash y el bebé Jack-Jack —cuyos superpoderes descubriremos—. Su misión se va a pique cuando aparece un nuevo villano con un brillante plan que lo amenaza todo. Pero los Parr no se amedrentarán y menos teniendo a Frozone de su parte.</p>
                      </div>
                      <div className="movie-detail">
                        <b>Detalle</b>
                        <ul>
                          <li>Animacion</li>
                          <li>|</li>
                          <li>2h 10m</li>
                          <li>|</li>
                          <li>APT</li>
                        </ul>
                      </div>
                      <div className="movie-director">
                        <b>Director</b>
                        <p>Brad Bird</p>
                      </div>
                      <div className="movie-languaje">
                        <b>Idioma</b>
                        <ul>
                          <li>SUB</li>
                          <li>DOB</li>
                        </ul>
                      </div>
                      <div className="movie-types">
                        <b>Disponible</b>
                        <ul>
                          <li>Regular</li>
                          <li>2D</li>
                          <li>Prime</li>
                        </ul>
                      </div>
                      <div className="movie-actors">
                        <b>ACTORES</b>
                        <ul>
                          <li>Mister increible</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="movie-search-container">
                  <div className="movie-search-filters">
                    <FilterSelect/>
                  </div>
                  <Accordion title="CF Lima">

                  </Accordion>
                </div>
              </div>
            </div>
          )
      }
    </AppContext.Consumer>
  );
};