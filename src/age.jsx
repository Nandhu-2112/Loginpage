import React from "react";
import Place from "./place"


function Age(props){
    return(
        <>
         <h1>Age: {props.age}</h1>
        <Place place="kumbakonam"/>
        </>
    )
}
export default Age