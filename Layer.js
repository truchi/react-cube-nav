import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import css from 'react-css-vars'

const Layer$ = css({
  tag        : 'div'
, className  : 'Layer'
, displayName: 'Layer'
}, {
  $     : (props, $) => $.attrs.set('react-cube-nav', '')
, LayerX: (props) => props.coords.x
, LayerY: (props) => props.coords.y
})

class Layer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let coords = this.props.coords
    console.log(coords);
    coords.y = -1
    return <Layer$ z={this.props.z} coords={coords}>{this.props.children}</Layer$>
  }
}

export default Layer
