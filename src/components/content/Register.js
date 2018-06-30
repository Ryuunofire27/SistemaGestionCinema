import React from 'react';
import { AppContext } from '../AppContext';
import { Link, Redirect } from 'react-router-dom';

export const Register = (props) => 
  <AppContext.Consumer> 
    {(app) => (!app.state.user ? 
      <div className="register">
        <div className="register-header">
          <i className="fa fa-user-o login-header-icon" aria-hidden="true"></i>
        </div>
        <div className="register-body">
          <form onSubmit={app.fn.registerController} method="POST">
            <div>
              <label>Nombres</label>
              <input type="text" name="name" required/>
            </div>
            <div>
              <label>Apellido Paterno</label>
              <input type="text" name="apePat" required/>
            </div>
            <div>
              <label>Apellido Materno</label>
              <input type="text" name="apeMat" required/>
            </div>
            <div>
              <label>Dni</label>
              <input type="text" name="dni" required/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" required/>
            </div>
            <div>
              <label>Re-Password</label>
              <input type="password" name="repassword" required/>
            </div>
            <input type="submit" value="Registrarse"/>
          </form>
        </div>
      </div> : <Redirect to="/"/>
    )}
  </AppContext.Consumer>
