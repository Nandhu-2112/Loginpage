import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { Router, Routes } from 'react-router-dom'
// import Home1 from './Home1'
// import Contact from './Contact'

// import Name from './Name'
// import Namein from "./Namein"
// import './input.css'
// import Apple from "./Apple"



// import Student from './Student'

// import Ctask from './Ctask'
// import Dtask from './Dtask'
// import Greetings from './Greetings'
// import './App.css'
// import Task from '../src/task'
// import Onetask from '../src/Onetask'
// import Twotask from './Twotask'
// import Threetask from './Threetask'
// import Person from './Person'
// import Peoplef from './Peoplef'

// import Peoplef from './Peoplef'

// import Use from './Use'
// import Ftask from './Ftask'
// import Table from './Table'
// import Avatar from './Avatar'
// import Component from './Component'
// import UserProfile from './Use'
// import InputFocus from './Use'

// import Counter from './Use'
// import UserProfile from './Use'
// import React from 'react'
// import NameProvider from './Nameprovider'
// import Home from './Home'//
// import React from 'react'
// import Increment from './Increment'
// import About from './About'
// import  Toggle from './Toggle'
// import React from 'react';
// import { ThemeProvider } from './ThemeContext';
// import Toggle from './Toggle';
// import Reducer from './Reducer'
// import Toggle from './Toggle'
// import Event from './Event'
// import Style from './style'
// import Mounting from './Mounting'
// import Mycomponent from './Mounting'
// import Counter from './Mounting'
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './Home'
// import About1 from './About1'
// import Contact from './Contact'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './Component/Loginpage';
import Register from './Component/Register';
import Table from './Component/Table';




function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   // </p>
    // </>
    // <>
    // <Task/>
    // </>
  //   <>
  // <Ctask ctask="nave" ctasky="21"/>
  //  </>
  // <>
  // <Dtask/>
  // </>
//   <>
//    <Namein/>
//  </>
  // <>
  // <Apple/>
  // </>
  // <>
  // <Greetings name="Nandhini"/>
  // </>
//  <>
//  <Person name="Nandhu"/>
//  <Person/>
//  </>
  // <>
  // <Peoplef name="Nandhini"/>
  // <Peoplef />
  
  // </>
  // <>
  // <InputFocus/>
  // </>
  // <>
  // <UserProfile/>
  // </>

  //  <>
  // <Ftask/>
  // </> 
//    <>
//    <Table/>
//  </>
//   <>
// <Avatar/>
// </> 
//  <> 
//  <Component/>
//  </>
//  <>
// <Header/>
//  </> 

// {/* <NameProvider>
// <Home/>
// </NameProvider> */}
//  <Increment>
//    <About/>
//  </Increment> 
//  <>
// <Toggle/>
// </> 
//  <ThemeProvider>
//       <Toggle />
//     </ThemeProvider> 
// {/* <> 
// <Reducer/>
// </> */}
// {/* <>
// <Event/>
// </> */}
// {/* <>
// <Style/>
// </> */}
// {/* <>
// <Mycomponent/>
// </> */}
// {/* <Router>
// <Routes>
//   <Route path="/Home" element={<Home/>} />
//   <Route path="/About" element={<About1 />} />
//   <Route path="/Contact" element={<Contact />} />
// </Routes>
// </Router> */}
<Router>
<Routes>
  <Route path="/" element={<Loginpage />} />
  <Route path="/register" element={<Register />} />
  <Route path="/table" element={<Table />} />
</Routes>
</Router>




  )
}

export default App
