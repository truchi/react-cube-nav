import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import css from 'react-css-vars'

const updater = (props, $, current, row, col) => {
  $.classes.remove('current')
  ;current && $.classes.add('current')

  return {
    FaceRow: row
  , FaceCol: col
  }
}

const Face$ = css({
  tag        : 'div'
, className  : 'Face'
, displayName: 'Face'
}, {
  $: (props, $) => $.attrs.add('react-cube-nav', '')
})

class Face extends Component {
  css(current, row, col) {
    this.ref.css(updater, current, row, col)
  }

  render() {
    return (
      <Face$
        ref={ref => this.ref = ref}
      >
        {this.props.children}
      </Face$>
    )
  }
}

export default Face
