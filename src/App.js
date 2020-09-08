import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Service from './components/Service';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
   <Switch>
     <Route exact path="/" component={ Home }/>
     <Route exact path="/about" component={ About }/>
     <Route exact path="/service" component={ Service }/>
     <Route exact path="/contact" component={ Contact }/>
     <Redirect to="/"/>
   </Switch>
    </div>
  );
}

export default App;
