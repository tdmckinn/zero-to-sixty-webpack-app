import * as _ from 'lodash'
import React, { Component } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

import 'aframe'
import { Entity, Scene } from 'aframe-react'
import { Doughnut } from 'react-chartjs-2'
import 'medium-editor'
import 'matter-js'
import 'chance'

import './lorem/loremPageOne'
import './lorem/loremPageTwo'
import './lorem/loremPageThree'

import { Header, Footer, Clock } from 'components'
import './index.css'

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Home = () => (
  <div>
    <section className="hero is-primary is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            0 <span>....</span> 60
          </h1>
          <Clock />
        </div>
      </div>
    </section>
  </div>
)

const VRScene = () => (
  <Scene embedded> 
    <Entity sky={{primitive: 'box'}} src=""/>
    <Entity bmfont-text={{text: 'HELLO WORLD'}} position="{[0, 1, -5]}"/>
      <a-sky 
      src="https://raw.githubusercontent.com/aframevr/aframe/v0.5.0/examples/boilerplate/panorama/puydesancy.jpg" 
      rotation="0 -130 0">
    </a-sky>
  </Scene>
)
 
const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
}

const Charts = () => (
  <Doughnut data={data} />
)

const Main = () => (
  <div className="z60-main">
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="z60-app">
          <Header />
          <Main />
          <VRScene/>
          <Charts />
          <Footer />
      </div>
    )
  }
}

export default App
