import React from "react";


export class ClassComp extends React.Component{
    render(){
        return <p>this is class component</p>
    }
}
export class ClassComp1 extends React.Component{
    render(){
        return <p>this is 2nd class component</p>
    }
}

//export default ClassComp; for more than 1 class component we dont need
// default export we can give the export before the classes name


//all the variables are declared in state in a constructor
//setState used to change the value in state
