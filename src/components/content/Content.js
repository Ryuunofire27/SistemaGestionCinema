import React from 'react';
import logo from '../../img/logo-128.png';
import FilterSelect from './FilterSelect';
import { Promociones } from './Promociones';
export const Content = () => {
  return (
    <main className="content">
      <div>
        <FilterSelect/>
      </div>
      <section>

      </section>
      <section>
        <div className="home-sections">Dulceria</div>
        <Promociones/>
      </section>
      <section>
        
      </section>
    </main>
  );
}