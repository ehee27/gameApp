import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { createStore } from 'redux';
// import { Provider, connect } from 'react-redux';
import Nav from '../components/Nav'
import Games from '../components/Games'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      games: []
    }
  }

  async componentDidMount() {
    this.setState({
      games: (await axios.get('/api/games')).data
    })
  }
  

  render() {
    const { games } = this.state
    
    return (
      <div>
        <Nav games={games} />
        <Games games={games} />
      </div>
    )
  }
}

render(<App />, document.querySelector('#root'));












