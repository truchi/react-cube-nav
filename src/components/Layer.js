import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import css from 'react-css-vars'

const Layer$ = css({
  tag        : 'div'
, className  : 'Layer'
, displayName: 'Layer'
}, {
  $           : (props, $) => $.attrs.set('react-cube-nav', '')
, LayerX      : (props   ) => props.coords.x
, LayerY      : (props   ) => props.coords.y
, LayerOpacity: (props   ) => +props.z === +props.coords.z ? 1 : 0
, LayerScale  : (props   ) => +props.z === +props.coords.z ? 1 : 0
})

class Layer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layer$
        z={this.props.z}
        coords={this.props.coords}
      >
        {this.props.children}
      </Layer$>
    )
  }
}

export default Layer
