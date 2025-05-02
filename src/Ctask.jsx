import React from "react"
import Btask from "./Btask"

function Ctask(props){
    return(
        <>
        <h1>Ctask: {props.ctask}</h1>
        <h1>Ctasky:{props.ctasky}</h1>
        <Btask btask="selva" btasky="15"/>
         </>
    )
}
export default Ctask