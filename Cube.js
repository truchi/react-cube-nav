import React, { Component } from 'react'
import Layer from './Layer'

class Cube extends Component {
  constructor(props) {
    super(props)

    let layers = new Map

    React.Children.forEach(props.children, Face => {
      if (Face.type.name !== 'Face') return

      let z = Face.props.z
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
      <div className="Cube" react-cube-nav="">
        {this.state.layers.map((layer, i) =>
          <Layer z={layer[0]} key={i}>
            {layer[1].map((Face, j) =>
              React.cloneElement(Face, { key: j })
            )}
          </Layer>
        )}
      </div>
    )
  }
}

export default Cube
