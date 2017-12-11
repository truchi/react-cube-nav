import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import css from 'react-css-vars'

const Face$ = css({
  tag        : 'div'
, className  : 'Face'
, displayName: 'Face'
}, (props, $) => {
  $.attrs.add('react-cube-nav', '')

  $.classes.remove('current')
  ;!!props.current && $.classes.add('current')

  return {
    FaceRow: (props) => props.row
  , FaceCol: (props) => props.col
  }
})

class Face extends Component {
  render() {
    return (
      <Face$
        row={this.props.row}
        col={this.props.col}
        current={this.props.current ? 1 : 0}
      >
        {this.props.children}
      </Face$>
    )
  }
}

export default Face
