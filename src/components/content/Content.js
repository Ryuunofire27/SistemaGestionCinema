import React from 'react';
import { Home } from './Home';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { Movies } from './Movies';
export const Content = () => {
  return (
    <main className="content">
      <Switch>
        <Route exact path="/" component = { Home } />
        <Route path="/movies" component = { Movies } />
        <Route path="/movies/:id" component = { Movies } />
      </Switch>
    </main>
  );
}