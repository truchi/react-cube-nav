import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import 'react-cube-nav/dist/react-cube-nav.css'
import Cube, { Face } from 'react-cube-nav'

class Arrow extends Component {
  click() {
    this.context.move(this.props.direction)
  }

  render() {
    return (
      <div
        className={this.props.direction}
        onClick={this.click.bind(this)}
      />
    )
  }
}

Arrow.contextTypes = {
  move: PropTypes.func
}

class Arrows extends Component {
  render() {
    return (
      <div className="Arrows">
        {this.context.has('up') &&
          <Arrow direction='up'    />
        }
        {this.context.has('down') &&
          <Arrow direction='down'  />
        }
        {this.context.has('left') &&
          <Arrow direction='left'  />
        }
        {this.context.has('right') &&
          <Arrow direction='right' />
        }
        {this.context.has('in') &&
          <Arrow direction='in'    />
        }
        {this.context.has('out') &&
          <Arrow direction='out'   />
        }
      </div>
    )
  }
}

Arrows.contextTypes = {
  has: PropTypes.func
}

class App extends Component {
  render() {
    return (
      <Cube>
        {/* ============== */}
        {/* ===== OUT ==== */}
        {/* ============== */}
        {/* Top row (y=-1) */}
        <Face x="-1" y="-1" z="0">
          <div className="venusaur" />
          <Arrows />
        </Face>
        <Face x="0" y="-1" z="0">
          <div className="charizard" />
          <Arrows />
        </Face>
        <Face x="1" y="-1" z="0">
          <div className="blastoise" />
          <Arrows />
        </Face>
        {/* Middle row (y=0) */}
        <Face x="-1" y="0" z="0">
          <div className="ivysaur" />
          <Arrows />
        </Face>
        <Face x="0" y="0" z="0">
          <div className="charmeleon" />
          <Arrows />
        </Face>
        <Face x="1" y="0" z="0">
          <div className="wartortle" />
          <Arrows />
        </Face>
        {/* Bottom row (y=1) */}
        <Face x="-1" y="1" z="0">
          <div className="bulbasaur" />
          <Arrows />
        </Face>
        <Face x="0" y="1" z="0">
          <div className="charmander" />
          <Arrows />
        </Face>
        <Face x="1" y="1" z="0">
          <div className="squirtle" />
          <Arrows />
        </Face>
        {/* ============== */}
        {/* ===== IN ===== */}
        {/* ============== */}
        {/* Top row (y=-1) */}
        <Face x="-1" y="-1" z="-1">
          <div className="raichu" />
          <Arrows />
        </Face>
        <Face x="0" y="-1" z="-1">
          <div className="nidoqueen" />
          <Arrows />
        </Face>
        <Face x="1" y="-1" z="-1">
          <div className="nidoking" />
          <Arrows />
        </Face>
        {/* Middle row (y=0) */}
        <Face x="-1" y="0" z="-1">
          <div className="pikachu" />
          <Arrows />
        </Face>
        <Face x="0" y="0" z="-1">
          <div className="nidorina" />
          <Arrows />
        </Face>
        <Face x="1" y="0" z="-1">
          <div className="nidorino" />
          <Arrows />
        </Face>
        {/* Bottom row (y=1) */}
        <Face x="-1" y="1" z="-1">
          <div className="pichu" />
          <Arrows />
        </Face>
        <Face x="0" y="1" z="-1">
          <div className="nidoran♀" />
          <Arrows />
        </Face>
        <Face x="1" y="1" z="-1">
          <div className="nidoran♂" />
          <Arrows />
        </Face>
      </Cube>
    )
  }
}

export default App
