import React from 'react';

class Accordion extends React.PureComponent{
  state = {
    active: false
  }
  
  handleButton = () =>{
    this.setState({ active: !this.state.active });
  }

  render(){
    return (
      <div>
        <button onClick={this.handleButton}>{this.props.title}</button>
        <ul className={this.state.active ? 'display-block' : 'display-none'}>
          {/*this.props.data.map((d) => {
            <li key={d.id}>{d.info}</li>
          })*/}
          <li>Accion</li>
          <li>Comedia</li>
          <li>Drama</li>
        </ul>
      </div>
    )
  }
}

export default Accordion;