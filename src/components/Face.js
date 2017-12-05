import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import css from 'react-css-vars'

const Face$ = css({
  tag        : 'div'
, className  : 'Face'
, displayName: 'Face'
}, {
  $      : (props, $) => $.attrs.set('react-cube-nav', '')
, FaceRow: (props) => props.row
, FaceCol: (props) => props.col
})

class Face extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Face$
        row={this.props.row}
        col={this.props.col}
      >
        {this.props.children}
      </Face$>
    )
  }
}

export default Face
