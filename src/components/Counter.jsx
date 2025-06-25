import { useState, useEffect } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`El contador cambió a ${count}`)
    }, [count])

    return (
        <div>
            <p>El contador está en: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default Counter;