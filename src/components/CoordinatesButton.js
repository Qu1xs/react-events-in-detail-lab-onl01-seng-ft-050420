import React, { Component } from 'react'

class CoordinatesButton extends Component {
    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return (
            <button 
            onClick={this.handleClick}
            >
            Coordinates Button
            </button>
        )
    }
}

export default CoordinatesButton