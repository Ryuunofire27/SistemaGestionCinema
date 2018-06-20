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
          <Select tipo="Por pelicula" name="pelicula" options={[{value: 0, text: 'Elige un dia'},{value: 1, text: 'Lunes'}]} onChange={this.handleChange}/>
          <Select tipo="Por ciudad" name="ciudad" options={[{value: 0, text: 'Elige un dia'},{value: 1, text: 'Lunes'}]} onChange={this.handleChange}/>
          <Select tipo="Por cine" name="cine" options={[{value: 0, text: 'Elige un dia'},{value: 1, text: 'Lunes'}]} onChange={this.handleChange}/>
          <Select tipo="Por fecha" name="fecha" options={[{value: 0, text: 'Elige un dia'},{value: 1, text: 'Lunes'}]} onChange={this.handleChange}/>
        </div>
        <div className="search-selects-search">
          <button className={this.state.active ? "filter-button-active" : "filter-button-inactive"}>Filtrar</button>
        </div>
      </div>
    );
  }
}

export default FilterSelect;