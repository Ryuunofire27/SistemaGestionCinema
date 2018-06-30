import React from 'react';
import logo from '../../img/logo-128.png';
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext';
import { UserArea } from './UserArea';

const base = "";
//const base = "/SistemaCinema";

export const Header = () => <AppContext.Consumer>
  {(app) => (
    <header className="header">
      <div className="header-container">
        <div className="col-12 row align-items-center">
          <div className="col-12 col-md-4">
            <Link className="no-a row align-items-center justify-content-center" to={base + "/"}>
              <div className="col-4"><img className="logo-img" src={logo} alt=""/></div>
              <div className="col-4"><span>CineFisi</span></div>
            </Link>
          </div>
          <nav className="nav col-12 col-md-6 row">
            <ul className="col-12 row align-items-center header-list">
              <li className="col-12 col-md-4 center">
                <Link to={base +"/movies"} className="nav-links">
                  Cartelera
                </Link>
              </li>
              <li className="col-12 col-md-4 center">
                <Link to={base + "/promotions"} className="nav-links">
                  Promociones
                </Link>
              </li>
              <li className="col-12 col-md-4 center">
                <Link to={ base +"/candies"} className="nav-links">
                  Dulceria
                </Link>
              </li>
            </ul>
          </nav>
          {
            !app.state.user ? 
            <div className="col-12 col-md-2 center header-login">
              <Link to={base + "/login"}><i className="fa fa-user-o" aria-hidden="true"></i></Link>
            </div> : <UserArea app={app}/>
          }
        </div>
      </div>
    </header>
  )}
</AppContext.Consumer>
