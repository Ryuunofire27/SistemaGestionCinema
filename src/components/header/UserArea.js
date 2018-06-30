import React from 'react';
import { Link } from 'react-router-dom';
export const UserArea = (props) => 
      <div>
          <div className="wrap-collabsible index-10">
            <input id="user-collapsible" className="toggle" type="checkbox"/>
            <label htmlFor="user-collapsible" className="user-lbl-toggle">{props.app.state.user.nombres.split(" ")[0]}</label>
            <div className="collapsible-content">
              <div className="user-content-inner">
                <ul>
                  {props.app.state.user.idPerfil == 1 && <li><Link to="/admin">Administrar</Link></li>}
                  <li><Link to="/logout">logout</Link></li>
                </ul>
              </div>
            </div>
          </div>
      </div>