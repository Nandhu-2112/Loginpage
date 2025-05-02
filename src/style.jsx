//  import React from "react";
//  const style ={
//     color:"blue",
//  }
//  function Style(){
//     return(
//         <h2 style={style}>Hi</h2>
//     )
//  }
//  export default Style

//external style
// import React from "react";
// import'./Style.css'
// function Style (){
//    return(
//       <h2 className="heading">style</h2>
//    )
// }
// export default Style

//css modules
import React from "react";
import  styles from '../src/mymodule.css'
function Style(){ 
   return(
      <h2 className={styles.title}>css</h2>             //error
   )
}
export default Style