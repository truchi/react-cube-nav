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

    let layers = new Map

    React.Children.forEach(props.children, Face => {
      if (Face.type.name !== 'Face') return

      const z = Face.props.z
      if (!layers.has(z)) layers.set(z, [])

      let faces = layers.get(z) || []
      faces.push(Face)
      layers.set(z, faces)
    })

    this.state = {
      layers: Array.from(layers, ([key, val]) => [key, val])
    }
  }

  render() {
    return (
      <Cube$>
        {this.state.layers.map((layer, i) =>
          <Layer z={layer[0]} key={i}>
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
