import React from "react";

const UpdatedComp=OrginalComp=>{ //arrow function
    class NewComp extends React.Component{
        render(){
            return<OrginalComp name="the user" />;//return the name using orginalcomp function
        }
    }
    return NewComp;  //return the class
}

export default UpdatedComp;


//reusability of components with one other 
//with this we can use 2 components printing statement with the same time
// higher order component is function that takes
// a component and returns a new component