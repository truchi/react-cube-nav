import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Structure from '../classes/Structure'
import Layer from './Layer'
import css from 'react-css-vars'

const Cube$ = css({
  tag        : 'div'
, className  : 'Cube'
, displayName: 'Cube'
}, {
  $: (props, $) => $.attrs.set('react-cube-nav', '')
})

class Cube extends Component {
  constructor(props) {
    super(props)

    this.structure = new Structure(this.props.children)
    this.state     = this.structure.getCoords()
    this.move      = this.move.bind(this)
  }

  move(direction) {
    this.setState(
      this.structure
        .setChildren(this.props.children)
        .move(direction)
        .getCoords()
    )
  }

  getChildContext() {
    return {
      move: this.move.bind(this)
    }
  }

  render() {
    return (
      <Cube$>
        {this.structure.map((layer, z) =>
          <Layer key={z} z={z} coords={this.state}>
            {layer.map((Face, x, y) =>
              React.cloneElement(Face, { key: `${x}/${y}` })
            )}
          </Layer>
        )}
      </Cube$>
    )
  }
}

Cube.childContextTypes = {
  move: PropTypes.func
}

export default Cube
