import React, { createContext, useState } from "react";
export const countContext = createContext();
export const Increment = ({ children }) => {
  const [count, setCount] = useState(0);
  const [Age, setAge] = useState();



  return (
    <countContext.Provider value={{ count, setCount,Age,setAge }}>
      {children}
    </countContext.Provider>
  );
};

export default Increment;
