import React from 'react';
import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import {Home} from './components/Home'
import {Container} from './components/Container'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Container/> */}
      <Route exact path="/"><Home/></Route>
    </div>
  );
}

export default App;
