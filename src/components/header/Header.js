import React from 'react';
import logo from '../../img/logo-128.png';
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="col-12 row align-items-center">
          <div className="col-12 col-md-4">
            <Link className="no-a row align-items-center justify-content-center" to="/">
              <div className="col-4"><img className="logo-img" src={logo} alt=""/></div>
              <div className="col-4"><span>CineFisi</span></div>
            </Link>
          </div>
          <nav className="nav col-12 col-md-6 row">
            <ul className="col-12 row align-items-center header-list">
              <li className="col-12 col-md-4 center"><Link to="/movies" className="nav-links">Cartelera</Link></li>
              <li className="col-12 col-md-4 center"><Link to="/promotions" className="nav-links">Promociones</Link></li>
              <li className="col-12 col-md-4 center"><Link to="/candies" className="nav-links">Dulceria</Link></li>
            </ul>
          </nav>
          <div className="col-12 col-md-2 center header-login">
            <i className="fa fa-user-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </header>
  )
}