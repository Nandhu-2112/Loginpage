const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
  
    return (
      <div>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    );
  };
  
  export default Counter;