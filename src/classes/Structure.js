import React from 'react'

class Structure {
  constructor(children) {
    this.coords = { x: 0, y: 0, z: 0 }
    this.layers = this._getLayers(children)
  }

  setChildren(children) {
    this.layers = this._getLayers(children)

    return this
  }

  getCoords() {
    return this.coords
  }

  move(direction) {
    let fn, axis, by
    switch (direction.toUpperCase()) {
      case 'UP':
        [fn, axis, by] = [this._getCol, 'y', -1]
        break;
      case 'DOWN':
        [fn, axis, by] = [this._getCol, 'y', 1]
        break;
      case 'LEFT':
        [fn, axis, by] = [this._getRow, 'x', -1]
        break;
      case 'RIGHT':
        [fn, axis, by] = [this._getRow, 'x', 1]
        break;
      case 'IN':
        [fn, axis, by] = [this._getAisle, 'z', -1]
        break;
      case 'OUT':
        [fn, axis, by] = [this._getAisle, 'z', 1]
        break;
    }

    const faces = fn.bind(this)(this.coords)
    const list  = faces.map(Face => +Face.props[axis])

    this.coords[axis] = +faces[
      this._mod(
        list.indexOf(+this.coords[axis]) + by
      , list.length
      )
    ].props[axis]

    return this
  }

  map(cb) {
    return Object
      .keys(this.layers)
      .map(z => cb(this.layers[z], z))
  }

  _layerMap(layer) {
    return (cb) => [].map.call(
      layer
    , Face => cb(Face, Face.props.x, Face.props.y)
    )
  }

  _getLayers(children) {
    let layers = {}

    React.Children.forEach(children, Face => {
      if (Face.type.name !== 'Face') return

      const z = Face.props.z
      if (!layers[z]) {
        layers[z]     = []
        layers[z].map = this._layerMap(layers[z])
      }

      layers[z].push(Face)
    })

    return layers
  }

  _getAisle({ x, y }) {
    return  Array.prototype.concat.apply(
      []
    , this
        .map(layer => layer
          .filter(Face =>
               +Face.props.x === +x
            && +Face.props.y === +y
          )
        )
    )
  }

  _getRow({ y, z }) {
    return this._get(this.layers[z], { y })
  }

  _getCol({ x, z }) {
    return this._get(this.layers[z], { x })
  }

  _get(layer, { x, y }) {
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
}

export default Structure
