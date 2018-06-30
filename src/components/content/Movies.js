import React from 'react';
import { Accordion } from './Accordion';
import { MovieCard } from './MovieCard';
import { AppContext } from '../AppContext';
export const Movies = (props) => 
  <AppContext.Consumer>
    {(app) => 
      (
        <div className="container">
          <div className="movies-header">
            <h1>Peliculas</h1>
            <div className="movies-header-options">
              <ul>
                <li>En cartelera</li>
                <li>Próximos estrenos</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-3 movies-filter">
              <Accordion title="Genero">
                <ul>
                  <li>
                    <label onClick={app.fn.getFilter}>
                      <input type="hidden" name="filter" value="1"/>
                      <input type="hidden" name="type" value="1"/>
                      Comedia
                    </label>
                    </li>
                  <li>Terror</li>
                  <li>Thriller</li>
                  <li>Acción</li>
                </ul>
              </Accordion>
            </div>
            <div className="col-9 movies-cards-container">
              {
                
              }
              <MovieCard  img="https://cineplanetstatic.azureedge.net/CDN/media/entity/get/FilmPosterGraphic/HO00000173?referenceScheme=HeadOffice&allowPlaceHolder=true" title="Los increibles 2"  info="Animacion, 2h 10min, APT" id="4784"/>
              <MovieCard  img="https://cineplanetstatic.azureedge.net/CDN/media/entity/get/FilmPosterGraphic/HO00000173?referenceScheme=HeadOffice&allowPlaceHolder=true" title="Los increibles 2"  info="Animacion, 2h 10min, APT" id="4784"/>
              <MovieCard  img="https://cineplanetstatic.azureedge.net/CDN/media/entity/get/FilmPosterGraphic/HO00000173?referenceScheme=HeadOffice&allowPlaceHolder=true" title="Los increibles 2"  info="Animacion, 2h 10min, APT" id="4784"/>
              <MovieCard  img="https://cineplanetstatic.azureedge.net/CDN/media/entity/get/FilmPosterGraphic/HO00000173?referenceScheme=HeadOffice&allowPlaceHolder=true" title="Los increibles 2"  info="Animacion, 2h 10min, APT" id="4784"/>
            </div>
          </div>
        </div>
      )
    }
  </AppContext.Consumer>
