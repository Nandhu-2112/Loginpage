import React from "react";
import Phone from "./phone"
function Place(props){
    return(
        <>
         <h1>Place: {props.place}</h1>
        
        <Phone phone="90807060"/>
        </>
    )
}
export default Place