import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import css from 'react-css-vars'

const updater = (props, $, dir, row, col) => {
  $.classes.remove('current')
  $.classes.remove('in')
  $.classes.remove('out')
  ;dir === 0 && $.classes.add('current')
  ;dir  >  0 && $.classes.add('out')
  ;dir  <  0 && $.classes.add('in')

  return {
    LayerRow: row
  , LayerCol: col
  }
}

const Layer$ = css({
  tag        : 'div'
, className  : 'Layer'
, displayName: 'Layer'
}, {
  $: (props, $) => $.attrs.add('react-cube-nav', '')
})

class Layer extends Component {
  css(dir, row, col) {
    this.ref.css(updater, dir, row, col)
  }

  render() {
    return (
      <Layer$
        ref={ref => this.ref = ref}
      >
        {this.props.children}
      </Layer$>
    )
  }
}

export default Layer
