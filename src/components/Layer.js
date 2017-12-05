import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import css from 'react-css-vars'

const Layer$ = css({
  tag        : 'div'
, className  : 'Layer'
, displayName: 'Layer'
}, {
  $           : (props, $) => $.attrs.set('react-cube-nav', '')
, LayerRow    : (props   ) => props.coords.row
, LayerCol    : (props   ) => props.coords.col
, LayerOpacity: (props   ) => !!props.current ? 1 : 0
, LayerScale  : (props   ) => !!props.current ? 1 : 0
})

class Layer extends Component {
  render() {
    const current = +this.props.z === +this.props.coords.z

    return (
      <Layer$
        z={this.props.z}
        coords={this.props.coords}
        current={current ? 1 : 0}
      >
        {this.props.children}
      </Layer$>
    )
  }
}

export default Layer
