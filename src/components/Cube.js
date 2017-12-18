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
  $: (props, $) => $.attrs.add('react-cube-nav', '')
})

class Cube extends Component {
  constructor(props) {
    super(props)

    this.struct = new Struct(this.props.children)
    this.coords = { x: 0, y: 0, z: 0 }
    this.layers = []
    this.faces  = []
  }

  getChildContext() {
    return {
      move: this.move.bind(this)
    , has : this.has .bind(this)
    }
  }

  mins(cube) {
    const map  = ([row, c]) => +c
    const sort = (a, b) => a - b

    const x = cube.by('x').map(map).sort(sort)[0]
    const y = cube.by('y').map(map).sort(sort)[0]

    return { x, y }
  }

  componentDidMount() {
    this._setCoords(this.coords)
  }

  render() {
    return (
      <Cube$>
        {this.struct.by('z').map(([cube, z]) => {
          const mins = this.mins(cube)

          return (
            <Layer
              key={`z:${z}`}
              ref={ref => this.layers.push({ z: +z, mins, ref })}
              >
                {cube.map((Face, x, y, z) => {
                  return React.cloneElement(Face, {
                    key: `x:${x}/y:${y}/z:${z}`
                  , ref: ref => this.faces.push({
                      x  : +x
                    , y  : +y
                    , row: y - mins.y + 1
                    , col: x - mins.x + 1
                    , ref
                    })
                  })
                })}
              </Layer>
          )
        })}
      </Cube$>
    )
  }

  _setCoords(coords) {
    this.coords = coords

    this.layers.forEach(layer => {
      const row = this.coords.y - layer.mins.y + 1
      const col = this.coords.x - layer.mins.x + 1

      let dir = 0
      ;layer.z > this.coords.z && (dir =  1)
      ;layer.z < this.coords.z && (dir = -1)

      layer.ref.css(dir, row, col)
    })

    this.faces.forEach(face => {
      const current = face.x === this.coords.x
                   && face.y === this.coords.y

      face.ref.css(current, face.row, face.col)
    })
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
      this._setCoords(coords)
    }
  }

  has(coords, refCoords) {
    coords = this._coords(coords, refCoords)

    return !!this.struct.get(coords).length
  }

  _coords(coords, refCoords = this.coords) {
    if (typeof coords === 'string') {
      switch (coords.toUpperCase()) {
        case 'LEFT' : coords = { x: refCoords.x - 1 }; break
        case 'RIGHT': coords = { x: refCoords.x + 1 }; break
        case 'UP'   : coords = { y: refCoords.y - 1 }; break
        case 'DOWN' : coords = { y: refCoords.y + 1 }; break
        case 'IN'   : coords = { z: refCoords.z - 1 }; break
        case 'OUT'  : coords = { z: refCoords.z + 1 }; break
        default     : coords = refCoords
      }

      return Object.assign({}, this.coords, refCoords, coords)
    } else if (typeof coords === 'function') {
      coords = coords(Object.assign({}, this.coords))

      return Object.assign({}, this.coords, coords)
    }
  }
}

Cube.childContextTypes = {
  move: PropTypes.func
, has : PropTypes.func
}

export default Cube
