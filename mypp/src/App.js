import React, { Component } from 'react';
import NavBar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

import { BrowserRouter,Route } from 'react-router-dom'
class App extends Component{
  
  render(){
    return(
      <BrowserRouter>
       <div className="App">
         <NavBar/>
         <Route path="/Home"  Component={Home} />
         <Route path="/Contact" Component={Contact} />
         <Route path="/About" Component={About} />
       </div>
      </BrowserRouter>
     
      );
  }

}
export default App;


/*state={
    rj1:[
        {name: "rhaul",age:50,king:"is a limf" ,id:1},
        {name: "rhul",age:27,king:"is a limfraul" ,id:2},
        {name: "reahul",age:20,king:"is a kinf" ,id:3}
      ] 
  }
  addRjList=(rj)=>{
    rj.id=Math.random()
    console.log(rj);
    let rj2= [...this.state.rj1,rj];
    this.setState({
      rj1:rj2
    });
  }
  deleteRj=(id)=>{
    console.log(id);
    let rj1=this.state.rj1.filter(rjek=>{
      return id !== rjek.id
  });
    this.setState({
      rj1:rj1
    });
  }*/
  