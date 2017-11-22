import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import css from 'react-css-vars'

const Layer$ = css({
  tag        : 'div'
, className  : 'Layer'
, displayName: 'Layer'
}, {
  $: (props, $) => $.attrs.set('react-cube-nav', '')
})

class Layer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Layer$ z={this.props.z}>{this.props.children}</Layer$>
  }
}

export default Layer
