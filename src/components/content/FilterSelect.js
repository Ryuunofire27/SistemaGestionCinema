import React from 'react';
import { Select } from './Select';

class FilterSelect extends React.PureComponent{
  state = {
    active: false,
    selects: {}
  }

  handleChange = (value, name) => {
    const selects = this.state.selects;
    let cont = 0;
    selects[name] = value;
    for(let select in selects){
      selects[select] != 0 && cont++;
    }
    this.setState({ selects, active: cont == 0 ? false : true });
  }
  render(){
    return (
      <div className="search-selects">
        <div className="search-selects-container">
          <Select tipo="Por dia" name="mes" options={[{value: 0, text: 'Elige un dia'},{value: 1, text: 'Lunes'}]} onChange={this.handleChange}/>
          <Select tipo="Por dia" name="anio" options={[{value: 0, text: 'Elige un dia'},{value: 1, text: 'Lunes'}]} onChange={this.handleChange}/>
          <Select tipo="Por dia" name="milenio" options={[{value: 0, text: 'Elige un dia'},{value: 1, text: 'Lunes'}]} onChange={this.handleChange}/>
          <Select tipo="Por dia" name="dia" options={[{value: 0, text: 'Elige un dia'},{value: 1, text: 'Lunes'}]} onChange={this.handleChange}/>
        </div>
        <div className="search-selects-search">
          <button className={this.state.active ? "filter-button-active" : "filter-button-inactive"}>Filtrar</button>
        </div>
      </div>
    );
  }
}

export default FilterSelect;