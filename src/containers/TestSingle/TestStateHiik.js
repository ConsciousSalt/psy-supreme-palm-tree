import React, {useState} from "react";

const TestStateHook = (props) => {
    const [count, setCounter] = useState(1);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>{setCounter(count+1)}}>up</button>
        </div>
    )
}

export default TestStateHook;