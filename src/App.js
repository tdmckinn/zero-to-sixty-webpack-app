import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import _ from 'lodash'

import 'matter-js'

import asyncComponent from './asyncComponent'
import { Header, Footer } from './components'
import './index.scss'

import Home from './pages/Home'

// imports will create chunks via webpack when staticlly anaylized
const ChartPage = asyncComponent(() => import('./pages/Charts').then(module => module.default))
const D3Page = asyncComponent(() => import('./pages/D3').then(module => module.default))
const VRPage = asyncComponent(() => import('./pages/VRScene').then(module => module.default))

const Main = props => (
  <div className="z60-main">
    <Route
      exact
      path="/"
      render={() => <Home {...props} />}
    />
    <Route path="/charts" component={ChartPage} />
    <Route path="/d3" component={D3Page} />
    <Route path="/aframe" component={VRPage} />
  </div>
)

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  constructor() {
    super()
    this.state = {
      timer: 0,
      userLang: window.navigator.language
    }

    const interval = setInterval(() => {
      if (this.state.timer === 60) {
        clearInterval(interval)
      } else {
        this.setState({ timer: _.add(this.state.timer, 1) })
      }
    }, 200);
  }

  render() {
    return (
      <div className="z60-app">
        <Header />
        <Main {...this.state} />
        <Footer />
      </div>
    )
  }
}

export default App
