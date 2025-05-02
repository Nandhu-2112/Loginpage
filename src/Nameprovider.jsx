import React,{createContext,useState}from "react";
export const NameContext = createContext();
export const NameProvider =({children})=>{
    const [name,setName]=useState('John Doe');
    return(
        <NameContext.Provider value ={{name,setName}}>
            {children}
        </NameContext.Provider>
    )
}
export default NameProvider