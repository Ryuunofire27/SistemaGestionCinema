import React from 'react';
import { AppContext } from '../AppContext';
import { Link, Redirect } from 'react-router-dom';

export const Login = (props) => 
  <AppContext.Consumer> 
    {(app) => (!app.state.user ? 
      <div className="login">
        <div className="login-header">
          <i className="fa fa-user-o login-header-icon" aria-hidden="true"></i>
        </div>
        <div className="login-body">
          <form onSubmit={app.fn.loginController}>
            <div>
              <label>Usuario</label>
              <input type="text" name="user" required/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" required/>
            </div>
            <input type="submit" value="Ingresar"/>
          </form>
        </div>
        <div className="login-footer">
          <p>¿No estas registrado? Registrate <Link to="register">aquí</Link></p>
        </div>
      </div> : <Redirect to="/"/>
    )}
  </AppContext.Consumer>
