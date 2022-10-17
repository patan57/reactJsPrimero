import React from "react";

const Title = (props) => {
    return( 
    <span>
    <h1 style={{backgroundColor: props.color}}>{props.msj}</h1>
    {props.children}
    <hr />
    </span>
    )
}

export default Title;
