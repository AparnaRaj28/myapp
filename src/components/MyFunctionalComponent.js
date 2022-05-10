import React from "react";
const MyFunctionalComponent = (props)=>{
    return(
        <div>
            <h2>This is functional component</h2>
            <p>My current state is: {props.state}</p>
        </div>
    )
}
export {MyFunctionalComponent};