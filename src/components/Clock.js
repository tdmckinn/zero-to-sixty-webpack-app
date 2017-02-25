import React from 'react'
import moment from 'moment'
import 'moment-timezone'

const Clock = () => (
  <figure>
    <img
      src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"
      alt="An awesome"
    />
    <figcaption>NY: { moment().tz('America/New_York').format() }</figcaption>
  </figure>
)

export default Clock
