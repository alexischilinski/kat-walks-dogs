import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import {Home} from './components/Home'
import {Rates} from './components/Rates'
import Contact from './components/Contact'
import Review from './components/Reviews'

class App extends Component {

  state = {
    reviews: []
  }

  componentWillMount(){
    fetch('https://katwalksdogs.herokuapp.com/reviews/')
      .then(response => response.json())
      .then(reviews => this.setState({reviews}))
  }

  addReview = (review) => {
    fetch('https://katwalksdogs.herokuapp.com/reviews/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(response => response.json())
    .then(rev => {
      this.setState({
        reviews: [...this.state.reviews, rev]
      })
    })
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <Route exact path="/"><Home/></Route>
        <Route exact path='/rates'><Rates/></Route>
        <Route exact path='/contact'><Contact/></Route>
        <Route exact path='/reviews'><Review addReview={this.addReview} reviews={this.state.reviews}/></Route>
      </div>
    );
  }
}

export default App;
