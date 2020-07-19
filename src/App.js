import React from 'react';
// import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import {Home} from './components/Home'
import {Rates} from './components/Rates'
import Contact from './components/Contact'
import Review from './components/Reviews'

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/"><Home/></Route>
      <Route exact path='/rates'><Rates/></Route>
      <Route exact path='/contact'><Contact/></Route>
    </div>
  );
}

export default App;
