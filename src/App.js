import React from 'react';
import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import {Home} from './components/Home'

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/"><Home/></Route>
    </div>
  );
}

export default App;
