import { shuffle } from 'lodash'
import React from 'react'
import moment from 'moment'

import { Clock } from '../components'

const locales = [
  'en',
  'en_ca',
  'tr',
  'cv',
  'he',
  'mi',
  'en-bg',
  'be',
  'gd',
  'si',
  'fo'
]
const zones = shuffle(locales)

const Home = ({ timer, userLang }) => (
  <div>
    <section className="hero is-primary is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Moment Locales
          </h1>
          <h1 className="title">
            0 <span>....</span> <span> { timer }</span>
          </h1>
          <div className="z60-times--live">
            {
              zones.map((locale, index) => {
                const mymoment = new moment()
                const isClockMyTime = userLang.toLowerCase().indexOf(locale)
                mymoment.locale(locale)
                return (
                  <Clock key={index} timer={timer} moment={mymoment} locale={locale} isClockMyTime={isClockMyTime} />
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Home
