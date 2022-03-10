import React, {useState} from 'react'

function Counter(){

    const [count, setCount]= useState(0)
    return(
        <div>
            <button onClick={()=>setCount(count + 1)} > count {count}</button>
            {/* <input type='button' onClick={()=>setCount(count + 1)} value={count} /> */}
        </div>
    )
}

export default Counter