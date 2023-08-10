import React from "react";

// function greet() {
//     return <h1>Hello World</h1>;
// }

const greet = (props) =>{
    return (<div>
        <h1>Hello {props.name} , {props.hero}</h1>
        {props.children}
        </div>
    )
} 

export default greet;