import React from "react";
import Atask from "./Atask";
function Btask(props){
    return(
        <>
        <h1>Btask: {props.btask}</h1>
        <h1>Btasky:{props.btasky}</h1>
        <Atask atask="nandhini" atasky="20"/>
         </>
    )
}
export default Btask