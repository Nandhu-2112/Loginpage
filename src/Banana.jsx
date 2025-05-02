import React from "react";
import Cherry from "./cherry";
function Banana(Name,Age){
    return(
        <>
        <label for="name">Name:{Name}</label>
        <input type="text"id="name"  name="name"></input><br/><br/>
        <label for="age">Age:{Age}</label>
        <input type="text" id="age" name="age"></input><br/><br/>
        <Cherry/>
        </>
    )
}
export default Banana