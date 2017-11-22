import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import css from 'react-css-vars'

const Face$ = css({
  tag        : 'div'
, className  : 'Face'
, displayName: 'Face'
}, {
  $     : (props, $) => $.attrs.set('react-cube-nav', '')
, FaceTx: (props) => `${props.x * 100}vw`
, FaceTy: (props) => `${props.y * 100}vh`
})

class Face extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Face$ x={this.props.x} y={this.props.y}>{this.props.children}</Face$>
  }
}

export default Face
