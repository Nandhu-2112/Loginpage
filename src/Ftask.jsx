// import { useState } from "react";
// function Text1(){
//     const [count, setCount]= useState(0);
//     return(
//         <>
//          <label for="name">Name</label>
//          <input type="text" value={count} onChange = {(e) => setCount(e.target.value)}
//          placeholder="type something.."/>
//          <p>you typed:{count}</p>
//          <label for="age">Age</label>
//          <input type="text" value={count} onChange = {(e) => setCount(e.target.value)}
//          placeholder="type something.."/>
//          <p>you typed:{count}</p>
//         </>
//     )
// }
// export default Text1


// import { useState } from "react";
// function showHideText(){
//     const [isvisible, setIsvisible] = useState (false);
//     return(
//         <div>
//             <button onClick ={()=>setIsvisible(!isvisible)}>
//                 {/* {isvisible? "ON":"OFF"} */} button
//             </button>
//             {isvisible ? "ON":"Off"}
          
            
//         </div>
//     )
// }
// export default showHideText


// import { useEffect, useState } from "react";
// function Counter(){
//     const [count,setCount] = useState(0);
//     useEffect(()=>{
//         console.log("component rendered");
        
//     });
//     return(
//         <>
//          <p>Count:{count}</p>
//         <button onClick ={() => setCount (count+1)}>Increment </button>

//         </>
//     )
    
// }
// export default Counter


import { useEffect, useState } from "react";
function Counter(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        //  fetch('https://dummyjson.com/products')
        fetch('https://fakestoreapi.com/products/1')
         .then((response)=>response.json())
         .then((result)=>setCount(result))
        
        
    },[]);
    return(
        <>
        Data:{JSON.stringify(count)}

        </>
    )
    
}
export default Counter