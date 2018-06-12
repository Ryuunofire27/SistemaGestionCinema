import React from 'react';
import { Context } from './AppContext';
import { Header } from './header/Header';
import { Content } from './content/Content';
class App extends React.Component{
  
  state = {

  };

  fn = {
    
  }
  
  render(){
    return (
      <Context.Provider value={{state: this.state, fn: this.fn}}>
        <Header/>
        <Content/>
      </Context.Provider>
    );
  }
}

export default App;