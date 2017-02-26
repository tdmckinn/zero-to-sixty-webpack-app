import * as _ from 'lodash'
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import 'aframe'
import 'matter-js'

import { Entity, Scene } from 'aframe-react'
import { Doughnut } from 'react-chartjs-2'
import { VictoryChart, VictoryBar, VictoryLine } from 'victory';

import { Header, Footer, Clock } from './components'
import chartConfig from './chartConfig'
import './index.scss'

const Home = ({ timer }) => (
  <div>
    <section className="hero is-primary is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            0 <span>....</span> <span> { timer }</span>
          </h1>
          <Clock />
        </div>
      </div>
    </section>
  </div>
)

const VRScene = () => (
  <Scene embedded>
    <a-sky
      src="https://raw.githubusercontent.com/aframevr/aframe/v0.5.0/examples/boilerplate/panorama/puydesancy.jpg"
      rotation="0 -130 0"
    />
  </Scene>
)

const Charts = () => (
  <div>
    <Doughnut data={chartConfig} />
  </div>
)

const style = {
  parent: { border: '1px solid #ccc', margin: '2%', maxWidth: '40%' }
}
const D3 = () => (
  <div>
    <VictoryChart
      style={style}
      domainPadding={{ x: 30, y: 30 }}
      height={600}
      width={600}
    >
      <VictoryBar
        name="bar"
        style={{ data: { width: 15, fill: 'green' } }}
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 }
        ]}
      />
      <VictoryLine
        name="line"
        y={() => 0.5}
        style={{ data: { stroke: 'blue', strokeWidth: 5 } }}
        label="LINE"
      />
    </VictoryChart>
  </div>
)

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
