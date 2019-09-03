import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainIndex from './components/MainIndex/MainIndex'
import NavBar from './components/navbar/NavBar'
import Carousel from './components/Carousel/ProductCarousel'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={MainIndex} />
          <Route/>
        </Router>
      </div>
    )
  }
}

export default App;
