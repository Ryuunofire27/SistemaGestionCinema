import React from 'react';
import { AppContext } from './AppContext';
import { Header } from './header/Header';
import { Content } from './content/Content';
import { Footer } from './footer/Footer';
class App extends React.Component{
  
  state = {

  };

  fn = {
    
  }
  
  render(){
    return (
      <AppContext.Provider value={{state: this.state, fn: this.fn}}>
        <Header/>
        <Content/>
        <Footer/>
      </AppContext.Provider>
    );
  }
}

export default App;