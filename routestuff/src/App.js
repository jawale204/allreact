import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NavBar from './components/NavBar'

class App extends Component{
 
  render(){
    return(
      <BrowserRouter>
        <div>
         <NavBar />
         <Route path="/Home" component={Home}/>
         <Route path="/About" component={About}/>
         <Route path="/Contact" component={Contact}/>
        </div>
      </BrowserRouter>
  
      );
  }

}
export default App;


