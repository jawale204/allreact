import React, { Component } from 'react';
import { BrowserRouter,Route ,Switch} from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Post from './components/Post'

class App extends Component{
 
  render(){
    return(
      <BrowserRouter>
        <div>
         <NavBar />
         <Switch>
         <Route path="/Home" component={Home}/>
         <Route path="/About" component={About}/>
         <Route path="/Contact" component={Contact}/>
         <Route path='/:post_id' component={Post} />
         </Switch>
       
        </div>
        </BrowserRouter>
      );
  }

}
export default App;


