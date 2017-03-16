import React from 'react'

export default function asyncComponent(getComponent) {
  class AsyncComponent extends React.Component {
    constructor() {
      super()
      this.state = {
        Component: AsyncComponent.Component
      }
    }

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then((Component) => {
          this.setState({ Component })
        })
      }
    }

    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }

  AsyncComponent.Component = null
  return AsyncComponent
}
