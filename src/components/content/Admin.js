import React from 'react';
import { AppContext } from '../AppContext';
import { AdminOptions } from './AdminOptions';
import { Switch, Route, Link } from 'react-router-dom';
import { AdminEmployees } from './AdminEmployees';
import { Accordion } from './Accordion';
import { EmployeeRegister } from './EmployeeRegister';

export const Admin = () => 
  <AppContext.Consumer>
    {(app) => (
      <div className="admin-container">
        <div className="admin-accordion-options">
          <Accordion title="Administrador opciones">
            <Link to="/admin/empleados">Empleados</Link>
          </Accordion>
        </div>
        <div>
          <Switch>
            <Route exact path="/admin/" component = { AdminOptions }/>
            <Route exact path="/admin/empleados" component = { AdminEmployees }/>
            <Route exact path="/admin/empleados/register" component = { EmployeeRegister }/>
          </Switch>
        </div>
      </div>
    )}
  </AppContext.Consumer>
