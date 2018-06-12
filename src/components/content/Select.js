import React from 'react';

export class Select extends React.PureComponent {
  selectRef = React.createRef();

  state = {
    text: ''
  }

  componentDidMount() {
    this.setState({ text: this.selectRef.current.options[this.selectRef.current.selectedIndex].text });
    this.selectRef.current.addEventListener('change', this.handleSelectChange);
  }

  handleSelectChange = (e) => {
    this.setState({ text: e.target.options[e.target.selectedIndex].text });
    this.props.onChange(e.target.value, e.target.name);
  }

  render(){
    return (
      <div className="select-container">
        <span className="select-title">{this.props.tipo}</span>
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
        <span>{this.state.text}</span>
        <select name={this.props.name} className="component-select" defaultValue="0" ref={this.selectRef}>
          {
            this.props.options.map((o) => {
              return (
                <option key={o.value} value={o.value}>{o.text}</option>
              )
            })
          }
        </select>
      </div>
    );
  }
};
