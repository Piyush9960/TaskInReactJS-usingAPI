



import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Error from "./Error";
import Appapi from './Appapi';
import Home from './Home';
import Records from './Records';
import Navigation from './Navigation';


class App extends Component {
 
  render() {
    return (
    
      <BrowserRouter>
      
        <div className="App">
          {/* *******    'switch' helps to display error only that page || '/' for home page  *********/}
         
         <div>
         <Navigation />
        <Switch>
        <Route path="/" Component = { Home } exact/>
        <Route path="/records" Component = { Records } />

        <Route path="/appapi" Component = { Appapi } />
        <Route component={Error} />  
        </Switch>
         </div>
      </div>
    </BrowserRouter>
    );   
 }
}
export default App;



