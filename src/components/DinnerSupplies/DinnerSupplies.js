import React, { Component } from 'react';

class DinnerSupplies extends Component {
    render () {
        return (
        <div>
            <div>
            Spoons: {this.props.guestList.length * 2}
            </div>
            <div>
            Forks: {this.props.guestList.length * 2}
            </div>
            <div>
            Knives: {this.props.guestList.length * 2}
            </div>
        </div>
        )
    }
}

export default DinnerSupplies;