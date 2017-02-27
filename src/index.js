import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

import App from './App'

const render = (Component) => {
  ReactDOM.render(
    <Router>
      <Component />
    </Router>,
    document.getElementById('root')
  )
}
render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    window.location.reload()
  })
}
