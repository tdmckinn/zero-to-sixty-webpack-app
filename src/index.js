import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router
} from 'react-router-dom'

// import { D3Page, VRPage, ThreePage} from './pages'
import App from './App'
import axios from 'axios'

import 'bulma'

ReactDOM.render( 
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
