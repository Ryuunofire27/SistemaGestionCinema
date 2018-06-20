import React from 'react';
import { Link } from 'react-router-dom';
export const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <a>
        <div className="movie-card-img">
          <a className="movie-card-img-no-visible"></a>
          <img src={props.img}/>
        </div>
        <div className="movie-card-description">
          <div className="movie-card-description-title">{props.title}</div>
          <div className="movie-card-description-info">{props.info}</div>
        </div>
        <div className="movie-card-actions-container">
          <div className="movie-card-actions">
            <Link to={`/movies/${props.id}`} className="btn-comprar">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Comprar
            </Link>
            <Link to={`/movies/${props.id}`} className="btn-comprar">
              <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Detalles
            </Link>
          </div>
        </div>
      </a>
    </div>
  )
};