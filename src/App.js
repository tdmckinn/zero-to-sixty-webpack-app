import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import 'matter-js'

import { Header, Footer } from './components'
import './index.scss'

import Charts from './pages/Charts'
import D3 from './pages/D3'
import Home from './pages/Home'
import VRScene from './pages/VRScene'

const Main = props => (
  <div className="z60-main">
    <Route
      exact
      path="/"
      render={() => <Home {...props} />}
    />
    <Route path="/charts" component={Charts} />
    <Route path="/d3" component={D3} />
    <Route path="/aframe" component={VRScene} />
  </div>
)

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  constructor() {
    super()
    this.state = { timer: 0 }

    const interval = setInterval(() => {
      if (this.state.timer === 60) {
        clearInterval(interval)
      } else {
        this.setState({ timer: this.state.timer + 1 });
      }
    }, 200);
  }

  render() {
    return (
      <div className="z60-app">
        <Header />
        <Main timer={this.state.timer} />
        <Footer />
      </div>
    )
  }
}

export default App
