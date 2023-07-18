import React from "react";


const propsfunction = (props) => 
{
    return(
        <div>
        <h3>hello {props.firstName}  {props.lastName}   from props function. your age is: {props.age}
  
     </h3> 
     </div>
    );
}



export default propsfunction;