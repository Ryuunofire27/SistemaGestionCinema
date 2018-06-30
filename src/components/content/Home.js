import React from 'react';
import { AppContext } from '../AppContext';
import FilterSelect from './FilterSelect';
import { Promociones } from './Promociones';
import { MovieSlider } from './MovieSlider';

export const Home = (props) => {
  return (
    <AppContext.Consumer>
      { (app) => {
        app.fn.getHome();
        return (
        <div>
          <section className="filter-section">
            <div>
              <FilterSelect/>
            </div>
          </section>
          <section className="candies-section">
            <div className="home-sections">Dulceria</div>
            <Promociones app={app}/>
          </section>
          <section className="movies-section">
          <div className="home-sections">Peliculas</div>
            <div id="carousel-movies" className="carousel slide" data-ride="carousel" data-interval="20000">
              <ol className="carousel-indicators">
                <li data-target="#carousel-movies" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-movies" data-slide-to="1"></li>
                <li data-target="#carousel-movies" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <MovieSlider img="https://cineplanetcms.azureedge.net/contentAsset/raw-data/b9de72be-2c0a-4ae5-b819-228d723f8dd9" id="58414" info="Cuando su novio de 6 años le termina de un momento a otro, María Fe debe lidiar con un corazón roto que no parece curarse con nada. Después de varias noches de lágrimas (y alcohol) y alentada por sus amigas, decide desahogarse de la única manera que sabe hacerlo: escribiendo. El resultado es un blog donde se ríe de las desventuras de la soltería y las relaciones y que tendrá un éxito inesperado. Pero cuando el fantasma del ex reaparece en su vida ¿podrá María Fe seguir sus propios consejos?" title="Amor a la deriva" />
                </div>
                <div className="carousel-item">
                  <h3>Second Slide</h3>
                </div>
                <div className="carousel-item">
                  <h3>Third Slide</h3>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carousel-movies" role="button" data-slide="prev">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>  
              <a className="carousel-control-next" href="#carousel-movies" role="button" data-slide="next">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </section>
        </div>
       ) }}
    </AppContext.Consumer>
    
  )
};