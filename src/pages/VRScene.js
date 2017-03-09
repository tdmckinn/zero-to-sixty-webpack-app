import React from 'react'
import 'aframe'
import { Entity, Scene } from 'aframe-react'

const VRScene = () => (
  <Scene embedded>
    <a-sky
      src="https://raw.githubusercontent.com/aframevr/aframe/v0.5.0/examples/boilerplate/panorama/puydesancy.jpg"
      rotation="0 -130 0"
    />
  </Scene>
)

export default VRScene
