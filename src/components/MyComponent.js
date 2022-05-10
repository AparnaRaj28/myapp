import React from "react";
class MyComponent extends React.Component{
    constructor()
    {
        super();
        this.state={
            id:1,
            name:"Aparna"
        };
    }

     UpdatedName=()=>{
        alert("called");
        this.setState({
            name:"Updatedname"
        });
    }

    render(){


        return(
            <div>
                <h1>hi this is class component hi {this.props.name}</h1>
                <p>This value is from state, {this.state.id} , {this.state.name}</p>
                <button onClick={this.UpdatedName}>update</button>
            </div>
        )
    }
}
export default MyComponent;