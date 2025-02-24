// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const Counter = ({ count, increment, decrement }) => {
    // const [count, increment, decrement] = props
    return (
        <>
            <div>Counter : {count}</div>
            <button onClick={increment}>incrementer</button>
            <button onClick={decrement}>decrementer</button>
        </>
    );
};

export default Counter;
