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

    this.state = { x: 0, y: 0, z: 0 }
  }

  layers() {
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

  render() {
    return (
      <Cube$>
        {this.layers().map((layer, i) =>
          <Layer key={i} z={layer[0]} coords={this.state}>
            {layer[1].map((Face, j) =>
              React.cloneElement(Face, { key: j })
            )}
          </Layer>
        )}
      </Cube$>
    )
  }
}

export default Cube
