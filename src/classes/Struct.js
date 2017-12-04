import _ from '../utils'

class Struct {
  constructor(items) {
    this._items = items
  }

  get({ x, y, z } = { x: 0, y: 0, z: 0 }) {
    return this._items.filter(child => {
      let condition = true
      const checkX  = _.def(x) && _.def(child.props.x)
      const checkY  = _.def(y) && _.def(child.props.y)
      const checkZ  = _.def(z) && _.def(child.props.z)

      if (checkX) condition = condition && +child.props.x === +x
      if (checkY) condition = condition && +child.props.y === +y
      if (checkZ) condition = condition && +child.props.z === +z

      return condition
    })
  }

  by(direction = 'z') {
    return Object
      .entries(
        _.groupBy(this._items, (item) => item.props[direction])
      )
      .map(
        ([dir, items]) => [new Struct(items), dir]
      )
  }

  map(fn = () => {}) {
    return [].map.call(
      this._items
    , (item) => fn(item, item.props.x, item.props.y, item.props.z)
    )
  }
}

export default Struct
