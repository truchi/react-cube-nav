import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import css from 'react-css-vars'

const Layer$ = css({
  tag        : 'div'
, className  : 'Layer'
, displayName: 'Layer'
}, (props, $) => {
  $.attrs.set('react-cube-nav', '')

  $.classes.remove('current')
  $.classes.remove('in')
  $.classes.remove('out')
  ;props.dir === 0 && $.classes.add('current')
  ;props.dir  >  0 && $.classes.add('out')
  ;props.dir  <  0 && $.classes.add('in')

  return {
    LayerRow: (props) => props.coords.row
  , LayerCol: (props) => props.coords.col
  }
})

class Layer extends Component {
  render() {
    let dir = 0
    ;+this.props.z > +this.props.coords.z && (dir =  1)
    ;+this.props.z < +this.props.coords.z && (dir = -1)

    return (
      <Layer$
        z={this.props.z}
        coords={this.props.coords}
        dir={dir}
      >
        {this.props.children.map(Face => React.cloneElement(Face, {
          current: +Face.props.x === +this.props.coords.x
                && +Face.props.y === +this.props.coords.y
        }))}
      </Layer$>
    )
  }
}

export default Layer
