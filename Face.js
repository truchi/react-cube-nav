import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import css from 'react-css-vars'

const Face$ = css({
  tag        : 'div'
, className  : 'Face'
, displayName: 'Face'
}, {
  $    : (props, $) => $.attrs.set('react-cube-nav', '')
, FaceX: (props) => props.x
, FaceY: (props) => props.y
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
