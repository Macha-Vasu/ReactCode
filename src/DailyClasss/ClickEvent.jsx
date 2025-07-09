import React from 'react';
import {useState} from "react";




const ClickEvent = () => {
    const [count, setCount] = useState(0);  
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};


// const ClickEvent =()=>{
// const [count, setCount]=useState(0)

//     return (
//         <div>
//             <h2>Click Event</h2>
//             <p>This is a click event example.</p>
//             <button onClick={()=>alert("Button clicked!")}>Click Me!</button>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <button onClick={()=>setCount(count-1)}>Decrement</button>
//             <h3>Counter: {count}</h3>
//         </div>
//     )
// }

export default ClickEvent;