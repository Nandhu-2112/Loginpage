
import React, { useContext } from "react";
import { countContext } from './Increment';

const About = () => {
  const { count, setCount } = useContext(countContext);
 const { Age, setAge } = useContext(countContext);


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button><br/><br/>
      <button onClick={() => setCount(count - 1)}>Decrement</button><br/><br/>
      <label for="Age">Age:</label>
      <input type="text" value={Age} onChange = {(e) => setAge(e.target.value)}
         placeholder="type something.."/>
         <p>you typed:{Age}</p>

    </div>
  );
};

export default About;
