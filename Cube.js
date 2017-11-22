import React, { Component } from 'react'
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

    this.layers = this.getLayers()
    this.state  = { x: 0, y: 0, z: 0 }
    this.move   = this.move.bind(this)
  }

  getLayers() {
    let layers = new Map

    React.Children.forEach(this.props.children, Face => {
      if (Face.type.name !== 'Face') return

      const z = Face.props.z
      if (!layers.has(z)) layers.set(z, [])

      let faces = layers.get(z) || []
      faces.push(Face)
      layers.set(z, faces)
    })

    return Array.from(layers, ([key, val]) => [key, val])
  }

  move(direction) {
    let coords = this.state

    let faces, list
    switch (direction.toUpperCase()) {
      case 'UP':
        faces    = this.getCol(coords)
        list     = faces.map(Face => +Face.props.y)
        coords.y = +faces[
          this._mod(list.indexOf(+coords.y) - 1, list.length)
        ].props.y
        break;
      case 'DOWN':
        faces    = this.getCol(coords)
        list     = faces.map(Face => +Face.props.y)
        coords.y = +faces[
          this._mod(list.indexOf(+coords.y) + 1, list.length)
        ].props.y
        break;
      case 'LEFT':
        faces    = this.getRow(coords)
        list     = faces.map(Face => +Face.props.x)
        coords.x = +faces[
          this._mod(list.indexOf(+coords.x) - 1, list.length)
        ].props.x
        break;
      case 'RIGHT':
        faces    = this.getRow(coords)
        list     = faces.map(Face => +Face.props.x)
        coords.x = +faces[
          this._mod(list.indexOf(+coords.x) + 1, list.length)
        ].props.x
        break;
      case 'IN':
        faces    = this.getAisle(coords)
        list     = faces.map(Face => +Face.props.z)
        coords.z = +faces[
          this._mod(list.indexOf(+coords.z) - 1, list.length)
        ].props.z
        break;
      case 'OUT':
        faces    = this.getAisle(coords)
        list     = faces.map(Face => +Face.props.z)
        coords.z = +faces[
          this._mod(list.indexOf(+coords.z) + 1, list.length)
        ].props.z
        break;
    }

    this.setState(coords)
  }

  getAisle({ x, y }) {
    let a = this.layers.map(layer => layer[1].filter(Face => +Face.props.x === +x && +Face.props.y === +y))
    let b = Array.prototype.concat.apply([], a)
  }

  getRow({ y, z }) {
    return this._getRow(this._getLayer(z), { y })
  }

  getCol({ x, z }) {
    return this._getRow(this._getLayer(z), { x })
  }

  _getLayer(z) {
    return this.layers.filter(layer => +layer[0] === +z)[0][1]
  }

  _getRow(layer, { x, y }) {
    let dir, test
    const filter = Face => +Face.props[dir] === +test

    if (typeof x !== 'undefined') {
      [dir, test] = ['x', x]
    } else if (typeof y !== 'undefined') {
      [dir, test] = ['y', y]
    } else {
      return []
    }

    let opp = dir === 'x' ? 'y' : 'x'
    return layer
      .filter(filter)
      .sort((Face1, Face2) => Face1.props[opp] - Face2.props[opp])
  }

  _mod(x, n) {
    return ((x % n) + n) % n
  }

  render() {
    const move = this.move

    return (
      <Cube$>
        {this.layers.map((layer, i) =>
          <Layer key={i} z={layer[0]} coords={this.state}>
            {layer[1].map((Face, j) =>
              React.cloneElement(Face, { key: j, move })
            )}
          </Layer>
        )}
      </Cube$>
    )
  }
}

export default Cube
