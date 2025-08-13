import { useState, useEffect } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`El contador cambió a ${count}`)
    }, [count])

    return (
        <div>
            <p>El contador está en: {count}</p>
            <div className='flex gap-3 justify-center'>
                <button className='bg-red-400 w-10 rounded-xl cursor-pointer' onClick={() => setCount(count - 1)}>-</button>
                <button className='bg-red-500 w-10 rounded-xl cursor-pointer' onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}

export default Counter;