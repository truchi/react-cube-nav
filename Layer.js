import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

class Layer extends Component {
  constructor(props) {
    super(props)

    console.log(props)
  }

  componentDidMount() {
    this.postRender()
  }

  componentDidUpdate() {
    this.postRender()
  }

  postRender() {
  }

  render() {
    return <div className="Layer" react-cube-nav="">{this.props.children}</div>
  }
}

export default Layer
