 import React from 'react'
 function click(){
    const click =()=>{
        alert('Hi') 
    }
    return(
        <button onClick={click}>click me</button>
    )
 }
 export default click

 //Biniding event 
//  import React from 'react'
//  function Handleclick (name){
//     alert('Hello'+name);
//  }
//  function App(){
//     return <button onClick ={()=> Handleclick('nandhu')}>greet</button>
 
// }
// export default  App
