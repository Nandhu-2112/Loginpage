import React from "react";
function Cherry({Address,Place}){
    return(
        <>
         <label for="Address">Address:{Address}</label>
        <input type="text" id="Address" name="Address"></input><br/><br/>
        <label for="Place">Place:{Place}</label>
        <input type="place" id="place" name="place"></input><br/><br/>
        
        </>
    )
}
export default Cherry