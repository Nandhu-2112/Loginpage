import React, { useState } from "react";
// import './Theme.css';
import { useTheme } from './ThemeContext';  

function Text() {
  const [count, setCount] = useState(''); 
  const { isDarkMode, setIsDarkMode } = useTheme();  

  return (
    <>
      <label htmlFor="name">Name:</label> 
      <input
        type="text"
        id="name"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder=" "  
      />
      <p>You typed: {count}</p>

      <div>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "ToggleTheme":"ToggleTheme"}  
        </button>

        
      </div>
    </>
  );
}

export default Text;



// import React, {useState,useEffect} from 'react'
// function App(){
//   const [count,setCount]=useState()
//   count[color , setColor]=useState(false);
//   const dark={
//     color:"white",
//     backgroundcolor:"black",
//   }
//   const white={
//     color:"black",
//     backgroundcolor:"white"
//   }
//   const currentSyle =color? dark:white;
//   const Toggletheme=() => setColor (!color);
//   useEffect (() => {
//     document.body.style.backgroundcolor = color ? "black" : "white"
//      document.body.style.backgroundcolor = color ? "white" :"black"
// },[color]);
// return(

//   <div  style={currentSyle}>
//         <label htmlFor="name">Name:</label> 
//         <input
//            type="text"
//           id="name"
//           placeholder="Type something..." value={count} 
//            onChange={(e) => setCount(e.target.value)}
        
//       />
//        <p>You typed: {count}</p>
  
       
//           <button onClick={Toggletheme}>Toggle</button> 
//          </div>
// )


// }
// export default App