import React from 'react'
import 'moment-timezone'

const hightClockStyle = {
  border: '1px solid yellow'
}

const Clock = ({ timer, moment, locale, isClockMyTime }) => (
  <figure className="clock-figure">
    <h1 className="title">{locale}</h1>
    <figcaption>{ moment.add(timer, 'seconds').format('dddd, MMMM Do YYYY, h:mm:ss a') }</figcaption>
  </figure>
)

export default Clock
