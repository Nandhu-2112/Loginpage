// import { useState } from "react";
// function Counter(){
//     const [count, setCount] = useState(0);
//     return(
//         <div>
//             <p>Count:{count}</p>
//             <button onClick ={() => setCount (count+1)}>Increment </button>
//         </div>
//     )
// }
// // export default Counter
 
// import { useState } from "react";
// function Text(){
//     const [count, setCount]= useState(0);
//     const[b, setB]=useState(0);
//     return(
//         <>
//          <label for="name">Name</label>
//          <input type="text" value={count} onChange = {(e) => setCount(e.target.value)}
//          placeholder="type something.."/>
//          <p>you typed:{count}</p>
//          <label for="age">Age</label>
//          <input type="text" value={b} onChange = {(e) => setB(e.target.value)}
//          placeholder="type something.."/>
//          <p>you typed:{b}</p>
//         </>
//     )
// }
// export default Text


// import { useState } from "react";
// function showHideText(){
//     const [isvisible, setIsvisible] = useState (false);
//     return(
//         <div>
//             <button onClick ={()=>setIsvisible(!isvisible)}>
//                 {isvisible? "Hide":"show"}
//             </button>
//             {isvisible && <h2>Hello world!</h2>}
//         </div>
//     )
// }
// export default showHideText


// import { useState } from "react";
// function showHideText(){
//     const [isvisible, setIsvisible] = useState (false);
//     return(
//         <div>
//             <button onClick ={()=>setIsvisible(!isvisible)}>
//                 {isvisible? "ON":"OFF"}
//             </button>
//             {isvisible && <h2>WELCOME</h2>}
//         </div>
//     )
// }
// export default showHideText

// import { useState, useEffect } from "react";

// function UserProfile({moni}) {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         console.log("Fetching data...");
//         fetch(`https://jsonplaceholder.typicode.com/users`)
//             .then((response) => response.json())
//             .then((data) => setUserData(data))
//             .catch((error) => console.error("Error fetching data:", error));
//     }, [moni]);

//     return (
//         <>
//             <h2>{JSON.stringify(userData)}</h2>
//          <h2>User IDS</h2>
//             <ul>
//                 {userData && userData.map(user => (
//                         <li key = {user.id}>{user.id}</li>))}
//             </ul>
           

    
//   </> 

//      );
//  } 
//  export default UserProfile 

import { useState, useEffect } from "react";

function UserProfile({ moni }) {
    const [userIds, setUserIds] = useState([]);

    useEffect(() => {
        console.log("Fetching data...");
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((data) => {
                const ids = data.map(user => user.username);
                setUserIds(ids);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [moni]);

    return (
        <>
            <h2>User IDs</h2>
            <ul>
                {userIds.map(id => (
                    <li key={id}>{id}</li>
                ))}
            </ul>
        </>
    );
}

export default UserProfile;



      



// import { useRef } from "react";
// function InputFocus (){
//     const inputRef = useRef(null);
//     const handleFocus=()=>{
//         inputRef.current.focus();
// };
// return(
//     <div>
//         <input ref ={inputRef}type="text"/>
//         <button onClick={handleFocus}>Focus</button>

//     </div>
// );
// }
// export default InputFocus

// import { useRef,useState,useEffect} from "react";
// function Counter(){
//     const [count,setCount]=useState(0);
//     const PreconRef =useRef(null);
//     useEffect(()=>{
//         PreconRef .current=count;
//     });
//     return(
//         <div>
//             <p>currentcount:{count}</p>
//             <p>precount:{PreconRef.current}</p>
//             <button onClick={()=>setCount(count+1)}>increment</button>
//      </div>
//     );
// }
// export default Counter


