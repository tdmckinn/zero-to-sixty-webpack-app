import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

const Header = () => (
  <header className="z60-header">
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="nav-item">
          <h1 className="title is-3">Z60 webpack 2</h1>
        </Link>
      </div>
      <div className="nav-center">
        <a className="nav-item">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a className="nav-item">
          <span className="icon">
            <i className="fa fa-twitter"></i>
          </span>
        </a>
      </div>
      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span> 
      <div className="nav-right nav-menu">
        <a className="nav-item">
          Charts
        </a>
        <a className="nav-item">
          D3
        </a>
        <a className="nav-item">
          Aframe
        </a>
        <a className="nav-item">
          Editor
        </a>
        <span className="nav-item">
          <Link to="/about" className="button is-primary">
            <span className="icon">
              <i className="fa fa-window-maximize" aria-hidden="true"></i>
            </span>
            <span>Modal</span>
          </Link>
        </span>
      </div>
    </nav>
  </header>
)

export default Header
