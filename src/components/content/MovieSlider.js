import React from 'react';
import { Link } from 'react-router-dom';
export const MovieSlider = (props) => {
  return (
    <div className="movie-slider">
      <img className="movie-slider-img" src={props.img}/>
      <div className="movie-slider-body">
        <div className="movie-slider-title">{props.title}</div>
        <p className="movie-slider-info">{props.info}</p>
      </div>
      <div className="movie-slider-footer">
        <Link to={`/movies/${props.id}`} className="btn-comprar">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Comprar
        </Link>
        <Link to={`/movies/${props.id}`} className="btn-comprar">
          <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Detalles
        </Link>
      </div>
    </div>
  );
};
