//   import {useEffect} from 'react'
//   function Mycomponent(){
//     useEffect(()=>{
//         console.log('Hi');
        
//     }, []);
//     return(
//         <h1>Hi</h1>
//     )
//   }
//   export default Mycomponent

// import { useEffect , useState} from "react";
// function Counter (){
//     const [count ,setCount] = useState(0);
//     useEffect(()=>{
//         console.log(`count changed to:${count}`);
        
//     },[count])
//     useEffect(()=>{
//                 console.log('Hi');
                
//          }, []);

// return(
//     <>
//     <h2>Hello</h2>
//     <h1>{count}</h1>
//     <button onClick ={()=> setCount(count+1)}>Increment</button>
//     </>
// )
// }
// export default Counter


// import { useEffect } from "react";
// function Counter(){
//     useEffect (()=>{
//         const Timer = setInterval(()=>{
//             console.log("Timer Running");
            
        
//     },1000);
//     return()=>{
//         clearInterval(Timer);
//         console.log("component unmounted");
//     }

//      },[])  
//      return (
//         <>
//         <h2>Hi</h2>
//         </>
//      )
//     }
//     export default Counter
        

  

//class component
 
//   import React, { Component } from 'react';

// class MyComponent extends Component {
//   componentDidMount() {
//     console.log('Hi');
//   }

//   render() {
//     return (
//       <h1>Hi</h1>
//     );
//   }
// }

// export default MyComponent;

//

// import React, { Component } from "react";

// class MyComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//   }

//   componentDidMount() {
//     console.log("Hi");
//   }

//   componentDidUpdate( prevState) {
//     if (prevState.count !== this.state.count) {
//       console.log(`count changed to: ${this.state.count}`);
//     }
//   }

//   handleIncrement = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1
//     }));
//   };

//   render() {
//     return (
//       <>
//         <h2>Hello</h2>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleIncrement}>Increment</button>
//       </>
//     );
//   }
// }

// export default MyComponent;


import React, { Component } from "react";

class Counter extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Timer Running");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component unmounted");
  }

  render() {
    return (
      <>
        <h2>Hi</h2>
      </>
    );
  }
}

export default Counter;
