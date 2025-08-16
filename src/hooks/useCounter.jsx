import { useState } from "react"

const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)

    const reset = () => setCount(initialValue)
    const decrement = () => setCount(prev => prev - 1)
    const increment = () => setCount(prev => prev + 1)

    return {
        count,
        reset,
        decrement,
        increment
    }
}

export default useCounter