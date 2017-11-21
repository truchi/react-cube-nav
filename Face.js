import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

class Face extends Component {
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
    const $face = findDOMNode(this)
    if (!$face) return

    console.log($face)
    $face.style.setProperty(`--Face-tx`, this.props.x * 100 + 'vw')
    $face.style.setProperty(`--Face-ty`, this.props.y * 100 + 'vh')
  }

  render() {
    return <div className="Face" react-cube-nav="">{this.props.children}</div>
  }
}

export default Face
