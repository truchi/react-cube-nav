import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Struct from '../classes/Struct'
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

    this.struct = new Struct(this.props.children)
    this.state  = { x: 0, y: 0, z: 0 }
  }

  getChildContext() {
    return {
      move: this.move.bind(this)
    , has : this.has .bind(this)
    }
  }

  render() {
    return (
      <Cube$>
        {this.struct.by('z').map(([cube, z]) =>
          <Layer key={`z:${z}`} z={z} coords={this.state}>
            {cube.map((Face, x, y, z) => {
              return React.cloneElement(Face, { key: `x:${x}/y:${y}/z:${z}` })
            })}
          </Layer>
        )}
      </Cube$>
    )
  }

  /**
   * Examples:
   * move({ x: 1 })
   * move({ x: 0, y: 0, z: 0 })
   * move((coords) => coords)
   * move('out')
   */
  move(coords) {
    coords = this._coords(coords)

    if (this.has(coords)) {
      this.setState(coords)
    }
  }

  has(coords) {
    coords = this._coords(coords)

    return !!this.struct.get(coords).length
  }

  _coords(coords) {
    if (typeof coords === 'string') {
      switch (coords.toUpperCase()) {
        case 'LEFT' : coords = { x: this.state.x - 1 }; break
        case 'RIGHT': coords = { x: this.state.x + 1 }; break
        case 'UP'   : coords = { y: this.state.y - 1 }; break
        case 'DOWN' : coords = { y: this.state.y + 1 }; break
        case 'IN'   : coords = { z: this.state.z - 1 }; break
        case 'OUT'  : coords = { z: this.state.z + 1 }; break
        default     : coords = this.state
      }
    } else if (typeof coords === 'function') {
      coords = coords(Object.assign({}, this.state))
    }

    return Object.assign({}, this.state, coords)
  }
}

Cube.childContextTypes = {
  move: PropTypes.func
, has : PropTypes.func
}

export default Cube
