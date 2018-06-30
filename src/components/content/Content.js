import React from 'react';
import { Home } from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Movies } from './Movies';
import { Movie } from './Movie';
import { Login } from './Login';
import { Register } from './Register'
import { Candies } from './Candies';
import { NotFound } from './NotFound';
import { Admin } from './Admin';
import { AppContext } from '../AppContext';

const Logout = () => 
  <AppContext.Consumer>
    { app => app.state.user ? app.fn.logoutController() : <Redirect to = "/" />}
  </AppContext.Consumer>

export const Content = () => 
  <main className="content">
    <Switch>
      <Route exact path='/' component = { Home } />
      <Route exact path='/movies' component = { Movies } />
      <Route exact path='/movies/:id' component = { Movie } />
      <Route path = '/login' component = { Login } />
      <Route path = "/register" component = { Register } /> 
      <Route path = "/candies" component = { Candies }/>
      <Route path = '/admin' component = { Admin } />
      <Route path = '/logout' component = { Logout } />
      <Route component = { NotFound }/>
    </Switch>
  </main>
