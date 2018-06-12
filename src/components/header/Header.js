import React from 'react';
import logo from '../../img/logo-128.png';
export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="col-12 row align-items-center">
          <div className="col-12 col-md-4">
            <a className="no-a row align-items-center justify-content-center" href="/">
              <div className="col-4"><img className="logo-img" src={logo} alt=""/></div>
              <div className="col-4"><span>Cinema</span></div>
            </a>
          </div>
          <nav className="nav col-12 col-md-6 row">
            <ul className="col-12 row align-items-center header-list">
              <li className="col-12 col-md-3 center">Cartelera</li>
              <li className="col-12 col-md-3 center">Promociones</li>
              <li className="col-12 col-md-3 center">Socios</li>
              <li className="col-12 col-md-3 center">Dulceria</li>
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