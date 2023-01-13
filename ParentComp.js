import React, { Component } from 'react';

import PureComp from './PureComp';

import RegularComp from './RegularComp';


class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"harish"

        }
        
    }
  componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:"harish"
        });
    })
  }  
    
    render() {
        return (
            <div>
                Iam From Parent Component
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComp;