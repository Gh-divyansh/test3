import React from "react";
const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello ji</h1>
    //     </div>
    // )
    return React.createElement('div' , null ,React.createElement('h1',null, "hello")) 
}

export default Hello;