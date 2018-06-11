import React from 'react';
import logo from '../../img/logo-128.png';
export const Header = () => {
  return (
    <header class="header">
      <div class="header-container">
        <div class="col-12 row align-items-center">
          <div class="col-12 col-md-4">
            <a class="no-a row align-items-center justify-content-center" href="/">
              <div class="col-4"><img class="logo-img" src={logo} alt=""/></div>
              <div class="col-4"><span>Cinema</span></div>
            </a>
          </div>
          <nav class="nav col-12 col-md-6 row">
            <ul class="col-12 row align-items-center header-list">
              <li class="col-12 col-md-3 center">Cartelera</li>
              <li class="col-12 col-md-3 center">Promociones</li>
              <li class="col-12 col-md-3 center">Socios</li>
              <li class="col-12 col-md-3 center">Dulceria</li>
            </ul>
          </nav>
          <div class="col-12 col-md-2 center header-login">
            <i class="fa fa-user-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </header>
  )
}