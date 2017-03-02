import React from 'react'
import 'moment-timezone'

const Clock = ({ timer, moment, locale }) => (
  <figure className="clock-figure">
    <h1 className="title">{locale}</h1>
    <figcaption>{ moment.add(timer, 'seconds').format('dddd, MMMM Do YYYY, h:mm:ss a') }</figcaption>
  </figure>
)

export default Clock
