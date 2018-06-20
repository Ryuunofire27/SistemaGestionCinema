import React from 'react';
import Accordion from './Accordion';
import { MovieCard } from './MovieCard';
export const Movies = (props) => {
  return (
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
          <Accordion title="Genero"/>
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
  );
}