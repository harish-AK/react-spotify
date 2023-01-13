import React, { Component } from 'react';

class RegularComp extends Component {
    render() {
        return (
            <div>
                Iam Regular Component {this.props.name}
            </div>
        );
    }
}

export default RegularComp;