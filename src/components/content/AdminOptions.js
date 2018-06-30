import React from 'react';
import { Link } from 'react-router-dom';

export const AdminOptions = () => <div className="container admin-options-container">
  <Link to="/admin/empleados">
    <div className="admin-option">
      <div className="admin-option-icon">
        <i className="fa fa-users" aria-hidden="true"></i>
      </div>
      <div className="admin-option-name">
        <span>Empleados</span>
      </div>
    </div>
  </Link>

  <Link to="/admin/cines">
    <div className="admin-option">
      <div className="admin-option-icon">
        <i className="fa fa-video-camera" aria-hidden="true"></i>
      </div>
      <div className="admin-option-name">
        <span>Cines</span>
      </div>
    </div>
  </Link>
  <Link to="/admin/movies">
    <div className="admin-option">
      <div className="admin-option-icon">
        <i className="fa fa-film" aria-hidden="true"></i>
      </div>
      <div className="admin-option-name">
        <span>Peliculas</span>
      </div>
    </div>
  </Link>
  <Link to="/admin/cities">
    <div className="admin-option">
      <div className="admin-option-icon">
        <i class="fa fa-home" aria-hidden="true"></i>
      </div>
      <div className="admin-option-name">
        <span>Ciudades</span>
      </div>
    </div>
  </Link>
  <Link to="/admin/candies">
    <div className="admin-option">
      <div className="admin-option-icon">
        <i className="fa fa-cutlery" aria-hidden="true"></i>
      </div>
      <div className="admin-option-name">
        <span>Dulceria</span>
      </div>
    </div>
  </Link>
  <Link to="/admin/promotions">
    <div className="admin-option">
      <div className="admin-option-icon">
        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
      </div>
      <div className="admin-option-name">
        <span>Promociones</span>
      </div>
    </div>
  </Link>
  <Link to="/admin/boleteria">
    <div className="admin-option">
      <div className="admin-option-icon">
        <i className="fa fa-ticket" aria-hidden="true"></i>
      </div>
      <div className="admin-option-name">
        <span>Boleteria</span>
      </div>
    </div>
  </Link>
  <Link to="/admin/ventas">
    <div className="admin-option">
      <div className="admin-option-icon">
        <i className="fa fa-area-chart" aria-hidden="true"></i>
      </div>
      <div className="admin-option-name">
        <span>Ventas</span>
      </div>
    </div>
  </Link>
</div>